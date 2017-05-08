import { Injectable } from '@angular/core';

/*
*  View transformation service
*/
@Injectable()
export class ViewDataTransformer {

  transformPatient(source: any): any {
    const transformed: any = { ...source }; // Deep-copy the source

    transformed.disease = source.diseases && source.diseases.length ? source.diseases[0] : null;

    if (transformed.patientTriggers && transformed.patientTriggers.length) {
      transformed.patientTriggers = transformed.patientTriggers.reverse();
    }

    if (transformed.biopsies && transformed.biopsies.length) {
      transformed.biopsies = transformed.biopsies.reverse().map((x: any) => this.transformBiopsy(x));
    }

    if (transformed.races && transformed.races.length) {
      transformed.raceList = transformed.races.join(', ');
    }

    this.transformAssignments(transformed);

    return transformed;
  }

  private transformBiopsy(source: any): any {
    let transformed = source;

    this.transformMdaMessages(transformed);
    this.transformNgsMessages(transformed);

    return transformed;
  }

  private transformMdaMessages(transformed: any): void {
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

  private transformNgsMessages(transformed: any): void {
    if (!('nextGenerationSequences' in transformed)) {
      return;
    }

    for (let message of transformed.nextGenerationSequences) {
      if (!message.ionReporterResults) {
        continue;
      }

      let msn: string = message.ionReporterResults.molecularSequenceNumber;
      let sendout = transformed.nucleicAcidSendouts.find((x: any) => x.molecularSequenceNumber === msn);
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

      const variantTables: Array<string> = [
        'geneFusions',
        'copyNumberVariants',
        'indels',
        'nonHotspotRules',
        'singleNucleotideVariants',
        'unifiedGeneFusions'
      ];

    }
  }

  private transformAssignments(transformed: any): void {
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

    if (!('patientAssignments' in transformed)
      || !Array.isArray(transformed.patientAssignments)
      || !transformed.patientAssignments.length) {
      return;
    }

    for (let assignment of transformed.patientAssignments) {
      let bsn = assignment.biopsySequenceNumber;
      let biopsy = transformed.biopsies.find((x: any) => x.biopsySequenceNumber === bsn);
      if (!biopsy || !biopsy.nucleicAcidSendouts) {
        continue;
      }

      // Flatten the biopsies' analyses into one array, and look for confirmed ones
      let confirmedVariantReports = biopsy.nucleicAcidSendouts
        .map((x: any) => x.analyses)
        .reduce((acc: Array<any>, val: Array<any>) => acc.concat(val))
        .filter((x: any) => x.variantReportStatus === 'CONFIRMED');

      if (confirmedVariantReports && confirmedVariantReports.length) {
        let lastVariantReport = confirmedVariantReports[confirmedVariantReports.length - 1];

        lastVariantReport.hasAssignment = true;
        lastVariantReport.assignmentStatus = assignment.patientAssignmentStatus;
        lastVariantReport.assignmentStatusMessage = assignment.patientAssignmentStatusMessage;
        lastVariantReport.assignmentDateAssigned = assignment.dateAssigned;
        lastVariantReport.assignmentDateConfirmed = assignment.dateConfirmed;
        lastVariantReport.assignmentDateSentToECOG = assignment.dateSentToECOG;
        lastVariantReport.assignmentDateReceivedByECOG = assignment.dateReceivedByECOG;
      }
    }
  }

}
