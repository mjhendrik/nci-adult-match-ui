import {
    Component,
    Input,
    DebugElement
} from '@angular/core';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router/router';

import { TreatmentArmLinkComponent } from './treatment-arm-link.component';

import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { TreatmentArmApiService } from './../../treatment-arm/treatment-arm-api.service';
import { ActivatedRoute } from '@angular/router';
import { PatientApiServiceStub } from './../../patient/testing/patient-api-service-stub';

export function main() {
    describe('tratment-arm-link component', () => {

      let component: TreatmentArmLinkComponent;
      let fixture: ComponentFixture<TreatmentArmLinkComponent>;

      let config: any[] = [
        { path: 'tracking', component: 'TreatmentArmLinkComponent' }
      ];

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule.withRoutes(config),
            DirectivesModule,
            PipesModule,
            FormsModule,
            DataTableModule],
          declarations: [TreatmentArmLinkComponent],
          providers: [
            { provide:   TreatmentArmApiService, useClass: MockTALinkService },
            {
              provide: ActivatedRoute, useValue: {}
            }
          ]
        });
      });

      it('should instantiate suffix --> splitId',
        async((done: any) => {
          TestBed
            .compileComponents()
            .then(() => {
              let fixture = TestBed.overrideComponent(TreatmentArmLinkComponent, {
                set: {
                  templateUrl: ''
                }
              }).createComponent(TreatmentArmLinkComponent);

              let comp: TreatmentArmLinkComponent = fixture.componentInstance;
              comp.treatmentArmId = "EAY131-ABC123";
              expect(comp.suffix).toEqual('ABC123');
            });
        }));

      it('should instantiate null --> splitId',
        async((done: any) => {
          TestBed
            .compileComponents()
            .then(() => {
              let fixture = TestBed.overrideComponent(TreatmentArmLinkComponent, {
                set: {
                  templateUrl: ''
                }
              }).createComponent(TreatmentArmLinkComponent);

              let comp: TreatmentArmLinkComponent = fixture.componentInstance;
              comp.treatmentArmId = null;
              expect(comp.suffix).not.toEqual('ABC123');
            });
        }));

    });
}
class TestComponent { }
class MockTALinkService {
  id(): Observable<any> {
    let testdata = "MockId"
    return Observable.of(testdata);
  }
}

