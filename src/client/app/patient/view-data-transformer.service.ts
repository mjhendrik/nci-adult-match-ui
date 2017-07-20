import { Injectable } from '@angular/core';

import { AssignmentReasonSection } from './assignment-reason-table/assignment-reason-table.component';

/*
*  View transformation service
*/
@Injectable()
export class ViewDataTransformer {
  transformPatient(source: any): any {
    const transformedPatient: any = { ...source }; // Deep-copy the source

    transformedPatient.disease = source.diseases && source.diseases.length ? source.diseases[0] : {};

    if (transformedPatient.patientTriggers && transformedPatient.patientTriggers.length) {
      transformedPatient.patientTriggers = transformedPatient.patientTriggers.reverse();
    }

    if (transformedPatient.biopsies && transformedPatient.biopsies.length) {
      transformedPatient.biopsies = transformedPatient.biopsies.reverse().map((x: any) => this.transformBiopsy(transformedPatient, x));
    } else {
      transformedPatient.biopsies = [];
    }

    if (transformedPatient.races && transformedPatient.races.length) {
      transformedPatient.raceList = transformedPatient.races.join(', ');
    }

    this.transformAssignments(transformedPatient);

    return transformedPatient;
  }

  private transformBiopsy(transformedPatient: any, source: any): any {
    let transformedBiopsy = source;

    this.transformMdaMessages(transformedPatient, transformedBiopsy);
    this.transformNgsMessages(transformedPatient, transformedBiopsy);
    this.transformAssayMessages(transformedPatient, transformedBiopsy);

    return transformedBiopsy;
  }

  private transformMdaMessages(transformedPatient: any, transformedBiopsy: any): void {
    if (!('mdAndersonMessages' in transformedBiopsy)) {
      return;
    }

    transformedBiopsy.nucleicAcidSendouts = transformedBiopsy.nucleicAcidSendouts || [];
    for (let message of transformedBiopsy.mdAndersonMessages) {
      switch (message.message) {
        case 'NUCLEIC_ACID_SENDOUT':
          {
            let sendout: any = {};
            transformedBiopsy.nucleicAcidSendouts.push(sendout);

            sendout.molecularSequenceNumber = message.molecularSequenceNumber;
            sendout.trackingNumber = message.trackingNumber;
            sendout.destinationSite = message.destinationSite;
            sendout.dnaConcentration = message.dnaConcentration;
            sendout.dnaVolume = message.dnaVolume;
            sendout.reportedDate = message.reportedDate;
            sendout.comment = message.comment;
          }
          break;

        case 'PATHOLOGY_CONFIRMATION':
        case 'PATHOLOGY_FAILURE':
          {
            transformedBiopsy.pathologyReceivedDate = message.reportedDate;
            if (message.status === 'Y') {
              transformedBiopsy.pathologyStatus = 'Agreement on pathology';
            } else if (message.status === 'N') {
              transformedBiopsy.pathologyStatus = 'Do not agree on pathology';
            } else if (message.status === 'U') {
              transformedBiopsy.pathologyStatus = 'Pathology status is unknown at this time';
            }
          }
          break;

        case 'SPECIMEN_RECEIVED':
          {
            transformedBiopsy.specimenCollectionDate = message.collectedDate ? message.collectedDate : message.reportedDate;
            transformedBiopsy.specimenReceivedDate = message.reportedDate ? message.reportedDate : null;
            transformedBiopsy.comment = message.comment;
          }
          break;

        case 'SPECIMEN_FAILURE':
          {
            transformedBiopsy.specimenFailureDate = message.reportedDate ? message.reportedDate : null;
            transformedBiopsy.comment = message.comment;
          }
          break;
      }
    }
  }

