import { Observable } from 'rxjs/Observable';

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
        } as any;
    }
}
