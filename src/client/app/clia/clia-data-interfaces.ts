export interface CliaVariantReportsNTCViewData {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  date_variant_received: {};
  torrent_variant_caller_version: {};
  report_status: {};
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
}

export interface CliaVariantReportsPACCViewData {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  date_variant_received: {};
  torrent_variant_caller_version: {};
  report_status: {};
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
}

export interface CliaVariantReportsPCViewData {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  positive_control_version: {};
  date_molecular_id_created: {};
  date_variant_received: {};
  torrent_variant_caller_version: {};
  report_status: {};
  positiveControlVersion: {};
  positiveControlLoadedDate: {};
  matchingCriteria: {};
  false_positive_variants: any[];
  positive_variants: any[];
  positiveControls: any[];

}

export interface CliaVariantReportsQCViewData {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  torrent_variant_caller_version: {};
  oncomine_control_panel_summary: any[];
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
  copy_number_variant_genes: any[];
  parsed_vcf_genes: {};
  file_name: any;
  body: {};
  statusCode: string;
  header: {};
  parsedVCFGenes: any[];
  tvcVersion: any[];
}
