"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var colorcode_ta_directive_1 = require('./colorcode-ta.directive');
var colorcode_patients_directive_1 = require('./colorcode-patients.directive');
var colorcode_days_directive_1 = require('./colorcode-days.directive');
var colorcode_hours_directive_1 = require('./colorcode-hours.directive');
var colorcode_clia_directive_1 = require('./colorcode-clia.directive');
var colorcode_clia_ion_directive_1 = require('./colorcode-clia-ion.directive');
var match_height_directive_1 = require('./match-height.directive');
var external_links_component_1 = require('./external-links.component');
var colorcode_assignment_directive_1 = require('./colorcode-assignment.directive');
var colorcode_variant_report_directive_1 = require('./colorcode-variant-report.directive');
var active_class_directive_1 = require('./active-class.directive');
var match_height_tab_directive_1 = require('./match-height-tab.directive');
var fa_icon_directive_1 = require('./fa-icon.directive');
var cnv_chart_directive_1 = require('./../cnv-chart/cnv-chart.directive.component');
var ng2_nvd3_1 = require('ng2-nvd3');
var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                colorcode_ta_directive_1.ColorCodeTaDirective,
                colorcode_patients_directive_1.ColorCodePatientsDirective,
                colorcode_days_directive_1.ColorCodeDaysDirective,
                colorcode_hours_directive_1.ColorCodeHoursDirective,
                colorcode_clia_directive_1.ColorCodeCliaDirective,
                colorcode_clia_ion_directive_1.ColorCodeCliaIonDirective,
                match_height_directive_1.MatchHeightDirective,
                external_links_component_1.ExternalLinksComponent,
                colorcode_assignment_directive_1.ColorCodeAssignmentDirective,
                colorcode_variant_report_directive_1.ColorCodeVariantReportDirective,
                active_class_directive_1.ActiveClassDirective,
                match_height_tab_directive_1.MatchHeightTabClickDirective,
                fa_icon_directive_1.FaIconDirective,
                ng2_nvd3_1.nvD3,
                cnv_chart_directive_1.CnvChartDirective
            ],
            exports: [
                colorcode_ta_directive_1.ColorCodeTaDirective,
                colorcode_patients_directive_1.ColorCodePatientsDirective,
                colorcode_days_directive_1.ColorCodeDaysDirective,
                colorcode_hours_directive_1.ColorCodeHoursDirective,
                colorcode_clia_directive_1.ColorCodeCliaDirective,
                colorcode_clia_ion_directive_1.ColorCodeCliaIonDirective,
                match_height_directive_1.MatchHeightDirective,
                external_links_component_1.ExternalLinksComponent,
                colorcode_assignment_directive_1.ColorCodeAssignmentDirective,
                colorcode_variant_report_directive_1.ColorCodeVariantReportDirective,
                active_class_directive_1.ActiveClassDirective,
                match_height_tab_directive_1.MatchHeightTabClickDirective,
                fa_icon_directive_1.FaIconDirective,
                ng2_nvd3_1.nvD3,
                cnv_chart_directive_1.CnvChartDirective,
            ],
        })
    ], DirectivesModule);
    return DirectivesModule;
}());
exports.DirectivesModule = DirectivesModule;
//# sourceMappingURL=directives.module.js.map
