export interface VariantReportData {
    [name: string]: any;
    psn: string;
    bsn: string;
    analysisId: string;
    patient: any;
    assays: any[];
    variantReport: {
        variantReportFileReceivedDate: string;
        variantReportStatus: string;
        comments: string;
        statusUser: string;
        moiSummary: {
            totalaMOIs: number;
            totalMOIs: number;
            confirmedaMOIs: number;
            confirmedMOIs: number;
        }
    };
    assignmentReport: any;
    assignmentHistory: any;
    parsed_vcf_genes: any;
    tvc_version: string;
    pool1: number;
    pool2: number;
    mapd: string;
    cellularity: any;
    showPools: boolean;
    isVariantReportEditable: boolean;
    isAssignmentReportEditable: boolean;
    isOutsideAssayWorkflow: boolean;
}
