import { Observable } from 'rxjs/Observable';

import {
    CliaVariantReportsNTCViewData,
    CliaVariantReportsPACCViewData,
    CliaVariantReportsPCViewData
} from '../clia-data-interfaces';

export class CliaApiServiceStub {
    static makeCliaDetailsNTCData = () => [
        { value1: '1', value2: '1.1' },
        { value1: '2', value2: '1.1' },
        { value1: '3', value2: '1.1' },
        { value1: '4', value2: '1.1' }
    ] as any[]

    static makeCliaDetailsPACCData = () => [
        { value1: '1', value2: '1.1' },
        { value1: '2', value2: '1.1' },
        { value1: '3', value2: '1.1' },
        { value1: '4', value2: '1.1' }
    ] as any[]

    static makeCliaDetailsPCData = () => [
        { value1: '1', value2: '1.1' },
        { value1: '2', value2: '1.1' },
        { value1: '3', value2: '1.1' },
        { value1: '4', value2: '1.1' }
    ] as any[]

    static makeCliaVariantReportQCData = () => [
        { value1: '1', value2: '1.1' },
        { value1: '2', value2: '1.1' },
        { value1: '3', value2: '1.1' },
        { value1: '4', value2: '1.1' }
    ] as any[]

    static makeCliaIonData = () => [{
        'date_ion_reporter_id_created': '2016-10-12 21:19:36.514328',
        'ion_reporter_id': 'IR_IGXAW',
        'ir_status': 'Lost contact! Last heartbeat was received 3 months, 2 days, 22 hours, 56 minutes, 48 seconds ago.',
        'last_contact': '2017-02-01 15:08:26.446499',
        'site': 'mocha',
        'study_id': 'EAY131'
    }] as any[]

    static makeCliaVariantReportsNTCData = () => {
        return {
            'analysis_id': 'SC_KGPVI_analysis_1',
            'cellularity': '1.000000',
            'control_type': 'no_template',
            'copy_number_variant_genes': null,
            'copy_number_variants': [],
            'date_molecular_id_created': '2016-10-28 12:56:19.566',
            'date_variant_received': '2016-11-10 17:46:49.401014',
            'editable': 'true',
            'filename': 'SC_KGPVI_MoCha_12_notemplate_passed',
            'gene_fusions': [],
            'ion_reporter_id': 'IR_WAO85',
            'mapd': '1.934',
            'molecular_id': 'NTC_MOCHA_KGPVI',
            'molecular_id_type': 'sample_control',
            'oncomine_control_panel_summary': null,
            'report_status': 'PASSED',
            'site': 'mocha',
            'snv_indels': [],
            'torrent_variant_caller_version': '4.4-8',
            'total_variants': 0,
            'tsv_name': 'IR_WAO85/NTC_MOCHA_KGPVI/SC_KGPVI_analysis_1/SC_KGPVI_MoCha_12_notemplate_passed.tsv',
            'vcf_name': 'IR_WAO85/NTC_MOCHA_KGPVI/SC_KGPVI_analysis_1/SC_KGPVI_MoCha_12_notemplate_passed.vcf'
        } as CliaVariantReportsNTCViewData;
    }

    static makeCliaVariantReportsPACCData = () => {
        return {
            'analysis_id': 'SC_KGPVI_analysis_1',
            'cellularity': '1.000000',
            'control_type': 'no_template',
            'copy_number_variant_genes': null,
            'copy_number_variants': [],
            'date_molecular_id_created': '2016-10-28 12:56:19.566',
            'date_variant_received': '2016-11-10 17:46:49.401014',
            'editable': 'true',
            'filename': 'SC_KGPVI_MoCha_12_notemplate_passed',
            'gene_fusions': [],
            'ion_reporter_id': 'IR_WAO85',
            'mapd': '1.934',
            'molecular_id': 'NTC_MOCHA_KGPVI',
            'molecular_id_type': 'sample_control',
            'oncomine_control_panel_summary': null,
            'report_status': 'PASSED',
            'site': 'mocha',
            'snv_indels': [],
            'torrent_variant_caller_version': '4.4-8',
            'total_variants': 0,
            'tsv_name': 'IR_WAO85/NTC_MOCHA_KGPVI/SC_KGPVI_analysis_1/SC_KGPVI_MoCha_12_notemplate_passed.tsv',
            'vcf_name': 'IR_WAO85/NTC_MOCHA_KGPVI/SC_KGPVI_analysis_1/SC_KGPVI_MoCha_12_notemplate_passed.vcf'
        } as CliaVariantReportsPACCViewData;
    }

