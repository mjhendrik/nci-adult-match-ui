{ 
    "_id" : ObjectId("5a39554ce4b062dc2b16d5f5"), 
    "_class" : "gov.nih.nci.matchbox.model.Patient", 
    "stateToken" : "5c8b09f6-4376-4aed-999c-c05db664b03e", 
    "patientSequenceNumber" : "UAT_AssayMessage", 
    "patientType" : "STANDARD", 
    "gender" : "UNKNOWN", 
    "ethnicity" : "UNKNOWN", 
    "races" : [

    ], 
    "patientRejoinTriggers" : [

    ], 
    "patientTriggers" : [
        {
            "stepNumber" : "0", 
            "patientStatus" : "REGISTRATION", 
            "message" : "Registering a new patient", 
            "dateCreated" : ISODate("2017-11-01T15:44:02.962"), 
            "studyId" : "EAY131", 
            "patientSequenceNumber" : "UAT_AssayMessage", 
            "type" : "TRIGGER"
        }
    ], 
    "biopsies" : [
        {
            "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
            "dateCreated" : ISODate("2017-12-19T18:09:43.406"), 
            "nextGenerationSequences" : [
                {
                    "ngsRunNumber" : "0", 
                    "dateReceived" : ISODate("2017-12-19T18:19:04.112"), 
                    "dateVerified" : ISODate("2017-12-19T18:24:05.943"), 
                    "status" : "REJECTED", 
                    "ionReporterResults" : {
                        "jobName" : "JOB-UAT_AssayMessage", 
                        "molecularSequenceNumber" : "MSN-UAT_AssayMessage", 
                        "ionReporterId" : "IR_WAO85", 
                        "dnaBamFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage/JOB-UAT_AssayMessage/dna_sample.bam", 
                        "rnaBamFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage/JOB-UAT_AssayMessage/rna_sample.bam", 
                        "vcfFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage/JOB-UAT_AssayMessage/vrReport.vcf", 
                        "qcFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage/JOB-UAT_AssayMessage/vrReport_QC.pdf", 
                        "variantReport" : {
                            "singleNucleotideVariants" : [

                            ], 
                            "indels" : [

                            ], 
                            "copyNumberVariants" : [

                            ], 
                            "geneFusions" : [
                                {
                                    "metadata" : {
                                        "_id" : "824f6718-08cd-4127-a270-a22e506360a9"
                                    }, 
                                    "confirmed" : false, 
                                    "geneName" : "ALK", 
                                    "identifier" : "TPM3-ALK.T7A20_1", 
                                    "filter" : "PASS", 
                                    "svType" : "Fusion", 
                                    "readDepth" : NumberInt(1001), 
                                    "rare" : false
                                }, 
                                {
                                    "metadata" : {
                                        "_id" : "b478ce8b-4680-422f-87a3-8fbff1e5c9ba"
                                    }, 
                                    "confirmed" : false, 
                                    "geneName" : "TPM3", 
                                    "identifier" : "TPM3-ALK.T7A20_2", 
                                    "filter" : "PASS", 
                                    "svType" : "Fusion", 
                                    "readDepth" : NumberInt(1001), 
                                    "rare" : false
                                }
                            ], 
                            "unifiedGeneFusions" : [
                                {
                                    "driverReadCount" : NumberInt(1001), 
                                    "partnerReadCount" : NumberInt(1001), 
                                    "driverGene" : "TPM3", 
                                    "partnerGene" : "ALK", 
                                    "annotation" : "-", 
                                    "metadata" : {
                                        "_id" : "e82b372a-da5d-4978-9b2e-8f6ccfee204b"
                                    }, 
                                    "confirmed" : false, 
                                    "identifier" : "TPM3-ALK.T7A20", 
                                    "filter" : "PASS", 
                                    "rare" : false
                                }
                            ], 
                            "createdDate" : ISODate("2017-12-19T18:19:03.698"), 
                            "metadata" : {
                                "_id" : "b939b303-b677-4e13-9f1c-d80eb17f0da7"
                            }
                        }, 
                        "dnaBaiFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage/JOB-UAT_AssayMessage/dna_sample.bai", 
                        "rnaBaiFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage/JOB-UAT_AssayMessage/rna_sample.bai"
                    }, 
                    "tvcVersion" : "4.2-13", 
                    "oncomineVariantAnnotationToolVersion" : "1.0.5"
                }
            ], 
            "assayMessages" : [
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
                    "biomarker" : "ICCPTENs", 
                    "result" : "POSITIVE", 
                    "orderedDate" : ISODate("2017-11-01T22:00:06.033"), 
                    "reportedDate" : ISODate("2017-11-01T22:10:06.033"), 
                    "requestedDate" : ISODate("2017-11-01T22:10:06.033"), 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "ASSAY"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
                    "biomarker" : "ICCMLH1s", 
                    "result" : "POSITIVE", 
                    "orderedDate" : ISODate("2017-11-01T21:55:06.033"), 
                    "reportedDate" : ISODate("2017-11-01T21:55:06.033"), 
                    "requestedDate" : ISODate("2017-11-01T21:55:06.033"), 
                    "comment" : "Test comment goes here", 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "ASSAY"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
                    "biomarker" : "ICCMSH2s", 
                    "result" : "POSITIVE", 
                    "orderedDate" : ISODate("2017-11-01T22:44:06.033"), 
                    "reportedDate" : ISODate("2017-11-01T22:44:06.033"), 
                    "requestedDate" : ISODate("2017-11-02T22:44:06.033"), 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "ASSAY"
                }
            ], 
            "pathologyReportMessages" : [

            ], 
            "mdAndersonMessages" : [
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
                    "message" : "SPECIMEN_RECEIVED", 
                    "reportedDate" : ISODate("2017-11-01T16:44:02.962"), 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "SPECIMEN"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
                    "message" : "NUCLEIC_ACID_SENDOUT", 
                    "reportedDate" : ISODate("2017-11-01T17:44:05.948"), 
                    "status" : "REJECTED", 
                    "comment" : "This is a comment for the sendout", 
                    "molecularSequenceNumber" : "MSN-UAT_AssayMessage", 
                    "destinationSite" : "Boston", 
                    "trackingNumber" : "TN-UI_UAT_AssayMessage", 
                    "dnaConcentration" : "", 
                    "dnaVolume" : "", 
                    "cDnaConcentration" : "", 
                    "cDnaVolume" : "", 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "SPECIMEN"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage", 
                    "message" : "SPECIMEN_FAILURE", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "SPECIMEN"
                }
            ], 
            "failure" : true
        }, 
        {
            "biopsySequenceNumber" : "BSN-UAT_AssayMessage-2", 
            "dateCreated" : ISODate("2017-12-19T18:26:44.877"), 
            "nextGenerationSequences" : [
                {
                    "ngsRunNumber" : "0", 
                    "dateReceived" : ISODate("2017-12-19T18:29:37.211"), 
                    "status" : "PENDING", 
                    "ionReporterResults" : {
                        "jobName" : "JOB-UAT_AssayMessage", 
                        "molecularSequenceNumber" : "MSN-UAT_AssayMessage-2", 
                        "ionReporterId" : "IR_WAO85", 
                        "dnaBamFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage-2/JOB-UAT_AssayMessage/dna_sample (1).bam", 
                        "rnaBamFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage-2/JOB-UAT_AssayMessage/rna_sample (1).bam", 
                        "vcfFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage-2/JOB-UAT_AssayMessage/vrReport.vcf", 
                        "qcFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage-2/JOB-UAT_AssayMessage/vrReport_QC.pdf", 
                        "variantReport" : {
                            "singleNucleotideVariants" : [

                            ], 
                            "indels" : [

                            ], 
                            "copyNumberVariants" : [

                            ], 
                            "geneFusions" : [
                                {
                                    "metadata" : {
                                        "_id" : "6e75bdad-e9da-401f-869d-d41f601c0b59"
                                    }, 
                                    "confirmed" : false, 
                                    "geneName" : "ALK", 
                                    "identifier" : "TPM3-ALK.T7A20_1", 
                                    "filter" : "PASS", 
                                    "svType" : "Fusion", 
                                    "readDepth" : NumberInt(1001), 
                                    "rare" : false
                                }, 
                                {
                                    "metadata" : {
                                        "_id" : "ed674a00-da67-4943-b564-fb60d5c6f563"
                                    }, 
                                    "confirmed" : false, 
                                    "geneName" : "TPM3", 
                                    "identifier" : "TPM3-ALK.T7A20_2", 
                                    "filter" : "PASS", 
                                    "svType" : "Fusion", 
                                    "readDepth" : NumberInt(1001), 
                                    "rare" : false
                                }
                            ], 
                            "unifiedGeneFusions" : [
                                {
                                    "driverReadCount" : NumberInt(1001), 
                                    "partnerReadCount" : NumberInt(1001), 
                                    "driverGene" : "TPM3", 
                                    "partnerGene" : "ALK", 
                                    "annotation" : "-", 
                                    "metadata" : {
                                        "_id" : "c72ba03d-8005-4938-96a2-f5fdedb0737b"
                                    }, 
                                    "confirmed" : false, 
                                    "identifier" : "TPM3-ALK.T7A20", 
                                    "filter" : "PASS", 
                                    "rare" : false
                                }
                            ], 
                            "createdDate" : ISODate("2017-12-19T18:29:36.941"), 
                            "metadata" : {
                                "_id" : "724ee133-3699-4e35-9388-861c58b4ef7d"
                            }
                        }, 
                        "dnaBaiFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage-2/JOB-UAT_AssayMessage/dna_sample (1).bai", 
                        "rnaBaiFilePath" : "s3://IR_WAO85/MSN-UAT_AssayMessage-2/JOB-UAT_AssayMessage/rna_sample (1).bai"
                    }, 
                    "tvcVersion" : "4.2-13", 
                    "oncomineVariantAnnotationToolVersion" : "1.0.5"
                }
            ], 
            "assayMessages" : [
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage-2", 
                    "biomarker" : "ICCPTENs", 
                    "result" : "POSITIVE", 
                    "orderedDate" : ISODate("2017-11-01T22:00:06.033"), 
                    "reportedDate" : ISODate("2017-11-01T22:10:06.033"), 
                    "requestedDate" : ISODate("2017-11-01T22:10:06.033"), 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "ASSAY"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage-2", 
                    "biomarker" : "ICCMLH1s", 
                    "result" : "POSITIVE", 
                    "orderedDate" : ISODate("2017-11-01T21:55:06.033"), 
                    "reportedDate" : ISODate("2017-11-01T21:55:06.033"), 
                    "requestedDate" : ISODate("2017-11-01T21:55:06.033"), 
                    "comment" : "Test comment goes here", 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "ASSAY"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage-2", 
                    "biomarker" : "ICCMSH2s", 
                    "result" : "POSITIVE", 
                    "orderedDate" : ISODate("2017-11-01T22:44:06.033"), 
                    "reportedDate" : ISODate("2017-11-01T22:44:06.033"), 
                    "requestedDate" : ISODate("2017-11-02T22:44:06.033"), 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "ASSAY"
                }
            ], 
            "pathologyReportMessages" : [

            ], 
            "mdAndersonMessages" : [
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage-2", 
                    "message" : "SPECIMEN_RECEIVED", 
                    "reportedDate" : ISODate("2017-11-01T16:44:02.962"), 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "SPECIMEN"
                }, 
                {
                    "biopsySequenceNumber" : "BSN-UAT_AssayMessage-2", 
                    "message" : "NUCLEIC_ACID_SENDOUT", 
                    "reportedDate" : ISODate("2017-11-01T17:44:05.948"), 
                    "comment" : "This is a comment for the sendout", 
                    "molecularSequenceNumber" : "MSN-UAT_AssayMessage-2", 
                    "destinationSite" : "Boston", 
                    "trackingNumber" : "TN-UI_UAT_AssayMessage", 
                    "dnaConcentration" : "", 
                    "dnaVolume" : "", 
                    "cDnaConcentration" : "", 
                    "cDnaVolume" : "", 
                    "studyId" : "EAY131", 
                    "patientSequenceNumber" : "UAT_AssayMessage", 
                    "type" : "SPECIMEN"
                }
            ], 
            "failure" : false
        }
    ], 
    "currentStepNumber" : "0", 
    "currentPatientStatus" : "REGISTRATION", 
    "patientAssignments" : [

    ], 
    "diseases" : [

    ], 
    "concordance" : "U", 
    "priorDrugs" : [

    ], 
    "registrationDate" : ISODate("2017-11-01T15:44:02.962")
}