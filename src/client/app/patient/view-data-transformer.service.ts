import { Injectable } from '@angular/core';

import { AssignmentReasonSection } from './assignment-reason-table/assignment-reason-table.component';
import { AssignmentReportData } from './assignment-report/assignment-report.module';
import { VariantReportComparisonSummary } from './patient-variant-report-oa/variant-report-comparison-summary';
import { VariantReportComparisonData } from './variant-report-comparison-data';
import { VariantReportData } from './variant-report-data';
import { ApiStatusUpdateSuccess } from './patient-api.service';
import { ConfirmableItem } from '../shared/check-box-with-confirm/check-box-with-confirm.component';
import { GmtPipe } from '../shared/pipes/gmt.pipe';

const variantTables: Array<string> = [
  // 'geneFusions', // geneFusions is never used, unifiedGeneFusions is used instead
  'copyNumberVariants',
  'indels',
  'unifiedGeneFusions',
  'singleNucleotideVariants'
];

/*
*  View transformation service
*/
@Injectable()
export class ViewDataTransformer {

  transformPatient(source: any): any {
    const transformedPatient: any = { ...source }; // Deep-copy the source

    if (!source) {
      return transformedPatient;
    }

    transformedPatient.concordance = this.transformConcordance(transformedPatient);

    transformedPatient.isOutsideAssayWorkflow = false;
    if (transformedPatient.patientTriggers && transformedPatient.patientTriggers.length) {
      transformedPatient.patientTriggers = transformedPatient.patientTriggers.reverse();
      transformedPatient.isOutsideAssayWorkflow = transformedPatient.patientTriggers.some(
        (x: any) => x.patientStatus === 'REGISTRATION_OUTSIDE_ASSAY'
      );
    }

    transformedPatient.disease = {};
    if (source.diseases && source.diseases.length) {
      if (transformedPatient.isOutsideAssayWorkflow) {
        transformedPatient.disease.outsideData = source.diseases.length > 0 ? source.diseases[0] : {};
        transformedPatient.disease.matchData = source.diseases.length > 1 ? source.diseases[1] : {};
      } else {
        transformedPatient.disease = source.diseases && source.diseases.length ? source.diseases[0] : {};
      }
    }

    if (transformedPatient.biopsies && transformedPatient.biopsies.length) {
      transformedPatient.biopsies = transformedPatient.biopsies.reverse()
        .map((x: any) => this.transformBiopsy(transformedPatient, x));
    } else {
      transformedPatient.biopsies = [];
    }

    if (transformedPatient.races && transformedPatient.races.length) {
      transformedPatient.raceList = transformedPatient.races.join(', ');
    }

    this.transformAssignments(transformedPatient);

    return transformedPatient;
  }

