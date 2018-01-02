import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { PatientVariantReportQcRoutingModule } from './patient-variant-report-qc-routing.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-filtered-table/variant-report-filtered-table.module';
import { PatientHeaderModule } from './../patient-header/patient-header.module';
import { ViewDataTransformer } from './../view-data-transformer.service';

export interface QcVariantReportData {
  psn: string;
  analysisId: string;
  molecularSequenceNumber: string;
  dateReceived: any;
  copyNumberVariants: any[];
  geneFusions: any[];
  snvAndIndels: any[];
  tvc_version: string;
  pool1: number;
  pool2: number;
  biopsySequenceNumber: string;
  ocpSummary: { [key: string]: any };
  mapd: string;
  cellularity: any;
  parsed_vcf_genes: any;
  dnaBamFilePath: string;
  rnaBamFilePath: string;
  vcfFilePath: string;
  showPools: boolean;
  patient: any;
}

@NgModule({
  imports: [
    CommonModule,
    PatientVariantReportQcRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportFilteredTableModule,
    PatientHeaderModule
  ],
  declarations: [PatientVariantReportQcComponent],
  exports: [PatientVariantReportQcComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientVariantReportQcModule { }
