import { Injectable } from '@angular/core';

/*
*  View transformation service
*/
@Injectable()
export class ViewDataTransformer {
  transformPatient(source: any): any {
    const transformedPatient: any = { ...source }; // Deep-copy the source

    transformedPatient.disease = source.diseases && source.diseases.length ? source.diseases[0] : null;

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
    let transformed = source;

    this.transformMdaMessages(transformedPatient, transformed);
    this.transformNgsMessages(transformedPatient, transformed);

    return transformed;
  }

  private transformMdaMessages(transformedPatient: any, transformed: any): void {
    if (!('mdAndersonMessages' in transformed)) {
      return;
    }

    transformed.nucleicAcidSendouts = transformed.nucleicAcidSendouts || [];
    for (let message of transformed.mdAndersonMessages) {
      switch (message.message) {
        case 'NUCLEIC_ACID_SENDOUT':
          {
            let sendout: any = {};
            transformed.nucleicAcidSendouts.push(sendout);

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
            transformed.pathologyReceivedDate = message.reportedDate;
            if (message.status === 'Y') {
              transformed.pathologyStatus = 'Agreement on pathology';
            } else if (message.status === 'N') {
              transformed.pathologyStatus = 'Do not agree on pathology';
            } else if (message.status === 'U') {
              transformed.pathologyStatus = 'Pathology status is unknown at this time';
            }
          }
          break;

        case 'SPECIMEN_RECEIVED':
          {
            transformed.specimenCollectionDate = message.collectedDate ? message.collectedDate : message.reportedDate;
            transformed.specimenReceivedDate = message.reportedDate ? message.reportedDate : null;
            transformed.comment = message.comment;
          }
          break;

        case 'SPECIMEN_FAILURE':
          {
            transformed.specimenFailureDate = message.reportedDate ? message.reportedDate : null;
            transformed.comment = message.comment;
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
      analysis.dnaBamFilePath = message.ionReporterResults.dnaBamFilePath;
      analysis.rnaBamFilePath = message.ionReporterResults.rnaBamFilePath;

      analysis.dnaBaiFilePath = message.ionReporterResults.dnaBaiFilePath;
      analysis.rnaBaiFilePath = message.ionReporterResults.rnaBaiFilePath;

      analysis.vcfFilePath = message.ionReporterResults.vcfFilePath;
      analysis.qcFile = message.ionReporterResults.qcFile;

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
      variantReport.torrentVariantCallerVersion = message.oncomineVariantAnnotationToolVersion;
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
      }
    }
  }
}