  transformOutsidePatientReport(
    report: VariantReportComparisonData,
    cnvDataMatch: any,
    ocpDataMatch: any,
    isOutsideAssayReport: boolean,
    patientSequenceNumber: string): VariantReportComparisonData {

    if (!report) {
      return null;
    }

    const transformedReport: VariantReportComparisonData = { ...report }; // Deep-copy the source

    transformedReport.patientSequenceNumber = patientSequenceNumber;

    let cnvDataOutside: any = {};
    let ocpDataOutside: any = {};
    cnvDataMatch = cnvDataMatch || {};
    ocpDataMatch = ocpDataMatch || {};

    transformedReport.matchData = transformedReport.matchData || {};
    transformedReport.matchData.pool1 = ocpDataMatch.pool1;
    transformedReport.matchData.pool2 = ocpDataMatch.pool2;
    transformedReport.matchData.mapd = cnvDataMatch.mapd;
    transformedReport.matchData.cellularity = cnvDataMatch.cellularity;
    transformedReport.matchData.tvc_version = cnvDataMatch.tvc_version;
    transformedReport.matchData.showPools = this.showPools(cnvDataMatch.tvc_version);
    transformedReport.matchData.assignmentReport = transformedReport.matchData.assignmentReport || {};
    transformedReport.matchData.assignmentReport.isOutsideAssayWorkflow = true;
    transformedReport.matchData.assignmentReport.isOutsideAssay = true;
    transformedReport.matchData.assignmentReport.biopsySequenceNumber = transformedReport.matchData.biopsySequenceNumber;
    transformedReport.matchData.moiSummary = transformedReport.matchData.moiSummary
      || { totalaMOIs: 0, totalMOIs: 0, confirmedaMOIs: 0, confirmedMOIs: 0 };
    transformedReport.matchData.isOutsideAssayWorkflow = true;
    transformedReport.matchData.isOutsideAssay = false;
    transformedReport.matchData.variantReportRejectedOrConfirmedDate = transformedReport.matchData.dateVerified;
    transformedReport.matchData.disease = transformedReport.matchData.disease || {};
    transformedReport.matchData.commenter = transformedReport.matchData.metadata ? transformedReport.matchData.metadata.commenter : null;
    this.transformAssayMessages(transformedReport.matchData.assayMessages);

    transformedReport.outsideData = transformedReport.outsideData || {};
    transformedReport.outsideData.pool1 = ocpDataOutside.pool1;
    transformedReport.outsideData.pool2 = ocpDataOutside.pool2;
    transformedReport.outsideData.mapd = cnvDataOutside.mapd;
    transformedReport.outsideData.cellularity = cnvDataOutside.cellularity;
    transformedReport.outsideData.tvc_version = cnvDataOutside.tvc_version;
    transformedReport.outsideData.showPools = this.showPools(cnvDataOutside.tvc_version);
    transformedReport.outsideData.assignmentReport = transformedReport.outsideData.assignmentReport || {};
    transformedReport.outsideData.assignmentReport = transformedReport.outsideData.assignmentReport || {};
    transformedReport.outsideData.assignmentReport.isOutsideAssayWorkflow = true;
    transformedReport.outsideData.assignmentReport.isOutsideAssay = true;
    transformedReport.outsideData.assignmentReport.biopsySequenceNumber = transformedReport.outsideData.biopsySequenceNumber;
    transformedReport.outsideData.moiSummary = transformedReport.outsideData.moiSummary
      || { totalaMOIs: 0, totalMOIs: 0, confirmedaMOIs: 0, confirmedMOIs: 0 };
    transformedReport.outsideData.isOutsideAssayWorkflow = true;
    transformedReport.outsideData.isOutsideAssay = true;
    transformedReport.outsideData.variantReportRejectedOrConfirmedDate = transformedReport.outsideData.dateVerified;
    transformedReport.outsideData.disease = transformedReport.outsideData.disease || {};
    transformedReport.outsideData.commenter = transformedReport.outsideData.metadata ? transformedReport.outsideData.metadata.commenter : null;
    this.transformAssayMessages(transformedReport.outsideData.assayMessages);

    this.transformAssignmentLogic(transformedReport.matchData.assignmentReport);
    this.transformAssignmentLogic(transformedReport.outsideData.assignmentReport);

    this.precessPassFailVariants(transformedReport.comparisonVariantReport);

    transformedReport.showOutsideAssay = isOutsideAssayReport;

    transformedReport.outsideData.isVariantReportEditable = this.getVariantReportEditable(transformedReport.outsideData);
    transformedReport.outsideData.isAssignmentReportEditable = this.getAssignmentReportEditable(transformedReport.outsideData);

    transformedReport.matchData.isVariantReportEditable = this.getVariantReportEditable(transformedReport.matchData);
    transformedReport.matchData.isAssignmentReportEditable = this.getAssignmentReportEditable(transformedReport.matchData);

    transformedReport.showComparison = transformedReport.outsideData.variantReportStatus &&
      transformedReport.outsideData.variantReportStatus === 'CONFIRMED' &&
      transformedReport.matchData.variantReportStatus &&
      transformedReport.matchData.variantReportStatus === 'CONFIRMED';

    return transformedReport;
  }

