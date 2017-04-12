import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorCodeTaDirective } from './colorcode-ta.directive';
import { ColorCodePatientsDirective } from './colorcode-patients.directive';
import { ColorCodeDaysDirective } from './colorcode-days.directive';
import { ColorCodeHoursDirective } from './colorcode-hours.directive';
import { ColorCodeCliaDirective } from './colorcode-clia.directive';
import { ColorCodeCliaIonDirective } from './colorcode-clia-ion.directive';
import { MatchHeightDirective } from './match-height.directive';
import { ExternalLinksComponent } from './external-links.component';
import { ColorCodeAssignmentDirective } from './colorcode-assignment.directive';
import { ColorCodeVariantReportDirective } from './colorcode-variant-report.directive';
import { ActiveClassDirective } from './active-class.directive';
import { MatchHeightTabClickDirective } from './match-height-tab.directive';
import { FaIconDirective } from './fa-icon.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ColorCodeTaDirective,
    ColorCodePatientsDirective,
    ColorCodeDaysDirective,
    ColorCodeHoursDirective,
    ColorCodeCliaDirective,
    ColorCodeCliaIonDirective,
    MatchHeightDirective,
    ExternalLinksComponent,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    ActiveClassDirective,
    MatchHeightTabClickDirective,
    FaIconDirective
  ],
  exports: [
    ColorCodeTaDirective,
    ColorCodePatientsDirective,
    ColorCodeDaysDirective,
    ColorCodeHoursDirective,
    ColorCodeCliaDirective,
    ColorCodeCliaIonDirective,
    MatchHeightDirective,
    ExternalLinksComponent,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    ActiveClassDirective,
    MatchHeightTabClickDirective,
    FaIconDirective
  ],
})
export class DirectivesModule {
}
