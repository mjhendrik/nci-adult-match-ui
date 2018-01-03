export interface CliaReportData {
    molecular_id: any;
    analysis_id: any;
    total_variants: any;
    mapd: any;
    cellularity: any;
    positive_control_version: any;
    date_molecular_id_created: any;
    date_variant_received: any;
    torrent_variant_caller_version: any;
    report_status: any;
    false_positive_variants: any[];
    positive_variants: any[];
    matchingCriteria: any;
    errorMessage: string;
    pcType: string;
    cliaTypeName: string;
    isReviewer: boolean;
}
