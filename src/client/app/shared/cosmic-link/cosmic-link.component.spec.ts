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
    });

  it('should instantiate default getLinkUrl',
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
            comp.linkId = "unknown";
            comp.linkType = LinkType;

            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    it('should instantiate cosmicId -> cosmicId getLinkUrl',
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
            comp.linkType = LinkType.cosmicId;

            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    it('should instantiate cosmicId -> COSM getLinkUrl',
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
            comp.linkId = "COSM123";
            comp.linkType = LinkType.cosmicId;

            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    it('should instantiate cosmicFusionId -> cosmicFusionId getLinkUrl',
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
            comp.linkId = "cosmicFusionId";
            comp.linkType = LinkType.cosmicFusionId;

            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    it('should instantiate cosmicFusionId -> COSF getLinkUrl',
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
            comp.linkId = "COSF123";
            comp.linkType = LinkType.cosmicFusionId;

            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    it('should instantiate cosmicGene getLinkUrl',
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
            comp.linkId = "cosmicGene";
            comp.linkType = LinkType.cosmicGene;

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
