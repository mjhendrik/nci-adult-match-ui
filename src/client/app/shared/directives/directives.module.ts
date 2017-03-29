import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { colorCodeTa } from './colorcode-ta';
import { colorCodePatients } from './colorcode-patients';
import { colorCodeDays } from './colorcode-days';
import { colorCodeHours } from './colorcode-hours';
import { colorCodeClia } from './colorcode-clia';
import { MatchHeightDirective } from './match-height.directive';
import { ExternalLinksComponent } from './external-links.component';
import { colorCodeAssignment } from './colorcode-assignment';

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
    colorCodeAssignment
  ],
  exports: [
    colorCodeTa,
    colorCodePatients,
    colorCodeDays,
    colorCodeHours,
    colorCodeClia,
    MatchHeightDirective,
    ExternalLinksComponent,
    colorCodeAssignment
  ],
})
export class DirectivesModule {
}
