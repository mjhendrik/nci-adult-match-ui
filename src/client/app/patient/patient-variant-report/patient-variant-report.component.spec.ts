import {
  TestBed,
  async
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { PatientVariantReportComponent } from './patient-variant-report.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';

let p_vr_resolved_data = {
  data: {
    psn: 'psn',
    analysisId: '1111',
    patient: 'patient',
    analysis: '',
    variantReport: 'variantReport',
    assignmentReport: 'assignmentReport',
    assignmentHistory: 'patientAssignments',
    parsed_vcf_genes: ['parsed_vcf_genes', 'file_name'],
    tvc_version: 'tvc_version',
    pool1: 'pool1',
    pool2: 'pool2',
    mapd: 'mapd',
    cellularity: 'cellularity',
    showPools: 'showPools',
    assays: 'assays'
  }
}

export function main() {
  describe('patient variant report component', () => {

    let config: any[] = [
      { path: 'patients', component: 'PatientVariantReportComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          AssignmentReasonTableModule,
          VariantReportSimpleTableModule,
          SharedModule,
          CommonModule
        ],
        declarations: [PatientVariantReportComponent],
        providers: [
          { provide: PatientApiService, useClass: MockPatientApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                params: { patientSequenceNumber: 1067, analysisId: 1234 },
                data: p_vr_resolved_data
              }
            }
          },
          ViewDataTransformer
        ]
      });
    });

    it('should test ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientVariantReportComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientVariantReportComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.download('test');
          });
      }));
  });
}


class MockPatientApiServiceError {

  getPatientDetails(psn: any): Observable<any> {
    return Observable.throw("error");
  }
}

class MockPatientApiService {

