import { Observable } from 'rxjs/Observable';

export class TreatmentArmApiServiceMock {
    getOverviewTa(): Observable<any> {
        let testData = [{ 'TOTAL': 105, 'READY': 1, 'CLOSED': 1, 'OPEN': 94, 'PENDING': 9 }];
        return Observable.of(testData);
    }
}
