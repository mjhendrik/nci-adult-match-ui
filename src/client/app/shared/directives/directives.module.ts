import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { colorCodeTa } from './colorcode-ta.directive';
import { colorCodePatients } from './colorcode-patients.directive';
import { colorCodeDays } from './colorcode-days.directive';
import { colorCodeHours } from './colorcode-hours.directive';
import { colorCodeClia } from './colorcode-clia.directive';
import { MatchHeightDirective } from './match-height.directive';
import { ExternalLinksComponent } from './external-links.component';
import { ColorCodeAssignmentDirective } from './colorcode-assignment.directive';
import { ColorCodeVariantReportDirective } from './colorcode-variant-report.directive';
import { ActiveClassDirective } from './active-class.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    colorCodeTa,
    colorCodePatients,
    colorCodeDays,
    colorCodeHours,
    colorCodeClia,
    MatchHeightDirective,
    ExternalLinksComponent,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    ActiveClassDirective
  ],
  exports: [
    colorCodeTa,
    colorCodePatients,
    colorCodeDays,
    colorCodeHours,
    colorCodeClia,
    MatchHeightDirective,
    ExternalLinksComponent,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    ActiveClassDirective
  ],
})
export class DirectivesModule {
}
