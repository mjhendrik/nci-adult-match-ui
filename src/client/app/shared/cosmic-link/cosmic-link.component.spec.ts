import {
  async,
  TestBed
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CosmicLinkComponent } from './cosmic-link.component';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';

export function main() {

  describe('cosmic-link component', () => {
    let config:any[] = [
      {path: 'tracking', component: 'CosmicLinkComponent'}
    ];

    let LinkType:any = {
      cosmicGene : 'cosmicGene',
      cosmicId : 'cosmicId',
      cosmicFusionId : 'cosmicFusionId'
    };

    let urls:any = {
      'cosmicId': 'http://cancer.sanger.ac.uk/cosmic/mutation/overview?id={id}',
      'cosmicFusionId': 'http://cancer.sanger.ac.uk/cosmic/fusion/summary?id={id}',
      'cosmicGene': 'http://grch37-cancer.sanger.ac.uk/cosmic/gene/overview?ln={id}',
    };

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule],
        declarations: [CosmicLinkComponent],
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
            expect(comp.isValidLink()).toBe(false);
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
            expect(comp.text).toBe("cosmicId");
            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    xit('should instantiate cosmicId -> COSM getLinkUrl',
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
            expect(comp.text).toBe("COSM123");
            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    xit('should instantiate cosmicFusionId -> cosmicFusionId getLinkUrl',
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
            expect(comp.text).toBe("cosmicFusionId");
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
            expect(comp.text).toBe("COSF123");
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
            expect(comp.text).toBe("cosmicGene");
            fixture.componentInstance.getLinkUrl();
            fixture.detectChanges();
            fixture.destroy();
          });
      }));

    xit('should instantiate isValidLink',
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

    xit('should instantiate getLinkId',
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