  updateVariantReportStatus(report: VariantReportData, updatedStatus: ApiStatusUpdateSuccess): void {
    report.variantReportStatus = updatedStatus.status;
    report.comments = updatedStatus.comments;
    report.commenter = updatedStatus.commenter;
    report.isVariantReportEditable = this.getVariantReportEditable(report);
    report.variantReportRejectedOrConfirmedDate = updatedStatus.dateTime || new Date().toString();
    if (report.variantReport) {
      // Need to really cleanup the data model
      report.variantReport.variantReportStatus = report.variantReportStatus;
      report.variantReport.comments = report.comments;
      report.variantReport.commenter = report.commenter;
      report.variantReport.variantReportRejectedOrConfirmedDate = report.variantReportRejectedOrConfirmedDate;
    }
  }

  updateAssignmentReportStatus(report: VariantReportData, updatedStatus: ApiStatusUpdateSuccess): void {
    report.assignmentReport.dateConfirmed = updatedStatus.dateTime || new Date().toString();
    report.assignmentReport.derivedStatus = report.assignmentReport.dateConfirmed ? 'CONFIRMED' : 'PENDING';
    report.assignmentReport.comments = updatedStatus.comments;
    report.assignmentReport.commenter = updatedStatus.commenter;
    report.isAssignmentReportEditable = this.getAssignmentReportEditable(report);
  }

  updateVariantStatus(variantReport: VariantReportData, item: ConfirmableItem, updatedStatus: ApiStatusUpdateSuccess): void {
    item.comment = updatedStatus.comments;
    let fullItem: any = item;
    let metadata = fullItem.metadata || {};
    metadata.comment = item.comment;
    this.calculateMoiSummary(variantReport.variantReport);
  }

  updateOutsidePatientReport(report: VariantReportComparisonData): void {
    if (report.outsideData) {
      report.outsideData.isVariantReportEditable = this.getVariantReportEditable(report.outsideData);
    }
    if (report.matchData) {
      report.matchData.isVariantReportEditable = this.getVariantReportEditable(report.matchData);
    }
    report.showComparison = report.outsideData.variantReport.variantReportStatus
      && report.outsideData.variantReport.variantReportStatus !== 'PENDING'
      && report.matchData.variantReport.variantReportStatus
      && report.matchData.variantReport.variantReportStatus !== 'PENDING';
  }

  transformPatientAssignment(source: any, dateAssigned: string): AssignmentReportData {
    if (!source) {
      return null;
    };

    const transformedPatient: any = { ...source }; // Deep-copy the source

    let assignmentReport;
    if (transformedPatient.patientAssignments && transformedPatient.patientAssignments.length > 0) {
      assignmentReport = (transformedPatient.patientAssignments as any[])
        .find(x => x.dateAssigned.$date.toString() === dateAssigned);
    }

    if (assignmentReport) {
      this.transformAssignmentLogic(assignmentReport);
    } else {
      assignmentReport = {};
    }

    return {
      psn: transformedPatient.patientSequenceNumber,
      molecularSequenceNumber: transformedPatient.biopsies[0].nextGenerationSequences[0].ionReporterResults.molecularSequenceNumber,
      analysisId: transformedPatient.biopsies[0].nextGenerationSequences[0].ionReporterResults.jobName,
      assignmentReport: assignmentReport,
      dateAssigned: dateAssigned
    };

  }

  showPools(tvcVersion: string): boolean {
    return !!tvcVersion && tvcVersion.startsWith('5.2');
  }

  getAssignmentReportEditable(report: any): boolean {
    if (!report || !report.assignmentReport)
      return false;
    return report.assignmentReport.derivedStatus === 'PENDING';
  }

  getVariantReportEditable(variantReport: VariantReportData): boolean {
    if (!variantReport && !variantReport.variantReportStatus) {
      return false;
    }

    return variantReport.variantReportStatus === 'PENDING';
  }