  private transformNgsMessages(transformedPatient: any, transformedBiopsy: any): void {
    /*
    * The view data-model structure:
    * biopsy {
    *    nucleicAcidSendouts: [{
    *        analyses: [
    *           {variantReport: . . ., assignmentReport: . . .}
    *        ]
    *    }]
    * }
    */

    if (!('nextGenerationSequences' in transformedBiopsy)) {
      return;
    }

    for (let message of transformedBiopsy.nextGenerationSequences) {
      if (!message.ionReporterResults) {
        continue;
      }

      let msn: string = message.ionReporterResults.molecularSequenceNumber;
      let sendout = transformedBiopsy.nucleicAcidSendouts.find((x: any) => x.molecularSequenceNumber === msn);
      if (!sendout) {
        continue;
      }

      sendout.analyses = sendout.analyses || [];

      let analysis: any = {};
      sendout.analyses.push(analysis);

      analysis.analysisId = message.ionReporterResults.jobName;

      analysis.variantReportStatus = message.status;
      analysis.variantReportCreatedDate = message.ionReporterResults.variantReport
        ? message.ionReporterResults.variantReport.createdDate : null;
      analysis.variantReporterFileReceivedDate = message.dateReceived;
      analysis.variantReporterRejectedOrConfirmedDate = message.dateVerified;

      if (!message.ionReporterResults.variantReport)
        continue;

      transformedPatient.analyses = transformedPatient.analyses || {};

      let variantReport = message.ionReporterResults.variantReport;
      analysis.variantReport = variantReport;
      variantReport.variantReporterFileReceivedDate = analysis.variantReporterFileReceivedDate;

      const variantTables: Array<string> = [
        'geneFusions',
        'copyNumberVariants',
        'indels',
        'nonHotspotRules',
        'singleNucleotideVariants',
        'unifiedGeneFusions'
      ];

      variantReport.moiSummary = {
        totalaMOIs: 0,
        totalMOIs: 0,
        confirmedaMOIs: 0,
        confirmedMOIs: 0
      };

      for (let table of variantTables) {
        this.calculateMoiSummary(variantReport[table], variantReport.moiSummary);
      }

      transformedPatient.analyses[message.ionReporterResults.jobName] = analysis;

      variantReport.variantReportStatus = analysis.variantReportStatus;
      variantReport.variantReportCreatedDate = analysis.variantReportCreatedDate;
      variantReport.variantReporterFileReceivedDate = analysis.variantReporterFileReceivedDate;
      variantReport.variantReporterRejectedOrConfirmedDate = analysis.variantReporterRejectedOrConfirmedDate;

      variantReport.biopsySequenceNumber = transformedBiopsy.biopsySequenceNumber;
      variantReport.analysisId = message.ionReporterResults.jobName;
      variantReport.patientSequenceNumber = transformedBiopsy.patientSequenceNumber;
      variantReport.molecularSequenceNumber = message.ionReporterResults.molecularSequenceNumber;
      variantReport.tvcVersion = message.tvcVersion;

      variantReport.dnaBamFilePath = message.ionReporterResults.dnaBamFilePath;
      variantReport.rnaBamFilePath = message.ionReporterResults.rnaBamFilePath;

      variantReport.dnaBaiFilePath = message.ionReporterResults.dnaBaiFilePath;
      variantReport.rnaBaiFilePath = message.ionReporterResults.rnaBaiFilePath;

      variantReport.vcfFilePath = message.ionReporterResults.vcfFilePath;
      variantReport.qcFile = message.ionReporterResults.qcFile;
    }
  }

  private transformAssayMessages(transformedPatient: any, transformedBiopsy: any): void {
    if (!('assayMessages' in transformedBiopsy)) {
      return;
    }

    for (let assay of transformedBiopsy.assayMessages) {
      assay.gene = this.parseGeneFromAssay(assay.biomarker);
    }
  }

  private calculateMoiSummary(table: any[], moiSummary: any): void {
    for (let item of table) {
      moiSummary.totalMOIs += 1;

      if (item.isAMoi) {
        moiSummary.totalaMOIs += 1;
        if (item.confirmed) {
          moiSummary.confirmedaMOIs += 1;
        }
      } else if (item.confirmed) {
        moiSummary.confirmedMOIs += 1;
      }
    }
  }

