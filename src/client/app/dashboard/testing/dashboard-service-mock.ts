import { Observable } from 'rxjs/Observable';

export class DashboardServiceMock {

  getPendingAssignmentReports(): Observable<any> {
    let testData = [
      {
        'patientSequenceNumber': '1031',
        'dateAssigned': {
          '$date': 1488461903558
        },
        'biopsySequenceNumber': 'bsn-1031',
        'treatmentArmId': 'rejoinTest6',
        'treatmentArmVersion': '2016-02-01',
        'hoursPending': 5184,
        'molecularSequenceNumber': 'msn-1031',
        'analysisId': 'job-1031'
      },
      {
        'patientSequenceNumber': '105re',
        'dateAssigned': {
          '$date': 1488462008463
        },
        'biopsySequenceNumber': 'bsn-105re',
        'hoursPending': 5184,
        'molecularSequenceNumber': 'MSN-105re',
        'analysisId': 'JOB-105re'
      },
      {
        'patientSequenceNumber': '106re',
        'dateAssigned': {
          '$date': 1488462027293
        },
        'biopsySequenceNumber': 'BSN-106re',
        'hoursPending': 5184,
        'molecularSequenceNumber': 'MSN-106re',
        'analysisId': 'JOB-106re'
      },
      {
        'patientSequenceNumber': '111re',
        'dateAssigned': {
          '$date': 1488462377826
        },
        'biopsySequenceNumber': 'bsn-111re',
        'hoursPending': 5184,
        'molecularSequenceNumber': 'msn-111re',
        'analysisId': 'job-111re'
      },
      {
        'patientSequenceNumber': '1055',
        'dateAssigned': {
          '$date': 1489181874843
        },
        'biopsySequenceNumber': 'BSN-1055',
        'treatmentArmId': 'CukeTest-1055',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1055',
        'analysisId': 'JOB-1055'
      },
      {
        'patientSequenceNumber': '1056',
        'dateAssigned': {
          '$date': 1489181898876
        },
        'biopsySequenceNumber': 'BSN-1056',
        'treatmentArmId': 'CukeTest-1056',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1056',
        'analysisId': 'JOB-1056'
      },
      {
        'patientSequenceNumber': '1057',
        'dateAssigned': {
          '$date': 1489181921727
        },
        'biopsySequenceNumber': 'BSN-1057',
        'treatmentArmId': 'CukeTest-1057',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1057',
        'analysisId': 'JOB-1057'
      },
      {
        'patientSequenceNumber': '1058',
        'dateAssigned': {
          '$date': 1489181950923
        },
        'biopsySequenceNumber': 'BSN-1058',
        'treatmentArmId': 'CukeTest-1057',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1058',
        'analysisId': 'JOB-1058'
      },
      {
        'patientSequenceNumber': '1059',
        'dateAssigned': {
          '$date': 1489181981085
        },
        'biopsySequenceNumber': 'BSN-1059',
        'treatmentArmId': 'CukeTest-1057',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1059',
        'analysisId': 'JOB-1059'
      },
      {
        'patientSequenceNumber': '1060',
        'dateAssigned': {
          '$date': 1489182013585
        },
        'biopsySequenceNumber': 'BSN-1060',
        'treatmentArmId': 'CukeTest-1057',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1060',
        'analysisId': 'JOB-1060'
      },
      {
        'patientSequenceNumber': '1061',
        'dateAssigned': {
          '$date': 1489182034862
        },
        'biopsySequenceNumber': 'BSN-1061',
        'treatmentArmId': 'CukeTest-1057',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1061',
        'analysisId': 'JOB-1061'
      },
      {
        'patientSequenceNumber': '1062',
        'dateAssigned': {
          '$date': 1489182057322
        },
        'biopsySequenceNumber': 'BSN-1062',
        'treatmentArmId': 'CukeTest-1057',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1062',
        'analysisId': 'JOB-1062'
      },
      {
        'patientSequenceNumber': '1063',
        'dateAssigned': {
          '$date': 1489182084100
        },
        'biopsySequenceNumber': 'BSN-1063',
        'treatmentArmId': 'CukeTest-1078',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4984,
        'molecularSequenceNumber': 'MSN-1063',
        'analysisId': 'JOB-1063'
      },
      {
        'patientSequenceNumber': '1064',
        'dateAssigned': {
          '$date': 1489187046378
        },
        'biopsySequenceNumber': 'BSN-1064',
        'treatmentArmId': 'CukeTest-1064',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1064',
        'analysisId': 'JOB-1064'
      },
      {
        'patientSequenceNumber': '1065',
        'dateAssigned': {
          '$date': 1489187075335
        },
        'biopsySequenceNumber': 'BSN-1065',
        'treatmentArmId': 'CukeTest-1065',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1065',
        'analysisId': 'JOB-1065'
      },
      {
        'patientSequenceNumber': '1066',
        'dateAssigned': {
          '$date': 1489187103365
        },
        'biopsySequenceNumber': 'BSN-1066',
        'treatmentArmId': 'CukeTest-1066',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1066',
        'analysisId': 'JOB-1066'
      },
      {
        'patientSequenceNumber': '1067',
        'dateAssigned': {
          '$date': 1489187127209
        },
        'biopsySequenceNumber': 'BSN-1067',
        'treatmentArmId': 'CukeTest-1066',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1067',
        'analysisId': 'JOB-1067'
      },
      {
        'patientSequenceNumber': '1068',
        'dateAssigned': {
          '$date': 1489187152061
        },
        'biopsySequenceNumber': 'BSN-1068',
        'treatmentArmId': 'CukeTest-1066',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1068',
        'analysisId': 'JOB-1068'
      },
      {
        'patientSequenceNumber': '1069',
        'dateAssigned': {
          '$date': 1489187182158
        },
        'biopsySequenceNumber': 'BSN-1069',
        'treatmentArmId': 'CukeTest-1066',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1069',
        'analysisId': 'JOB-1069'
      },
      {
        'patientSequenceNumber': '1070',
        'dateAssigned': {
          '$date': 1489187213388
        },
        'biopsySequenceNumber': 'BSN-1070',
        'treatmentArmId': 'CukeTest-1066',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1070',
        'analysisId': 'JOB-1070'
      },
      {
        'patientSequenceNumber': '1071',
        'dateAssigned': {
          '$date': 1489187249202
        },
        'biopsySequenceNumber': 'BSN-1071',
        'treatmentArmId': 'CukeTest-1066',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1071',
        'analysisId': 'JOB-1071'
      },
      {
        'patientSequenceNumber': '1072',
        'dateAssigned': {
          '$date': 1489187272808
        },
        'biopsySequenceNumber': 'BSN-1072',
        'hoursPending': 4983,
        'molecularSequenceNumber': 'MSN-1072',
        'analysisId': 'JOB-1072'
      },
      {
        'patientSequenceNumber': '1078',
        'dateAssigned': {
          '$date': 1489195129523
        },
        'biopsySequenceNumber': 'BSN-1078',
        'treatmentArmId': 'CukeTest-1078',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4980,
        'molecularSequenceNumber': 'MSN-1078',
        'analysisId': 'JOB-1078'
      },
      {
        'patientSequenceNumber': '160re',
        'dateAssigned': {
          '$date': 1489416149287
        },
        'biopsySequenceNumber': 'bsn-160re',
        'treatmentArmId': 'EAY131-F',
        'treatmentArmVersion': '2015-08-06',
        'hoursPending': 4919,
        'molecularSequenceNumber': 'msn-160re',
        'analysisId': 'job-160'
      }
    ];
    return Observable.of(testData);
  }

