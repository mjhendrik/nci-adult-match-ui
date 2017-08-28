import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from './../shared/directives/directives.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { DataTableModule } from './../shared/datatables/DataTableModule';
import { DashboardComponent } from './dashboard.component';
import { DashboardApiService } from './dashboard-api.service';
import { ActivatedRoute } from '@angular/router';

let dashboard_data = {
  data: {
  }

};

export function main() {
  describe('dashboard component', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    // Setting module for testing
    // Disable old forms

    let config: any[] = [
      { path: 'dashboard', component: 'DashboardComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [DashboardComponent],
        providers: [
          { provide: DashboardApiService, useClass: MockDashboardService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: dashboard_data
              }
            }
          }
        ]
      });

    });


    xit('should test ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(DashboardComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(DashboardComponent);
            console.log(fixture.componentInstance);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('dashboard component with error response', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    // Setting module for testing
    // Disable old form

    let config: any[] = [
      { path: 'dashboard', component: 'DashboardComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [DashboardComponent],
        providers: [
          { provide: DashboardApiService, useClass: MockDashboardServiceWithErrors },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: dashboard_data
              }
            }
          }
        ]
      });

    });

  });
}


class MockDashboardService {
  getDashboardAR(): Observable<any> {
    return Observable.of();
  }
  getDashboardVR(): Observable<any> {
    return Observable.of();
  }
  getDashboardPatientsAwaiting(): Observable<any> {
    return Observable.of();
  }
  getDashboardOverviewTa(): Observable<any> {
    return Observable.of();
  }
  getDashboardOverviewPatients(): Observable<any> {
    return Observable.of();
  }
  getDashboardOverviewBt(): Observable<any> {
    return Observable.of();
  }
}

class MockDashboardServiceWithErrors {
  getDashboardAR(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardVR(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardPatientsAwaiting(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardOverviewTa(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardOverviewPatients(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardOverviewBt(): Observable<any> {
    return Observable.throw('error');
  }
}
