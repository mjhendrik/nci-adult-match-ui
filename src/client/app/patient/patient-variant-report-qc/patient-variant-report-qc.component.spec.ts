import { Component } from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from "./../../shared/directives/directives.module";
import { PipesModule } from "./../../shared/pipes/pipes.module";
import { DataTableModule } from "./../../shared/datatables/DataTableModule";
import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { PatientApiService } from "./../patient-api.service";
import { VariantReportFilteredTableModule } from '../../shared/variant-report-filtered-table/variant-report-filtered-table.module';
import { CommonModule } from '@angular/common';



export function main() {
  describe('patient varient report qc component', () => {
    // Setting module for testing
    // Disable old forms

    let config: any[] = [
      { path: 'patients', component: 'PatientVariantReportQcComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule,
          PipesModule, FormsModule, DataTableModule, CommonModule,
          VariantReportFilteredTableModule],
        providers: [
          { provide: PatientApiService, useClass: MockPatientApiService },
          { provide: ActivatedRoute, useValue: { snapshot: { params: { patientSequenceNumber: 1067, analysisId: 1234 } } } }
        ]
      });
    });

    // it('should test ngOnInit',
    //   async((done: any) => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.overrideComponent(PatientVariantReportQcComponent, {
    //           set: {
    //             templateUrl: ''
    //           }
    //         }).createComponent(PatientVariantReportQcComponent);
    //         //fixture.componentInstance.ngOnInit();
    //       });
    //   }));

  });


  // describe('patients component', () => {
  //   // Setting module for testing
  //   // Disable old forms

  //   let config: any[] = [
  //     { path: 'patient', component: 'PatientVariantReportQcComponent' }
  //   ];

  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       imports: [RouterTestingModule.withRoutes(config), DirectivesModule,
  //         PipesModule, FormsModule, DataTableModule, CommonModule,
  //         VariantReportFilteredTableModule],
  //       declarations: [PatientVariantReportQcComponent],
  //       providers: [
  //         { provide: PatientApiService, useClass: MockPatientApiServiceError },
  //         { provide: ActivatedRoute, useValue: { snapshot: { params: { patientSequenceNumber: 1067, analysisId: 1234 } } } }
  //       ]
  //     });
  //   });

  //   it('should test getData',
  //     async((done: any) => {
  //       TestBed
  //         .compileComponents()
  //         .then(() => {
  //           let fixture = TestBed.overrideComponent(PatientVariantReportQcComponent, {
  //             set: {
  //               templateUrl: ''
  //             }
  //           }).createComponent(PatientVariantReportQcComponent);
  //           fixture.componentInstance.getData('1067', '1234');
  //         });

  //     }));
  // });

}


class MockPatientApiServiceError {

  getPatientVariantReportQc(psn: any): Observable<any> {
    return Observable.throw("error");
  }
}

class MockPatientApiService {

  getPatientVariantReportQc(psn: any): Observable<any> {
    let testdata = {
      molecularSequenceNumber: "1234",
      dateReceived: "",
      copy_number_variants: "",
      gene_fusions: "",
      indels: "",
      single_nucleotide_variants: ""
    };

    return Observable.of(testdata);
  }

  getPatientVariantReportOcp(): Observable<any> {
    return Observable.of({
      tvc_version: '',
      pool1: '',
      pool2: '',
      biopsySequenceNumber: '',
      genes: ''
    });
  }

  getPatientCopyNumberReport(): Observable<any> {
    return Observable.of({
      mapd: "",
      cellularity: '',
      parsed_vcf_genes: '',
      dnaBamFilePath: '',
      rnaBamFilePath: '',
      vcfFilePath: ''
    });

  }
  getPatientVariantReportFileInfo(): Observable<any> {
    return Observable.of({
      dnaBamFilePath: '',
      rnaBamFilePath: '',
      vcfFilePath: ''
    });
  }
}