  getPatientDetails(psn: any): Observable<any> {
    let testdata: any = {
      "_id": "58c33121d4c6569b736592fd",
      "_class": "gov.match.model.Patient",
      "patientSequenceNumber": "1067",
      "gender": "MALE",
      "ethnicity": "PATIENT_REFUSAL",
      "races": [
        "WHITE"
      ],
      "patientRejoinTriggers": [],
      "patientTriggers": [{
        "studyId": "EAY131",
        "patientSequenceNumber": "1067",
        "stepNumber": "0",
        "patientStatus": "REGISTRATION",
        "message": "Patient trigger",
        "accrualGroupId": "22334a2sr",
        "dateCreated": "2017-03-10T23:05:05.602Z",
        "auditDate": "2017-03-10T23:05:05.611Z"
      },
      {
        "studyId": "EAY131",
        "patientSequenceNumber": "1067",
        "stepNumber": "0",
        "patientStatus": "PENDING_CONFIRMATION",
        "dateCreated": "2017-03-10T23:05:27.213Z",
        "auditDate": "2017-03-10T23:05:27.213Z"
      }
      ],
      "biopsies": [{
        "dateCreated": "2017-03-10T23:05:05.657Z",
        "biopsySequenceNumber": "BSN-1067",
        "nextGenerationSequences": [{
          "ngsRunNumber": "1",
          "dateReceived": "2017-03-10T23:05:07.306Z",
          "dateVerified": "2017-03-10T23:05:07.932Z",
          "status": "CONFIRMED",
          "ionReporterResults": {
            "jobName": "JOB-1067",
            "molecularSequenceNumber": "MSN-1067",
            "dnaBamFilePath": "/tmp/patient-1067/biopsy-BSN-1067/ngs-JOB-1067/sample1.bam",
            "rnaBamFilePath": "/tmp/patient-1067/biopsy-BSN-1067/ngs-JOB-1067/sample2.bam",
            "vcfFilePath": "/tmp/patient-1067/biopsy-BSN-1067/ngs-JOB-1067/1067_variants.vcf",
            "variantReport": {
              "singleNucleotideVariants": [{
                "confirmed": true,
                "gene": "KIT",
                "exon": "22",
                "metadata": {
                  "_id": "b9e93b0a-d4af-4f63-b1fd-0fd617772222"
                },
                "chromosome": "chr1",
                "position": "11184573",
                "identifier": "match1067",
                "reference": "G",
                "alternative": "A",
                "filter": "PASS",
                "transcript": "NM_004958.3",
                "location": "exonic",
                "readDepth": 2124,
                "rare": false,
                "alleleFrequency": 1.0,
                "flowAlternativeAlleleObservationCount": "350",
                "flowReferenceAlleleObservations": "1998",
                "referenceAlleleObservations": 2120,
                'alternativeAlleleObservationCount': 0,
                'inclusion': true,
                'armSpecific': false
              }],
              'indels': [],
              'copyNumberVariants': [],
              'geneFusions': [],
              'unifiedGeneFusions': [],
              'nonHotspotRules': [],
              'createdDate': '2017-03-10T23:05:07.304Z'
            }
          },
          'tvcVersion': '4.2-13',
          'oncomineVariantAnnotationToolVersion': '1.0.5'
        }],
        'assayMessages': [{
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'biomarker': 'ICCPTENs',
          'orderedDate': '2017-03-10T23:05:06.892Z'
        },
        {
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'biomarker': 'ICCPTENs',
          'result': 'INDETERMINATE',
          'orderedDate': '2017-03-10T23:05:06.892Z',
          'reportedDate': '2017-03-10T23:05:06.984Z'
        },
        {
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'biomarker': 'ICCMSH2s',
          'orderedDate': '2017-03-10T23:05:07.062Z'
        },
        {
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'biomarker': 'ICCMSH2s',
          'result': 'POSITIVE',
          'orderedDate': '2017-03-10T23:05:07.062Z',
          'reportedDate': '2017-03-10T23:05:07.138Z'
        }
        ],
        'pathologyReportMessages': [],
        'mdAndersonMessages': [{
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'reportedDate': '2017-03-10T23:05:05.644Z',
          'message': 'SPECIMEN_RECEIVED'
        },
        {
          'molecularSequenceNumber': 'MSN-1067',
          'destinationSite': 'Boston',
          'trackingNumber': 'TN-1067',
          'dnaConcentration': '',
          'dnaVolume': '',
          'cDnaConcentration': '',
          'cDnaVolume': '',
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'reportedDate': '2017-03-10T23:05:05.682Z',
          'message': 'NUCLEIC_ACID_SENDOUT',
          '_class': 'gov.match.model.message.NucleicAcidsShippingMessage'
        }
        ],
        'failure': false,
        'associatedPatientStatus': 'REGISTRATION'
      }],
      'currentStepNumber': '0',
      'currentPatientStatus': 'PENDING_CONFIRMATION',
      'patientAssignments': [{
        'dateAssigned': '2017-03-10T23:05:27.209Z',
        'biopsySequenceNumber': 'BSN-1067',
        'assayMessages': [{
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'biomarker': 'ICCPTENs',
          'result': 'INDETERMINATE',
          'orderedDate': '2017-03-10T23:05:06.892Z',
          'reportedDate': '2017-03-10T23:05:06.984Z'
        },
        {
          'patientSequenceNumber': '1067',
          'biopsySequenceNumber': 'BSN-1067',
          'biomarker': 'ICCMSH2s',
          'result': 'POSITIVE',
          'orderedDate': '2017-03-10T23:05:07.062Z',
          'reportedDate': '2017-03-10T23:05:07.138Z'
        }
        ],
        'treatmentArm': {
          '_id': 'CukeTest-1066',
          'name': 'CukeTest-1066',
          'version': '2015-08-06',
          'description': 'TA used by Cuke test',
          'targetId': '1066',
          'targetName': 'Sunitinib',
          'gene': 'cKIT',
          'treatmentArmDrugs': [{
            'drugId': '1066',
            'name': 'Sunitinib',
            'pathway': 'cKIT'
          }],
          'exclusionDiseases': [{
            '_id': '10066351',
            'ctepCategory': 'Renal Cell Carcinoma',
            'shortName': 'Collecting duct renal cancer'
          },
          {
            '_id': '10033702',
            'ctepCategory': 'Renal Cell Carcinoma',
            'shortName': 'Papillary renal cell carcinoma'
          },
          {
            '_id': '10066352',
            'ctepCategory': 'Renal Cell Carcinoma',
            'shortName': 'RCC w/ sarcomatoid features'
          },
          {
            '_id': '10009251',
            'ctepCategory': 'Renal Cell Carcinoma',
            'shortName': 'RCC, clear cell adenocarcinoma'
          },
          {
            '_id': '10038415',
            'ctepCategory': 'Renal Cell Carcinoma',
            'shortName': 'Renal cell carcinoma, NOS'
          },
          {
            '_id': '10033630',
            'ctepCategory': 'Neuroendocrine Cancer',
            'shortName': 'Islet cell tumors - pancreas'
          },
          {
            '_id': '10051066',
            'ctepCategory': 'Non-Rhabdomyosarcoma Soft Tissue Sarcoma',
            'shortName': 'Gastrointestinal stromal tumor'
          }
          ],
          'exclusionDrugs': [{
            'drugs': [{
              'drugId': '',
              'name': 'Sunitinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Imatinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Flumatinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Dasatinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Ponatinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Cabozantinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Nilotinib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Pazopanib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Regorafenib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Sorafenib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Motesanib'
            }]
          },
          {
            'drugs': [{
              'drugId': '',
              'name': 'Rickroll'
            }]
          }
          ],
          'exclusionCriterias': [],
          'assayResults': [{
            'gene': 'MSH2',
            'assayResultStatus': 'POSITIVE',
            'assayVariant': 'EMPTY',
            'levelOfEvidence': 1.39999997615814
          }],
          'numPatientsAssigned': 1,
          'maxPatientsAllowed': 35,
          'treatmentArmStatus': 'OPEN',
          'variantReport': {
            'singleNucleotideVariants': [{
              'confirmed': false,
              'publicMedIds': [
                '18955458'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55593613',
              'identifier': 'COSM1257',
              'reference': 'T',
              'alternative': 'A',
              'description': 'Activation mutation',
              'rare': false,
              'levelOfEvidence': 2.0,
              'inclusion': true,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '18955458'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55593613',
              'identifier': 'COSM1260',
              'reference': 'T',
              'alternative': 'G',
              'description': 'Activation mutation',
              'rare': false,
              'levelOfEvidence': 2.0,
              'inclusion': true,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '18955458'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55594258',
              'identifier': 'COSM12706',
              'reference': 'T',
              'alternative': 'C',
              'description': 'Activation mutation',
              'rare': false,
              'levelOfEvidence': 2.0,
              'inclusion': true,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '18955458'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55595519',
              'identifier': 'COSM12708',
              'reference': 'C',
              'alternative': 'T',
              'description': 'Activation mutation',
              'rare': false,
              'levelOfEvidence': 2.0,
              'inclusion': true,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'geneName': 'KIT',
              'chromosome': 'chr1',
              'position': '11184573',
              'identifier': 'match1066',
              'reference': 'G',
              'alternative': 'A',
              'description': 'TEST',
              'rare': false,
              'levelOfEvidence': 2.0,
              'inclusion': true,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '21539479'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55599320',
              'identifier': 'COSM1311',
              'reference': 'G',
              'alternative': 'C',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '21539479'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55599321',
              'identifier': 'COSM1314',
              'reference': 'A',
              'alternative': 'T',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '21539479'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55599333',
              'identifier': 'COSM1316',
              'reference': 'A',
              'alternative': 'G',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'publicMedIds': [
                '21539479'
              ],
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55599340',
              'identifier': 'COSM1321',
              'reference': 'T',
              'alternative': 'A',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55599340',
              'identifier': 'COSM1322',
              'reference': 'T',
              'alternative': 'G',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55599341',
              'identifier': 'COSM18681',
              'reference': 'T',
              'alternative': 'G',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            },
            {
              'confirmed': false,
              'geneName': 'KIT',
              'chromosome': 'chr4',
              'position': '55602664',
              'identifier': 'COSM13172',
              'reference': 'G',
              'alternative': 'C',
              'rare': false,
              'levelOfEvidence': 3.0,
              'inclusion': false,
              'armSpecific': false
            }
            ],
            'indels': [],
            'copyNumberVariants': [],
            'geneFusions': [],
            'unifiedGeneFusions': [],
            'nonHotspotRules': []
          },
          'statusLog': {
            '1488461547861': 'PENDING',
            '1488461594550': 'READY',
            '1488461594': 'OPEN'
          },
          'dateCreated': '2017-03-02T13:32:27.861Z'
        },
        'patientAssignmentStatus': 'AVAILABLE',
        'patientAssignmentLogic': [{
          'treatmentArmId': 'CukeTest-1034',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1035',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1035-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1048',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1049',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1049-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1050',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1050-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1051',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1052',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1053',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1054',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1055',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1056',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1057',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1058',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1064',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1065',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-1066',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant. The patient\'s IHC MSH2 result match the IHC MSH2 rule for the treatment arm [RES:POSITIVE, VAR:EMPTY]. The variant\'s level of evidence for the treatment arm is 1.4. The patient was selected for this treatment arm because it has the highest level of evidence of 1.4.',
          'patientAssignmentReasonCategory': 'SELECTED'
        },
        {
          'treatmentArmId': 'CukeTest-1067',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient and treatment arm match on variant identifier [match1067]. The patient\'s IHC assay results does not match any of the arm\'s IHC assay rule(s).',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-1078',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant. The patient\'s IHC MSH2 result match the IHC MSH2 rule for the treatment arm [RES:POSITIVE, VAR:NEGATIVE]. The variant\'s level of evidence for the treatment arm is 4.0. The patient was not selected for this treatment arm because its level of evidence is 4.0 and is lower than the one chosen.',
          'patientAssignmentReasonCategory': 'LEVEL_OF_EVIDENCE_TIE_BREAKER'
        },
        {
          'treatmentArmId': 'CukeTest-113',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-115',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-117',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-118',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-122',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-122-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-122-1-PENDING',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-128',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-129',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-130',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-131',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-132',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-133',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-133-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-171',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-172',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-173',
          'treatmentArmVersion': '2016-01-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-177',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-178',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-179',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-185',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-186',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-187',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-188',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-623-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-623-1-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [READY].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-623-2',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-636-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-636-2',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-770-1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-770-2',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-770-3',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-770-4',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-770-5',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-78',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-995',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'CukeTest-PEN-NHR',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-PEN-NHR-CLOSED',
          'treatmentArmVersion': '2015-01-01',
          'reason': 'The patient is excluded from this treatment arm because the status is [CLOSED].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-PEN-NHR-PENDING',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'CukeTest-PEN-NHR-READY',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-PEN-NHR-SUSPENDED',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'CukeTest-PEN-NoVar',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'EAY131-A',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'EAY131-B',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-C',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-D',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-E',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-F',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'EAY131-F_2015_11_23',
          'treatmentArmVersion': '2015-11-23',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'EAY131-F_2015_12_23',
          'treatmentArmVersion': '2015-12-23',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'EAY131-F_2016_01_13',
          'treatmentArmVersion': '2016-01-13',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-G',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'EAY131-H',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-I',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-J',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-K',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-L',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-O',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'EAY131-Q',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-R',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-S1',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-S2',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-T',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-U',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131-V',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'EAY131_S3_TRAMET_GNA',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'match129.3',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
          'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
        },
        {
          'treatmentArmId': 'rejoinTest10_2016_02_01',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest11_2016_03_01',
          'treatmentArmVersion': '2016-03-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest12_2016_03_01',
          'treatmentArmVersion': '2016-03-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest13_2016_03_01',
          'treatmentArmVersion': '2016-03-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest14_2016_03_01',
          'treatmentArmVersion': '2016-03-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest15_2016_03_01',
          'treatmentArmVersion': '2016-03-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest17',
          'treatmentArmVersion': '2015-04-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest1_2016_02_01',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest2_2016_02_01',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest3_2016_01_01',
          'treatmentArmVersion': '2016-01-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest4_2016_02_01',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest6',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest7_2016_02_01',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest8_2016_02_01',
          'treatmentArmVersion': '2016-02-01',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest_2015_11_25',
          'treatmentArmVersion': '2015-11-25',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        },
        {
          'treatmentArmId': 'rejoinTest_cc',
          'treatmentArmVersion': '2015-08-06',
          'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
          'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
        },
        {
          'treatmentArmId': 'EAY131-N',
          'treatmentArmVersion': '2016-05-31',
          'reason': 'The patient contains no matching variant.',
          'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
        }
        ],
        'stepNumber': '0',
        'assignmentType': 'STANDARD',
        'patientAssignmentMessages': []
      }],
      'diseases': [{
        '_id': '10025032',
        'ctepCategory': 'Lung, Mediastinal and Pleural Neoplasm',
        'ctepSubCategory': 'Non-Small Cell Lung Cancer',
        'ctepTerm': 'Lung adenocarcinoma',
        'shortName': 'Lung adenocarcinoma'
      }],
      'concordance': 'Y',
      'priorDrugs': [{
        'drugs': [{
          'drugId': '781450',
          'name': 'VS-6063 (Defactinib)',
          'drugClass': 'NF2 Loss',
          'target': 'NF2'
        }]
      }],
      'analyses': {
        '1234': {
          variantReport: 'test',
          assignmentReport: 'test',
          assignmentHistory: 'test'
        }
      },
      'exclusionCriterias': [],
      'registrationDate': '2017-03-10T23:05:05.602Z'
    };

    return Observable.of(testdata);
  }

  downloadPatientFile(psn: any, file: any): void {

  }
}