  transformPatientVariantReport(transformedPatient: any,
    copyNumberData: any,
    oncominePanelData: any,
    biopsySequenceNumber: string,
    analysisId: string): VariantReportData {

    const analysis = transformedPatient.analyses[analysisId] || {};
    const tvc_version = copyNumberData.tvc_version;
    const showPools: boolean = this.showPools(tvc_version);

    let variantReport = analysis.variantReport as VariantReportData;

    variantReport.patientSequenceNumber = transformedPatient.patientSequenceNumber;
    variantReport.biopsySequenceNumber = biopsySequenceNumber;
    variantReport.analysisId = analysisId;
    variantReport.patient = transformedPatient;
    variantReport.analysis = analysis;
    variantReport.variantReport = analysis.variantReport;
    variantReport.assignmentReport = analysis.assignmentReport;
    variantReport.assignmentHistory = transformedPatient.patientAssignments;
    variantReport.parsed_vcf_genes = (typeof copyNumberData.copy_number_variant_genes === 'undefined')
      ? null
      : [copyNumberData.copy_number_variant_genes, copyNumberData.file_name, tvc_version];
    variantReport.tvc_version = tvc_version;
    variantReport.pool1 = oncominePanelData.pool1;
    variantReport.pool2 = oncominePanelData.pool2;
    variantReport.mapd = copyNumberData.mapd;
    variantReport.cellularity = copyNumberData.cellularity;
    variantReport.showPools = showPools;
    variantReport.assayMessages = analysis.assayMessages || [];
    this.transformAssayMessages(variantReport.assayMessages);

    variantReport.isVariantReportEditable = this.getVariantReportEditable(analysis.variantReport);
    variantReport.isAssignmentReportEditable = true;
    variantReport.isOutsideAssayWorkflow = false;
    variantReport.disease = transformedPatient.disease || {};
    variantReport.commenter = variantReport.metadata ? variantReport.metadata.commenter : null;

    return variantReport;
  }

  findVariantReport(patient: any, analysisId: string): any {
    if (!patient)
      return null;

    // The path: patient.biopsies[k].nucleicAcidSendouts[m].analyses[n].variantReport
    for (let biopsy of patient.biopsies || []) {
      for (let nucleicAcidSendout of biopsy.nucleicAcidSendouts || []) {
        for (let analysis of nucleicAcidSendout.analyses || []) {
          if (analysis.analysisId === analysisId) {
            return analysis.variantReport || {};
          }
        }
      }
    }

    return null;
  }

  getVariantReportStatusDateLabel(variantReportStatus: string): string {
    if (variantReportStatus === 'CONFIRMED')
      return 'Confirmed Date';

    if (variantReportStatus === 'REJECTED')
      return 'Rejected Date';

    return 'Status Date';
  }

  replaceVariantReportTables(sourceVariantReport: any, updatedVariantReport: any): any {
    for (let table of variantTables) {
      sourceVariantReport[table] = updatedVariantReport[table];
    }

    sourceVariantReport.singleNucleotideVariantAndIndels
      = (sourceVariantReport.singleNucleotideVariants || [])
        .concat(sourceVariantReport.indels || []);

    this.precessPassFailVariants(sourceVariantReport);

    return sourceVariantReport;
  }

  private precessPassFailVariants(comparisonVariantReport: any): void {
    const summary: VariantReportComparisonSummary = {
      totalVariants: 0,
      passVariants: 0,
      failVariants: 0,
    };

    for (let table of variantTables) {
      this.precessPassFailVariantTable(comparisonVariantReport[table], summary);
    }

    comparisonVariantReport.summary = summary;
  }

  private precessPassFailVariantTable(table: any[], summary: VariantReportComparisonSummary): void {
    if (!table || !Array.isArray(table))
      return;

    for (let item of table) {
      summary.totalVariants += 1;

      if (item.matchData && item.outsideData && item.hasDifference && Object.keys(item.hasDifference)) {
        summary.failVariants += 1;
        item.pass = false;
      } else if (!item.matchData || !item.outsideData) {
        summary.failVariants += 1;
        item.pass = false;
      } else {
        summary.passVariants += 1;
        item.pass = true;
      }
    }
  }

  private transformBiopsy(transformedPatient: any, source: any): any {
    let transformedBiopsy = source;

    transformedBiopsy.isOutsideAssayWorkflow = transformedPatient.isOutsideAssayWorkflow;
    transformedBiopsy.isOutsideAssay = !!transformedBiopsy.patientOutsideAssayLabReport;

    this.transformMdaMessages(transformedBiopsy);
    this.transformNgsMessages(transformedPatient, transformedBiopsy);
    this.transformAssayMessages(transformedBiopsy.assayMessages);

    return transformedBiopsy;
  }