  private transformAssignments(transformedPatient: any): void {
    /*
    * The view data-model structure:
    * biopsy {
    *    nucleicAcidSendouts: [{
    *        analyses: [
    *           {variantReport: . . ., assignmentReport: . . .}
    *        ]
    *    }]
    * }
    */

    if (!('patientAssignments' in transformedPatient)
      || !Array.isArray(transformedPatient.patientAssignments)
      || !transformedPatient.patientAssignments.length) {
      return;
    }

    for (let assignment of transformedPatient.patientAssignments) {
      let bsn = assignment.biopsySequenceNumber;
      let biopsy = transformedPatient.biopsies.find((x: any) => x.biopsySequenceNumber === bsn);
      if (!biopsy || !biopsy.nucleicAcidSendouts) {
        continue;
      }

      // Flatten the biopsies' analyses into one array, and look for confirmed ones
      let confirmedVariantReports = biopsy.nucleicAcidSendouts
        .map((x: any) => x.analyses)
        .reduce((acc: Array<any>, val: Array<any>) => acc.concat(val))
        .filter((x: any) => x.variantReportStatus === 'CONFIRMED');

      if (confirmedVariantReports && confirmedVariantReports.length) {
        let lastVariantReportAnalys = confirmedVariantReports[confirmedVariantReports.length - 1];
        lastVariantReportAnalys.assignmentReport = assignment;

        if (assignment.treatmentArm && assignment.patientAssignmentLogic) {
          let selected = assignment.patientAssignmentLogic.find((x: any) => x.patientAssignmentReasonCategory === 'SELECTED');
          assignment.hasSelectedTreatmentArm = !!selected;
          assignment.reasons = this.transformAssignmentReason(assignment.patientAssignmentLogic);
        }
      }
    }
  }

  private transformAssignmentReason(patientAssignmentLogic: any): any {
    if (!patientAssignmentLogic)
      return null;

    let sections: AssignmentReasonSection[] = [];
    let map: { [key: string]: AssignmentReasonSection } = {
      'SELECTED': null,
      'RANDOMIZE_TIE_BREAKER': null,
      'SMALLEST_ACCRUED_NUMBER_TIE_BREAKER': null,
      'ALLELE_FREQUENCY_TIE_BREAKER': null,
      'LEVEL_OF_EVIDENCE_TIE_BREAKER': null,
      'NO_CONCORDANCE': null,
      'ARM_FULL': null,
      'NOT_ELIGIBLE': null,
      'COMMITTEE_REJECTED': null,
      'PRIOR_ASSIGNMENT': null,
      'RECORD_BASED_EXCLUSION': null,
      'NO_VARIANT_MATCH': null,
      'ARM_NOT_OPEN': null
    };

    for (let item of patientAssignmentLogic) {
      let section: AssignmentReasonSection;
      if (!(item.patientAssignmentReasonCategory in map)) {
        section = new AssignmentReasonSection();
        section.name = item.patientAssignmentReasonCategory;
        map[item.patientAssignmentReasonCategory] = section;
      } else {
        section = map[item.patientAssignmentReasonCategory];
        // console.log('item.patientAssignmentReasonCategory');
        // console.log(item.patientAssignmentReasonCategory);
      }
    }

    for (let item in map) {
      if (map[item]) {
        sections.push(map[item]);
      }
    }

    return sections;
  }

  private parseGeneFromAssay(assay: string): string {
    var replacer = function (match: any, p1: any, p2: any, p3: any, offset: any, string: any) {
      return p2;
    };

    try {
      var regExp = /^(ICC)([A-Za-z0-9_-]*)(s)$/; // Parse out 'ICC' at the start of the value and 's' at the end, all case-sensitive
      if (!assay || (typeof assay !== 'string'))
        return assay;
      return assay.replace(regExp, replacer);
    } catch (error) {
      return assay;
    }
  }
}