  getPendingVariantReports(): Observable<any> {
    let testData = [
      {
        'patientSequenceNumber': '1001re',
        'biopsySequenceNumber': 'BSN-1001re',
        'molecularSequenceNumber': 'MSN-1001re',
        'location': 'Boston',
        'specimenReceivedDate': { '$date': 1488461755963 },
        'dateVariantReportReceived': { '$date': 1488461756559 },
        'analysisId': 'JOB-1001re',
        'daysPending': 216
      },
      {

        'patientSequenceNumber': 'UIConfirmVariantReport',
        'biopsySequenceNumber': 'BSN-UIConfirmVariantReport',
        'molecularSequenceNumber': 'MSN-UIConfirmVariantReport',
        'location': 'Boston',
        'specimenReceivedDate': { '$date': 1488461755963 },
        'dateVariantReportReceived': { '$date': 1488461756559 },
        'analysisId': 'JOB-UIConfirmVariantReport',
        'daysPending': 216
      }
    ];
    return Observable.of(testData);
  }

  getPatientsAwaiting(): Observable<any> {
    let testData = [{
      'outsideBiopsy': {
        'messages': [
          'Variant report missing,Required assay result missing: MLH1, MSH2, PTEN'
        ],
        'PTEN': { 'applicable': true },
        'MLH1': { 'applicable': true },
        'MSH2': { 'applicable': true },
        'RB': { 'applicable': false },
        'molecularSequenceNumber': 'MSN-170re-1',
        'dateMsnShipped': { '$date': 1489409094505 },
        'lab': 'Boston',
        'dateSpecimenCollected': { '$date': 1489409094505 },
        'daysWaiting': 211,
        'diseases': [
          {
            '_id': 10040811,
            'ctepCategory': 'Skin Neoplasm',
            'ctepSubCategory': 'Skin Neoplasm, Miscellaneous',
            'ctepTerm': 'Skin cancer, NOS',
            'shortName': 'Skin cancer, NOS'
          },
          {
            '_id': 10040811,
            'ctepCategory': 'Skin Neoplasm',
            'ctepSubCategory': 'Skin Neoplasm, Miscellaneous',
            'ctepTerm': 'Skin cancer, NOS',
            'shortName': 'Skin cancer, NOS'
          }
        ],
        'amoi': [''],
        'biopsySequenceNumber': 'N-14-000005-4'
      },

      'patientSequenceNumber': '170re',
      'currentPatientStatus': 'PROGRESSION_REBIOPSY',
      'concordance': 'Y',
      'isOutsideAssay': true
    },
    {
      'outsideBiopsy': {
        'messages': [
          'No confirmed variant report',
          'No diseases',
          'Awaiting confirmation biopsy assay result'
        ],
        'analysisId': 'ee53b98a-45e8-4208-a66f-50b7183a7ddb',
        'PTEN': {
          'applicable': false
        },
        'MLH1': {
          'applicable': true,
          'result': 'UNKNOWN'
        },
        'MSH2': {
          'applicable': true,
          'result': 'UNKNOWN'
        },
        'RB': {
          'applicable': true,
          'result': 'UNKNOWN'
        },
        'molecularSequenceNumber': '0d082b74-5970-4987-9118-f1a0501b740e',
        'dateMsnShipped': {
          '$date': 1503348596194
        },
        'dateSpecimenCollected': {
          '$date': 1503348596146
        },
        'daysWaiting': 86,
        'lab': 'CARIS',
        'amoi': [''],
        'biopsySequenceNumber': 'CARIS-case1'
      },
      'patientSequenceNumber': '1121',
      'currentPatientStatus': 'REGISTRATION_OUTSIDE_ASSAY',
      'concordance': 'U',
      'isOutsideAssay': true
    },
    {
      'confirmationBiopsy': {
        'messages': [
          'No confirmed variant report',
          'No diseases'
        ],
        'analysisId': 'job-1113',
        'PTEN': {
          'applicable': false
        },
        'MLH1': {
          'applicable': false
        },
        'MSH2': {
          'applicable': false
        },
        'RB': {
          'applicable': false
        },
        'molecularSequenceNumber': 'MSN-1113',
        'dateMsnShipped': {
          '$date': 1505582597213
        },
        'lab': 'Boston',
        'dateSpecimenCollected': {
          '$date': 1505582597154
        },
        'daysWaiting': 61,
        'amoi': [''],
        'biopsySequenceNumber': 'BSN-1113'
      },
      'patientSequenceNumber': '1113',
      'currentPatientStatus': 'PENDING_APPROVAL',
      'concordance': 'U',
      'isOutsideAssay': true
    },
    {
      'outsideBiopsy': {
        'messages': [
          'No confirmed variant report',
          'No diseases',
          'Awaiting confirmation biopsy assay result'
        ],
        'analysisId': 'ee53b98a-45e8-4208-a66f-50b7183a7ddb',
        'PTEN': {
          'applicable': false
        },
        'MLH1': {
          'applicable': true,
          'result': 'UNKNOWN'
        },
        'MSH2': {
          'applicable': true,
          'result': 'UNKNOWN'
        },
        'RB': {
          'applicable': true,
          'result': 'UNKNOWN'
        },
        'molecularSequenceNumber': '0d082b74-5970-4987-9118-f1a0501b740e',
        'dateMsnShipped': {
          '$date': 1503348596194
        },
        'dateSpecimenCollected': {
          '$date': 1503348596146
        },
        'daysWaiting': 86,
        'lab': 'CARIS',
        'amoi': [''],
        'biopsySequenceNumber': 'CARIS-case1'
      },
      'confirmationBiopsy': {
        'messages': [
          'No confirmed variant report',
          'No diseases'
        ],
        'analysisId': 'job-1113',
        'PTEN': {
          'applicable': false
        },
        'MLH1': {
          'applicable': false
        },
        'MSH2': {
          'applicable': false
        },
        'RB': {
          'applicable': false
        },
        'molecularSequenceNumber': 'MSN-1113',
        'dateMsnShipped': {
          '$date': 1505582597213
        },
        'lab': 'Boston',
        'dateSpecimenCollected': {
          '$date': 1505582597154
        },
        'daysWaiting': 61,
        'amoi': [''],
        'biopsySequenceNumber': 'BSN-1113'
      },
      'patientSequenceNumber': '1113',
      'currentPatientStatus': 'PENDING_APPROVAL',
      'concordance': 'U',
      'isOutsideAssay': true
    },
    {
      'messages': [
        'Variant report missing',
        'Required assay result missing: MLH1, MSH2, PTEN'
      ],
      'PTEN': {
        'applicable': true
      },
      'MLH1': {
        'applicable': true
      },
      'MSH2': {
        'applicable': true
      },
      'RB': {
        'applicable': false
      },
      'molecularSequenceNumber': 'MSN-170re-1',
      'dateMsnShipped': {
        '$date': 1504403996659
      },
      'lab': 'Boston',
      'dateSpecimenCollected': {
        '$date': 1504403996617
      },
      'daysWaiting': 74,
      'diseases': [
        {
          '_id': '10040811',
          'ctepCategory': 'Skin Neoplasm',
          'ctepSubCategory': 'Skin Neoplasm, Miscellaneous',
          'ctepTerm': 'Skin cancer, NOS',
          'shortName': 'Skin cancer, NOS'
        }
      ],
      'amoi': [''],
      'biopsySequenceNumber': 'N-14-000005-4',
      'patientSequenceNumber': '170re',
      'currentPatientStatus': 'PROGRESSION_REBIOPSY',
      'concordance': 'Y',
      'isOutsideAssay': false
    }
    ];

    return Observable.of(testData);
  }

  getOverviewTa(): Observable<any> {
    let testData = [{ 'TOTAL': 105, 'READY': 1, 'CLOSED': 1, 'OPEN': 94, 'PENDING': 9 }];
    return Observable.of(testData);
  }

  getOverviewPatients(): Observable<any> {
    let testData = [{ 'TOTAL': 238, 'ON_TREATMENT_ARM': 4, 'OFF_TRIAL': 2 }];
    return Observable.of(testData);
  }

  getOverviewBt(): Observable<any> {
    let testData = [{ 'BIOPSY_SEQUENCES': 201, 'TOTAL': 233, 'MOLECULAR_SEQUENCES': 219 }];
    return Observable.of(testData);;
  }

}