    static makeCliaVariantReportsPCData = () => {
        return {
            'analysis_id': 'SC_A2PD6_ANI',
            'cdna_bai_name': 'IR_UITEST/SC_MOCHA_A2PD6/SC_A2PD6_ANI/cdna.bai',
            'cdna_bam_name': 'IR_UITEST/SC_MOCHA_A2PD6/SC_A2PD6_ANI/cdna.bam',
            'cellularity': '1.000000',
            'confirmed': true,
            'control_type': 'positive',
            'date_molecular_id_created': '2016-11-21 17:55:16.604130',
            'date_variant_received': '2016-11-21 17:55:48.307172',
            "matchingCriteria": {
              "SNV": "Matching criteria for SNV: Chromosone, Position, Reference and Alternative.",
              "CNV": "Matching criteria for CNV: Gene",
              "Fusion": "Matching criteria for Fusion: ID",
              "Indel": "Matching criteria for Indel: Chromosone, Position, Reference and Alternative."
            },
            'positiveControlVersion': 3,
            'positiveControlLoadedDate' : '2016-11-21 17:55:16.604130',
            'positiveControls': [{
              "variantType": "Indel",
              "geneName": "TP53",
              "chromosome": "chr17",
              "position": "7574003",
              "identifier": ".",
              "reference": "G",
              "alternative": "-",
              "protein": "p.R342fs*3",
              "dna": "c.1023delC",
              "purpose": null,
              "function": null
            }],
            'dna_bai_name': 'IR_UITEST/SC_MOCHA_A2PD6/SC_A2PD6_ANI/dna.bai',
            'dna_bam_name': 'IR_UITEST/SC_MOCHA_A2PD6/SC_A2PD6_ANI/dna.bam',
            'editable': 'true',
            'false_positive_variants': [{
                'chromosome': 'chr3',
                'function': 'missense',
                'gene': 'PIK3CA',
                'hgvs': 'c.3140A>G',
                'identifier': 'COSM775',
                'ocp_alternative': 'G',
                'ocp_reference': 'A',
                'position': '178952085',
                'protein': 'p.His1047Arg',
                'variant_type': 'snp'
            },
            {
                'chromosome': 'chr17',
                'function': 'frameshiftInsertion',
                'gene': 'TP53',
                'hgvs': 'c.267_268insCC',
                'identifier': '.',
                'ocp_alternative': 'GG',
                'ocp_reference': '-',
                'position': '7579420',
                'protein': 'p.Ser90fs',
                'variant_type': 'ins'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': null,
                'hgvs': null,
                'identifier': 'MYCN',
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'cnv'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': null,
                'hgvs': null,
                'identifier': 'AKT1',
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'cnv'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': null,
                'hgvs': null,
                'identifier': 'TPM3-ALK.T7A20',
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'fusion'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': null,
                'hgvs': null,
                'identifier': 'NCOA4-RET.N7R12',
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'fusion'
            }
            ],
            'filename': 'test1',
            'ion_reporter_id': 'IR_UITEST',
            'mapd': '0.439',
            'molecular_id': 'SC_MOCHA_A2PD6',
            'molecular_id_type': 'sample_control',
            'pass_flag': false,
            'positive_control_version': 4,
            'positive_variants': [{
                'chromosome': 'chr3',
                'function': null,
                'gene': 'PIK3CA',
                'hgvs': 'c.333G>C',
                'identifier': 'COSM12580',
                'match': false,
                'ocp_alternative': 'C',
                'ocp_reference': 'G',
                'position': '178916946',
                'protein': 'p.Lys111Asn',
                'variant_type': 'snp'
            },
            {
                'chromosome': 'chr7',
                'function': 'missense',
                'gene': 'BRAF',
                'hgvs': 'c.1799T>A',
                'identifier': 'COSM476',
                'match': false,
                'ocp_alternative': 'T',
                'ocp_reference': 'A',
                'position': '140453136',
                'protein': 'p.V600E',
                'variant_type': 'snp'
            },
            {
                'chromosome': 'chr13',
                'function': null,
                'gene': 'BRCA2',
                'hgvs': 'c.9281C>A',
                'identifier': '.',
                'match': false,
                'ocp_alternative': 'A',
                'ocp_reference': 'C',
                'position': '32968850',
                'protein': 'p.Ser3094Ter',
                'variant_type': 'snp'
            },
            {
                'chromosome': 'chr10',
                'function': null,
                'gene': 'PTEN',
                'hgvs': 'c.741_742insA',
                'identifier': '.',
                'match': false,
                'ocp_alternative': 'A',
                'ocp_reference': '-',
                'position': '89717716',
                'protein': 'p.Pro248fs',
                'variant_type': 'del'
            },
            {
                'chromosome': 'chr13',
                'function': null,
                'gene': 'RB1',
                'hgvs': 'c.346_349delACTT',
                'identifier': null,
                'match': false,
                'ocp_alternative': '-',
                'ocp_reference': 'ACTT',
                'position': '48916816',
                'protein': 'p.T116fs*8',
                'variant_type': 'del'
            },
            {
                'chromosome': 'chr17',
                'function': null,
                'gene': 'TP53',
                'hgvs': 'c.1023delC',
                'identifier': '.',
                'match': false,
                'ocp_alternative': '-',
                'ocp_reference': 'G',
                'position': '7574003',
                'protein': 'p.R342fs*3',
                'variant_type': 'del'
            },
            {
                'chromosome': 'chr17',
                'function': null,
                'gene': 'ERBB2',
                'hgvs': null,
                'identifier': null,
                'match': true,
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'cnv'
            },
            {
                'chromosome': 'chr17',
                'function': null,
                'gene': 'RPS6KB1',
                'hgvs': null,
                'identifier': null,
                'match': false,
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'cnv'
            },
            {
                'chromosome': 'chr20',
                'function': null,
                'gene': 'ZNF217',
                'hgvs': null,
                'identifier': null,
                'match': false,
                'ocp_alternative': null,
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'cnv'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': 'ALK',
                'hgvs': 'EML4-ALK',
                'identifier': 'AB374361',
                'match': false,
                'ocp_alternative': 'EML4-ALK.E6aA20',
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'fusion'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': 'ALK',
                'hgvs': 'ALK-PTPN3',
                'identifier': null,
                'match': false,
                'ocp_alternative': 'ALK-PTPN3.A11P3',
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'fusion'
            },
            {
                'chromosome': null,
                'function': null,
                'gene': 'MET',
                'hgvs': 'MET-MET',
                'identifier': null,
                'match': false,
                'ocp_alternative': 'MET-MET.M13M15',
                'ocp_reference': null,
                'position': null,
                'protein': null,
                'variant_type': 'fusion'
            }
            ],
            'report_status': 'FAILED',
            'site': 'mocha',
            'torrent_variant_caller_version': '5.0-9',
            'total_variants': 7,
            'tsv_name': 'IR_UITEST/SC_MOCHA_A2PD6/SC_A2PD6_ANI/test1.tsv',
            'vcf_name': 'IR_UITEST/SC_MOCHA_A2PD6/SC_A2PD6_ANI/test1.vcf'
        } as CliaVariantReportsPCViewData;
    }
}
