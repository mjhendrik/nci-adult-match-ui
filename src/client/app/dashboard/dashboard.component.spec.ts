import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { DashboardComponent } from './dashboard.component';
import { NameListService } from '../shared/name-list/name-list.service';

export function main() {
  describe('dashboard component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DashboardComponent],
        providers: [
          { provide: NameListService, useValue: new MockNameListService() }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(DashboardComponent);
            let dashboardInstance = fixture.debugElement.componentInstance;
            let dashboardDOMEl = fixture.debugElement.nativeElement;
            let mockNameListService = <MockNameListService>fixture.debugElement.injector.get(NameListService);
            let nameListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            mockNameListService.returnValue = ['1', '2', '3'];

            fixture.detectChanges();

            expect(dashboardInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            expect(dashboardDOMEl.querySelectorAll('li').length).toEqual(19);
            expect(nameListServiceSpy.calls.count()).toBe(1);

            dashboardInstance.addName();

            fixture.detectChanges();

            expect(dashboardDOMEl.querySelectorAll('li').length).toEqual(19);
          });

      }));
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
