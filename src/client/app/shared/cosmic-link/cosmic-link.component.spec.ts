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

  describe('tratment-arm-link component', () => {

    let component:CosmicLinkComponent;
    let fixture:ComponentFixture<CosmicLinkComponent>;

    let config:any[] = [
      {path: 'tracking', component: 'CosmicLinkComponent'}
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule],
        declarations: [CosmicLinkComponent],
        // providers: [{ provide: DashboardApiService, useClass: MockDashboardService }]
      });
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
            fixture.componentInstance.getLinkUrl();
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
          });
      }));

  });
}
