import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { DashboardComponent } from './dashboard.component';

export function main() {
  describe('dashboard component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DashboardComponent],
        providers: [
          // { provide: NameListService, useValue: new MockNameListService() }
        ]
      });

    });

    it('should work',
      () => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(DashboardComponent);
            let dashboardInstance = fixture.debugElement.componentInstance;
            let dashboardDOMEl = fixture.debugElement.nativeElement;
            fixture.detectChanges();
            expect(dashboardDOMEl.querySelectorAll('li').length).toEqual(19);
            dashboardInstance.addName();
            fixture.detectChanges();
            expect(dashboardDOMEl.querySelectorAll('li').length).toEqual(19);
          });
      });

    it('onInit should work',
      () => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(DashboardComponent);
            let dashboardInstance = fixture.debugElement.componentInstance;
            // let dashboardDOMEl = fixture.debugElement.nativeElement;
            dashboardInstance.ngOnInit();

            expect(dashboardInstance.recordsPerPageVR).toEqual(30);
            console.log(dashboardInstance.recordsPerPageVR);
            alert(dashboardInstance.recordsPerPageVR);

            // fixture.detectChanges();
            // expect(dashboardDOMEl.querySelectorAll('li').length).toEqual(19);
            // dashboardInstance.addName();
            // fixture.detectChanges();
            // expect(dashboardDOMEl.querySelectorAll('li').length).toEqual(19);
          });
      });

  });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
