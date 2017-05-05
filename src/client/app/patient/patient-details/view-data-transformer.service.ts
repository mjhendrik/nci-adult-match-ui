import { Injectable } from '@angular/core';

/*
*  View transformation service
*/
@Injectable()
export class ViewDataTransformer {
  transformPatient(source: any): any {
    const transformed: any = { ...source }; // Deep-copy the source

    transformed.disease = source.diseases && source.diseases.length ? source.diseases[0] : null;

    if (transformed.biopsies && transformed.biopsies.length) {
      transformed.biopsies = transformed.biopsies.reverse().map((x: any) => this.transformBiopsy(x));
    }

    if (transformed.races && transformed.races.length) {
      transformed.raceList = transformed.races.join(', ');
    }

    return transformed;
  }

  transformBiopsy(source: any): any {
    let transformed = source;

    if ('mdAndersonMessages' in source) {
      transformed.nucleicAcidSendouts = source.nucleicAcidSendouts || [];
      for (let message of source.mdAndersonMessages) {
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

    return transformed;
  }
}
