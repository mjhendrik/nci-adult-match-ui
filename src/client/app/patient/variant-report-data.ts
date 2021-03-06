import { AmoiSummary } from './amoi-summary';

export interface VariantReportData {
    [name: string]: any;

    patientSequenceNumber?: string;
    biopsySequenceNumber?: string;
    molecularSequenceNumber?: string;
    analysisId?: string;
    patient?: any;
    assays?: any[];
    variantReportFileReceivedDate?: string;
    variantReportCreatedDate?: string;
    variantReportRejectedOrConfirmedDate?: string;
    variantReportStatus?: string;
    comments?: string;
    commenter?: string;
    variantReport?: any;

    moiSummary?: AmoiSummary;

    assignmentReport?: any;
    assignmentHistory?: any;
    parsed_vcf_genes?: any;
    tvc_version?: string;
    pool1?: number;
    pool2?: number;
    mapd?: string;
    cellularity?: any;
    showPools?: boolean;
    tvcVersion?: string;
    dnaBamFilePath?: string;
    rnaBamFilePath?: string;
    dnaBaiFilePath?: string;
    rnaBaiFilePath?: string;
    vcfFilePath?: string;
    qcFile?: string;

    isVariantReportEditable?: boolean;
    isAssignmentReportEditable?: boolean;
    isOutsideAssayWorkflow?: boolean;
}
