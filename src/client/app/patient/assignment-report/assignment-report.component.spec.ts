import {
  Component,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PipesModule } from './../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { AssignmentReportComponent } from './assignment-report.component';
import { AssignmentReasonTableModule } from '../assignment-reason-table/assignment-reason-table.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

export function main() {
  xdescribe('AssignmentReportComponent (templateUrl)', () => {
    let component: AssignmentReportComponent;
    let fixture: ComponentFixture<AssignmentReportComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    let config: any[] = [
      { path: 'patients/1234/variant_reports/ABCD/assignment/2017-02-04', component: 'AssignmentReportComponent' }
    ];

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          PipesModule,
          SharedModule,
          DirectivesModule,
          AssignmentReasonTableModule
        ],
        declarations: [AssignmentReportComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(AssignmentReportComponent);
      component = fixture.componentInstance; // AssignmentReportComponent test instance
      // query for the title 'page-header' by CSS element selector
      de = fixture.debugElement.query(By.css('.page-header'));
      el = de.nativeElement;
    });

    it('no PSN in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Patient ');
    });

    it('should display PSN in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Patient ' + component.psn);
    });

  });
}
