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

import { CosmicLinkComponent } from './cosmic-link.component';

import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { ActivatedRoute } from '@angular/router';

export function main() {

  describe('cosmic-link component', () => {

    let component:CosmicLinkComponent;
    let fixture:ComponentFixture<CosmicLinkComponent>;

    let config:any[] = [
      {path: 'tracking', component: 'CosmicLinkComponent'}
    ];

    let LinkType:any = {
      cosmicGene : 'cosmicGene',
      cosmicId : 'cosmicId',
      cosmicFusionId : 'cosmicFusionId'
    };

    // let LinkId:any = "COSM"

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule],
        declarations: [CosmicLinkComponent],
        // providers: [{ provide: DashboardApiService, useClass: MockDashboardService }]
      }).compileComponents();

      // spyOn(localStorage, 'getLinkUrl').and.returnValue(JSON.stringify({ 'linkType': ['CosmicId'] }));

    });

    it('should instantiate getLinkUrl',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CosmicLinkComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CosmicLinkComponent);

            let comp: CosmicLinkComponent = fixture.componentInstance;
            comp.linkId = "cosmicId";

            comp.linkType = "cosmicId";


            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    it('should instantiate isValidLink',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CosmicLinkComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CosmicLinkComponent);
            fixture.componentInstance.isValidLink();
            fixture.detectChanges();
          });
      }));

    it('should instantiate getLinkId',
      async((done: any) => {

        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CosmicLinkComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CosmicLinkComponent);
            // fixture.componentInstance.getLinkId();
          });
      }));
  });
}

// @Component({
//   selector  : 'test-cmp',
//   template  : '<cosmic-link [isValidLink]="isValidLink"></cosmic-link>',
//   directives: [ CosmicLinkComponent ]
// })
// class CosmicLinkComponent {
//   isValidLink = new linkId("COSM"); //mock your input
// }
