export interface CliaReportPcData {
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
    errorMessage: string;
    pcType: string;
    cliaTypeName: string;
    isReviewer: boolean;
}

export interface CliaReportPccData {
    molecular_id: any;
    analysis_id: any;
    total_variants: any;
    mapd: any;
    cellularity: any;
    date_variant_received: any;
    torrent_variant_caller_version: any;
    report_status: any;
    comment: any;
    copy_number_variants: any[];
    gene_fusions: any[];
    snv_indels: any[];
    errorMessage: string;
    paccType: string;
    cliaTypeName: string;
    next_generation_sequence: any;
    parsed_vcf_genes: any;
    isReviewer: boolean;

}
