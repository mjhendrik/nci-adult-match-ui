import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorCodeTaDirective } from './colorcode-ta.directive';
import { ColorCodePatientsDirective } from './colorcode-patients.directive';
import { ColorCodeDaysDirective } from './colorcode-days.directive';
import { ColorCodeHoursDirective } from './colorcode-hours.directive';
import { ColorCodeCliaDirective } from './colorcode-clia.directive';
import { MatchHeightDirective } from './match-height.directive';
import { ExternalLinksComponent } from './external-links.component';
import { ColorCodeAssignmentDirective } from './colorcode-assignment.directive';
import { ColorCodeVariantReportDirective } from './colorcode-variant-report.directive';
import { ActiveClassDirective } from './active-class.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ColorCodeTaDirective,
    ColorCodePatientsDirective,
    ColorCodeDaysDirective,
    ColorCodeHoursDirective,
    ColorCodeCliaDirective,
    MatchHeightDirective,
    ExternalLinksComponent,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    ActiveClassDirective
  ],
  exports: [
    ColorCodeTaDirective,
    ColorCodePatientsDirective,
    ColorCodeDaysDirective,
    ColorCodeHoursDirective,
    ColorCodeCliaDirective,
    MatchHeightDirective,
    ExternalLinksComponent,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    ActiveClassDirective
  ],
})
export class DirectivesModule {
}
