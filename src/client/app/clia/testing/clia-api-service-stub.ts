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
}
