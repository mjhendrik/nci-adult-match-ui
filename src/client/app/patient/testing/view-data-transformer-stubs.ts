
export class ViewDataTransformerStub {
  static makePatientData = () => {
    return {
      psn: 'fake-psm',
      patient: {
        patientSequenceNumber: 'fake-psn',
        disease: {
          name: 'fake-name',
          shortName: 'fake-shortName',
          ctepCategory: 'fake-ctepCategory',
          ctepSubCategory: 'fake-ctepSubCategory',
          ctepTerm: 'fake-ctepTerm',
          medDRACode: 'fake-medDRACode'
        }
      },
      summaryData: {},
      section: 'fake-section',
      entityId: 'patient-timeline',
      needToScroll: () => { ; },
    };
  }

  static makePatientWithAssignmentData = () => {
    return {
      'biopsies': [
        {
          'assayMessages': [
            {
              'biomarker': 'ICCPTENs',
              'biopsySequenceNumber': 'T-15-000017',
              'orderedDate': {
                '$date': 1440624535643
              },
              'patientSequenceNumber': '10010'
            },
            {
              'biomarker': 'ICCPTENs',
              'biopsySequenceNumber': 'T-15-000017',
              'orderedDate': {
                '$date': 1440624535643
              },
              'patientSequenceNumber': '10010',
              'reportedDate': {
                '$date': 1441056681257
              },
              'result': 'POSITIVE'
            }
          ],
          'associatedPatientStatus': 'REGISTRATION',
          'biopsySequenceNumber': 'T-15-000017',
          'dateCreated': {
            '$date': 1440599991367
          },
          'failure': false,
          'mdAndersonMessages': [
            {
              'biopsySequenceNumber': 'T-15-000017',
              'collectedDate': {
                '$date': 1440603201098
              },
              'message': 'SPECIMEN_RECEIVED',
              'patientSequenceNumber': '10010',
              'reportedDate': {
                '$date': 1440603201098
              }
            },
            {
              '_class': 'gov.match.model.message.NucleicAcidsShippingMessage',
              'biopsySequenceNumber': 'T-15-000017',
              'cDnaVolume': '25',
              'destinationSite': 'MDACC',
              'dnaConcentration': '92000',
              'dnaVolume': '10',
              'message': 'NUCLEIC_ACID_SENDOUT',
              'molecularSequenceNumber': 'MSN3053',
              'patientSequenceNumber': '10010',
              'reportedDate': {
                '$date': 1440727201058
              },
              'trackingNumber': 'Local'
            },
            {
              'biopsySequenceNumber': 'T-15-000017',
              'message': 'PATHOLOGY_CONFIRMATION',
              'patientSequenceNumber': '10010',
              'reportedDate': {
                '$date': 1441056681257
              },
              'status': 'Y'
            }
          ],
          'nextGenerationSequences': [
            {
              'dateReceived': {
                '$date': 1441092660571
              },
              'dateVerified': {
                '$date': 1441754130458
              },
              'ionReporterResults': {
                'dnaBamFilePath': '/local/content/ncimatch/matchfiles/patient-10010/biopsy-T-15-000017/ngs-MSN3053_v1_e3d4df31-9785-40ff-8001-985297a3240e/IonXpress_012_rawlib.bam',
                'jobName': 'MSN3053_v1_e3d4df31-9785-40ff-8001-985297a3240e',
                'molecularSequenceNumber': 'MSN3053',
                'rnaBamFilePath': '/local/content/ncimatch/matchfiles/patient-10010/biopsy-T-15-000017/ngs-MSN3053_v1_e3d4df31-9785-40ff-8001-985297a3240e/IonXpress_004_rawlib_fusions.bam',
                'variantReport': {
                  'copyNumberVariants': [] as any[],
                  'createdDate': {
                    '$date': 1441092639591
                  },
                  'geneFusions': [] as any[],
                  'indels': [] as any[],
                  'nonHotspotRules': [] as any[],
                  'singleNucleotideVariants': [
                    {
                      'alleleFrequency': 0.178267,
                      'alternative': 'C',
                      'alternativeAlleleObservationCount': 401,
                      'armSpecific': false,
                      'chromosome': 'chr6',
                      'confirmed': false,
                      'exon': '9',
                      'filter': 'PASS',
                      'flowAlternativeAlleleObservationCount': '356',
                      'flowReferenceAlleleObservations': '1641',
                      'function': 'missense',
                      'gene': 'ESR1',
                      'geneName': '',
                      'hgvs': 'c.1610A>C',
                      'identifier': 'COSM1074639',
                      'inclusion': true,
                      'location': 'exonic',
                      'metadata': {
                        '_id': '7ae7a2f4-8f93-495a-8067-b17fd4f54bbc'
                      },
                      'oncominevariantclass': 'Hotspot',
                      'position': '152419923',
                      'protein': 'p.Tyr537Ser',
                      'rare': false,
                      'readDepth': 2272,
                      'reference': 'A',
                      'referenceAlleleObservations': 1866,
                      'transcript': 'NM_001122740.1'
                    }
                  ],
                  'unifiedGeneFusions': [] as any[]
                },
                'vcfFilePath': '/local/content/ncimatch/matchfiles/patient-10010/biopsy-T-15-000017/ngs-MSN3053_v1_e3d4df31-9785-40ff-8001-985297a3240e/MSN3053_v1_MSN3053_RNA_v1.vcf'
              },
              'ngsRunNumber': '1',
              'status': 'REJECTED'
            },
            {
              'dateReceived': {
                '$date': 1441319328703
              },
              'dateVerified': {
                '$date': 1441390965612
              },
              'ionReporterResults': {
                'dnaBamFilePath': '/local/content/ncimatch/matchfiles/patient-10010/biopsy-T-15-000017/ngs-MSN3053_v2_b6892e2d-700c-463f-9b50-34e31d32b4fd/IonXpress_013_rawlib.bam',
                'jobName': 'MSN3053_v2_b6892e2d-700c-463f-9b50-34e31d32b4fd',
                'molecularSequenceNumber': 'MSN3053',
                'rnaBamFilePath': '/local/content/ncimatch/matchfiles/patient-10010/biopsy-T-15-000017/ngs-MSN3053_v2_b6892e2d-700c-463f-9b50-34e31d32b4fd/IonXpress_005_rawlib_fusions.bam',
                'variantReport': {
                  'copyNumberVariants': [],
                  'createdDate': {
                    '$date': 1441319312693
                  },
                  'geneFusions': [],
                  'indels': [],
                  'nonHotspotRules': [],
                  'singleNucleotideVariants': [
                    {
                      'alleleFrequency': 0.223819,
                      'alternative': 'C',
                      'alternativeAlleleObservationCount': 327,
                      'armSpecific': false,
                      'chromosome': 'chr6',
                      'confirmed': true,
                      'exon': '9',
                      'filter': 'PASS',
                      'flowAlternativeAlleleObservationCount': '327',
                      'flowReferenceAlleleObservations': '1134',
                      'function': 'missense',
                      'gene': 'ESR1',
                      'geneName': '',
                      'hgvs': 'c.1610A>C',
                      'identifier': 'COSM1074639',
                      'inclusion': true,
                      'location': 'exonic',
                      'metadata': {
                        '_id': 'af37c87b-4b9b-49a8-96ff-4a22a97572b7'
                      },
                      'oncominevariantclass': 'Hotspot',
                      'position': '152419923',
                      'protein': 'p.Tyr537Ser',
                      'rare': false,
                      'readDepth': 1461,
                      'reference': 'A',
                      'referenceAlleleObservations': 1128,
                      'transcript': 'NM_001122740.1'
                    }
                  ],
                  'unifiedGeneFusions': []
                },
                'vcfFilePath': '/local/content/ncimatch/matchfiles/patient-10010/biopsy-T-15-000017/ngs-MSN3053_v2_b6892e2d-700c-463f-9b50-34e31d32b4fd/MSN3053_v2_MSN3053_RNA_v2.vcf'
              },
              'ngsRunNumber': '2',
              'status': 'CONFIRMED'
            }
          ]
        }
      ],
      'concordance': 'Y',
      'currentPatientStatus': 'OFF_TRIAL_NO_TA_AVAILABLE',
      'currentStepNumber': '0',
      'diseases': [
        {
          '_id': '10006190',
          'ctepCategory': 'Breast Neoplasm',
          'ctepSubCategory': 'Breast Cancer - Invasive',
          'ctepTerm': 'Invasive breast carcinoma',
          'shortName': 'Invasive breast carcinoma'
        }
      ],
      'ethnicity': 'NOT_HISPANIC_OR_LATINO',
      'exclusionCriterias': [] as any[],
      'gender': 'FEMALE',
      'patientAssignments': [
        {
          'biopsySequenceNumber': 'T-15-000017',
          'dateAssigned': {
            '$date': 1441390974672
          },
          'dateConfirmed': {
            '$date': 1441754116416
          },
          'patientAssignmentLogic': [
            {
              'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION',
              'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Invasive breast carcinoma.',
              'treatmentArmId': 'EAY131-Q',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-U',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-F',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-G',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-H',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-R',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-E',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-A',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-B',
              'treatmentArmVersion': '2015-08-06'
            },
            {
              'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
              'reason': 'The patient contains no matching variant.',
              'treatmentArmId': 'EAY131-V',
              'treatmentArmVersion': '2015-08-06'
            }
          ],
          'patientAssignmentMessages': [
            {
              'message': 'No candidate arm is available for this patient, notified the site',
              'patientSequenceNumber': '10010',
              'status': 'OFF_TRIAL_NO_TA_AVAILABLE',
              'stepNumber': '0'
            }
          ],
          'patientAssignmentStatus': 'NO_ARM_ASSIGNED',
          'patientAssignmentStatusMessage': 'No candidate arm is available for this patient, notified the site',
          'stepNumber': '0'
        }
      ],
      'patientRejoinTriggers': [
        {
          'dateScanned': {
            '$date': 1456419670400
          },
          'eligibleArms': [] as any[]
        }
      ],
      'patientSequenceNumber': '10010',
      'patientTriggers': [
        {
          'auditDate': {
            '$date': 1440163817587
          },
          'dateCreated': {
            '$date': 1440162777000
          },
          'message': 'Patient registration to step 0.',
          'patientSequenceNumber': '10010',
          'patientStatus': 'REGISTRATION',
          'stepNumber': '0',
          'studyId': 'EAY131'
        },
        {
          'auditDate': {
            '$date': 1441390974677
          },
          'dateCreated': {
            '$date': 1441390974677
          },
          'patientSequenceNumber': '10010',
          'patientStatus': 'PENDING_CONFIRMATION',
          'stepNumber': '0',
          'studyId': 'EAY131'
        },
        {
          'auditDate': {
            '$date': 1441754116416
          },
          'dateCreated': {
            '$date': 1441754116416
          },
          'patientSequenceNumber': '10010',
          'patientStatus': 'PENDING_OFF_STUDY',
          'stepNumber': '0',
          'studyId': 'EAY131'
        },
        {
          'auditDate': {
            '$date': 1441754130458
          },
          'dateCreated': {
            '$date': 1441754130458
          },
          'message': 'No candidate arm is available for this patient, notified the site',
          'patientSequenceNumber': '10010',
          'patientStatus': 'OFF_TRIAL_NO_TA_AVAILABLE',
          'stepNumber': '0',
          'studyId': 'EAY131'
        }
      ],
      'priorDrugs': [] as any[],
      'races': [
        'WHITE'
      ],
      'registrationDate': {
        '$date': 1440162777000
      }
    };
  }
}
