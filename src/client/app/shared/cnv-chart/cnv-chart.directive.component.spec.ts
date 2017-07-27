/**
 * Created by hendrikssonm on 6/26/17.
 */
import {
  Component,
} from '@angular/core';
import { Observable } from "rxjs/Observable";
import {
  async,
  TestBed
} from '@angular/core/testing';
import { nvD3 } from 'ng2-nvd3';

declare let d3: any;
import { CnvChartDirective } from './cnv-chart.directive.component';

export function main() {
  describe('Cnv chart component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [CnvChartDirective, nvD3],
        providers: [
          { provide: MockPatientApiService, useClass: MockPatientApiServiceError },
        ],
      });
    });

    it('should work by calling ngonInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CnvChartDirective, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CnvChartDirective);
            fixture.componentInstance.data = [ { 'values' : [
              1.916932,
              1.937298,
              1.954991,
              1.975595,
              2.000843,
              2.01052,
              2.05,
              2.090255,
              2.100364,
              2.127207,
              2.149627,
              2.169258,
              2.192305
            ] }, 'tmp/ChartTitle'];
            fixture.componentInstance.ngOnInit();
          });
      }));
  });
}

@Component({
  selector: 'example-chart',
  providers: [nvD3],
  template: '<nvd3 id="boxplotchart" [options]="options" ></nvd3>'
})

class MockPatientApiServiceError {
  getData(): Observable<any> {
    return Observable.throw("error");
  }
}

class MockPatientApiService {
  getData():Observable<any> {
    let testdata: any = [
      { 'values' : [
      1.916932,
      1.937298,
      1.954991,
      1.975595,
      2.000843,
      2.01052,
      2.05,
      2.090255,
      2.100364,
      2.127207,
      2.149627,
      2.169258,
      2.192305
    ] }
    , 'ChartTestTitle'];

    return Observable.of(testdata);
  }
}
