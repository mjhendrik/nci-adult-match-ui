import {
    async,
    TestBed
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TreatmentArmLinkComponent } from './treatment-arm-link.component';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { TreatmentArmApiService } from './../../treatment-arm/treatment-arm-api.service';

export function main() {
    describe('treatment-arm-link component', () => {

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
    let testData = "MockId"
    return Observable.of(testData);
  }
}