  private transformMdaMessages(transformedBiopsy: any): void {
    transformedBiopsy.nucleicAcidSendouts = transformedBiopsy.nucleicAcidSendouts || [];
    for (let message of (transformedBiopsy.mdAndersonMessages || [])) {
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
    * The view data model structure:
    * biopsy {
    *    nucleicAcidSendouts: [{
    *        analyses: [
    *           {variantReport: . . ., assignmentReport: . . .}
    *        ]
    *    }]
    * }
    */

    for (let message of (transformedBiopsy.nextGenerationSequences || [])) {
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

      analysis.assayMessages = transformedBiopsy.assayMessages || [];
      this.transformAssayMessages(analysis.assayMessages);

      analysis.variantReportStatus = message.status;
      analysis.variantReportCreatedDate = message.ionReporterResults.variantReport
        ? message.ionReporterResults.variantReport.createdDate : null;
      analysis.variantReportFileReceivedDate = message.dateReceived;
      analysis.variantReportRejectedOrConfirmedDate = message.dateVerified;

      if (!message.ionReporterResults.variantReport) {
        console.warn('No ionReporterResults.variantReport found in the nextGenerationSequences item');
        continue;
      }

      transformedPatient.analyses = transformedPatient.analyses || {};

      let variantReport = message.ionReporterResults.variantReport as VariantReportData;

      analysis.variantReport = variantReport;
      variantReport.isOutsideAssayWorkflow = transformedBiopsy.isOutsideAssayWorkflow;
      variantReport.isOutsideAssay = transformedBiopsy.isOutsideAssay;
      variantReport.variantReportFileReceivedDate = analysis.variantReportFileReceivedDate;

      this.calculateMoiSummary(variantReport);

      transformedPatient.analyses[message.ionReporterResults.jobName] = analysis;

      variantReport.variantReportStatus = analysis.variantReportStatus;
      variantReport.variantReportCreatedDate = analysis.variantReportCreatedDate;
      variantReport.variantReportFileReceivedDate = analysis.variantReportFileReceivedDate;
      variantReport.variantReportRejectedOrConfirmedDate = analysis.variantReportRejectedOrConfirmedDate;

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

      variantReport.pathologyReportMessages = transformedBiopsy.pathologyReportMessages;

      variantReport.singleNucleotideVariantAndIndels
        = (variantReport.singleNucleotideVariants || [])
          .concat(variantReport.indels || []);

      if (variantReport.variantReportStatus === 'PENDING') {
        const gmt = new GmtPipe();
        let dateReceivedString = gmt.transform(message.dateReceived);
        let dateReceived = new Date(Date.parse(dateReceivedString)) as any;
        let now = new Date() as any;
        variantReport.daysPending = Math.round(Math.abs(now - dateReceived) / 864e5); // 864e5 = 1000 * 60 * 60 * 24
        transformedPatient.pendingVariantReport = variantReport;
      }
    }
  }

  private transformAssayMessages(assayMessages: any[]): void {
    for (let assay of (assayMessages || [])) {
      assay.gene = this.parseGeneFromAssay(assay.biomarker);
    }
  }

  private calculateMoiSummary(variantReport: any): void {
    if (!variantReport)
      return;

    variantReport.moiSummary = {
      totalaMOIs: 0,
      totalMOIs: 0,
      confirmedaMOIs: 0,
      confirmedMOIs: 0
    };

    for (let tableName of variantTables ) {
      let table = variantReport[tableName];

      if (!table) {
        continue;
      }

      for (let item of table) {
        variantReport.moiSummary.totalMOIs += 1;

        if (item.isAMoi) {
          variantReport.moiSummary.totalaMOIs += 1;
          if (item.confirmed) {
            variantReport.moiSummary.confirmedaMOIs += 1;
          }
        } else if (item.confirmed) {
          variantReport.moiSummary.confirmedMOIs += 1;
        }

        if (item.metadata) {
          item.comment = item.metadata.comment;
        }
      }
    }
  }

  private transformAssignments(transformedPatient: any): void {
    /*
    * The view data model structure:
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
      console.info('Assignments not found');
      return;
    }

    const gmt = new GmtPipe();

    for (let assignment of transformedPatient.patientAssignments) {
      let bsn = assignment.biopsySequenceNumber;
      let biopsy = transformedPatient.biopsies.find((x: any) => x.biopsySequenceNumber === bsn);

      if (!biopsy || !biopsy.nucleicAcidSendouts || !biopsy.nucleicAcidSendouts.length) {
        continue;
      }

      // const lastSendout = biopsy.nucleicAcidSendouts[biopsy.nucleicAcidSendouts.length - 1];

      assignment.isOutsideAssayWorkflow = biopsy.isOutsideAssayWorkflow;
      assignment.isOutsideAssay = biopsy.isOutsideAssay;

      // Flatten the biopsies' analyses into one array, and look for confirmed ones
      let confirmedVariantReports = biopsy.nucleicAcidSendouts
        .map((x: any) => x.analyses)
        .reduce((acc: Array<any>, val: Array<any>) => acc.concat(val))
        .filter((x: any) => x && x.variantReportStatus === 'CONFIRMED');

      if (confirmedVariantReports && confirmedVariantReports.length) {
        let lastVariantReportAnalysis = confirmedVariantReports[confirmedVariantReports.length - 1];
        lastVariantReportAnalysis.assignmentReport = assignment;

        this.transformAssignmentLogic(assignment);
      }

      assignment.derivedStatus = assignment.dateConfirmed ? 'CONFIRMED' : 'PENDING';

      if (assignment.derivedStatus === 'PENDING') {
        let dateAssignedString = gmt.transform(assignment.dateAssigned);
        let dateAssigned = Date.parse(dateAssignedString);
        let now = new Date() as any;
        assignment.hoursPending = Math.round(Math.abs(now - dateAssigned) / 36e5); //36e5 = 1000 * 60 * 60
        transformedPatient.pendingAssignmentReport = assignment;
      }
    }
  }

  private transformAssignmentLogic(assignment: any) {
    if (!assignment || !assignment.patientAssignmentLogic)
      return;

    let selected = assignment.patientAssignmentLogic.find((x: any) => x.patientAssignmentReasonCategory === 'SELECTED');
    assignment.hasSelectedTreatmentArm = !!selected;
    assignment.selected = selected;
    assignment.reasons = this.transformAssignmentReason(assignment.patientAssignmentLogic);
  }

  private transformAssignmentReason(patientAssignmentLogic: any): any {
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

    for (const item of patientAssignmentLogic) {
      let section: AssignmentReasonSection;
      if (!map[item.patientAssignmentReasonCategory]) {
        section = new AssignmentReasonSection();
        section.name = item.patientAssignmentReasonCategory;
        map[item.patientAssignmentReasonCategory] = section;
      } else {
        section = map[item.patientAssignmentReasonCategory];
      }
      section.items.push(item);
    }

    for (let sectionName in map) {
      if (map[sectionName] && map[sectionName].items.length) {
        sections.push(map[sectionName]);
      }
    }

    return sections;
  }

  private parseGeneFromAssay(assay: string): string {
    var replacer = function (match: any, p1: any, p2: any, p3: any, offset: any, string: any) {
      return p2;
    };

    var regExp = /^(ICC)([A-Za-z0-9_-]*)(s)$/; // Parse out 'ICC' at the start of the value and 's' at the end, all case-sensitive
    if (!assay || (typeof assay !== 'string'))
      return assay;
    return assay.replace(regExp, replacer);
  }

  private transformConcordance(patient: any): string {
    if (!patient || !patient.concordance) {
      return 'UNKNOWN';
    }

    switch (patient.concordance) {
      case 'Y': return 'YES';
      case 'N': return 'NO';
      case 'U': return 'UNKNOWN';
      default: return patient.concordance;
    }
  }
}
