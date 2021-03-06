import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nvD3 } from 'ng2-nvd3';

import { ColorCodeTaDirective } from './colorcode-ta.directive';
import { ColorCodePatientsDirective } from './colorcode-patients.directive';
import { ColorCodeAssayDirective } from './colorcode-assay.directive';
import { ColorCodeDaysDirective } from './colorcode-days.directive';
import { ColorCodeHoursDirective } from './colorcode-hours.directive';
import { ColorCodeCliaDirective } from './colorcode-clia.directive';
import { ColorCodeCliaIonDirective } from './colorcode-clia-ion.directive';
import { MatchHeightDirective } from './match-height.directive';
import { ColorCodeAssignmentDirective } from './colorcode-assignment.directive';
import { ColorCodeVariantReportDirective } from './colorcode-variant-report.directive';
import { MatchHeightTabClickDirective } from './match-height-tab.directive';
import { FaIconDirective } from './fa-icon.directive';
import { AmoiDirective } from './amoi.directive';
import { CnvChartDirective } from './../cnv-chart/cnv-chart.directive.component';
import { ColorCodeYesNoDirective } from './colorcode-yes-no.directive';
import { RefreshMatchHeightDirective } from './refresh-match-height.directive';
import { ColorCodeConcordanceDirective } from './colorcode-concordance.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ColorCodeTaDirective,
    ColorCodePatientsDirective,
    ColorCodeAssayDirective,
    ColorCodeDaysDirective,
    ColorCodeHoursDirective,
    ColorCodeCliaDirective,
    ColorCodeCliaIonDirective,
    MatchHeightDirective,
    RefreshMatchHeightDirective,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    MatchHeightTabClickDirective,
    FaIconDirective,
    AmoiDirective,
    nvD3,
    CnvChartDirective,
    ColorCodeYesNoDirective,
    ColorCodeConcordanceDirective
  ],
  exports: [
    ColorCodeTaDirective,
    ColorCodePatientsDirective,
    ColorCodeAssayDirective,
    ColorCodeDaysDirective,
    ColorCodeHoursDirective,
    ColorCodeCliaDirective,
    ColorCodeCliaIonDirective,
    MatchHeightDirective,
    RefreshMatchHeightDirective,
    ColorCodeAssignmentDirective,
    ColorCodeVariantReportDirective,
    MatchHeightTabClickDirective,
    FaIconDirective,
    AmoiDirective,
    nvD3,
    CnvChartDirective,
    ColorCodeYesNoDirective,
    ColorCodeConcordanceDirective
  ],
})
export class DirectivesModule { }
