import { Observable } from 'rxjs/Observable';

export class CliaApiServiceStub {
    static makeCliaDetailsNTCData = () => [
        { patientSequenceNumber: '1', currentStepNumber: '1.1' },
        { patientSequenceNumber: '2', currentStepNumber: '1.1' },
        { patientSequenceNumber: '3', currentStepNumber: '1.1' },
        { patientSequenceNumber: '4', currentStepNumber: '1.1' }
    ] as any[]
}
