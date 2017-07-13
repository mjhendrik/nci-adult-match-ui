import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService,
  PatientVariantReportInterface
} from '../patient-api.service';
import { Observable } from "rxjs/Observable";

/**
 * PatientVariantReportQcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report-qc',
  templateUrl: 'patient-variant-report-qc.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportQcComponent implements OnInit {
  calculateOcpSum(ocpSummary: any): any {
    if (!ocpSummary)
      return null;
    
    let sum: number = 0;
    for (let key of Object.keys(ocpSummary)) {
      sum += Number(ocpSummary[key]);
    }

    return sum;
  }

  psn: string;
  analysisId: string;
  molecularSequenceNumber: string;
  dateReceived: any;
  biopsySequenceNumber: string;
  mapd: string;
  tvc_version: string;
  pool1: number;
  pool2: number;
  cellularity: string;

  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  cnv: any[];
  snvAndIndels: any[];
  geneFusions: any[];
  ocpSummary: any;

  isLoaded: boolean;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService) { }

  ngOnInit() {
    this.psn = this.route.snapshot.params['patientSequenceNumber'];
    this.analysisId = this.route.snapshot.params['analysisId'];
    this.getData(this.psn, this.analysisId);
  }

  getData(psn: string, analysisId: string) {
    Observable.forkJoin(
        this.patientApi.getPatientVariantReportQc(psn, analysisId),
        this.patientApi.getPatientVariantReportOcp(psn, analysisId),
        this.patientApi.getPatientCopyNumberReport(psn, analysisId)
    ).subscribe(
      data => {
        this.molecularSequenceNumber = data[0].molecularSequenceNumber;
        this.dateReceived = data[0].dateReceived;
        this.cnv = data[0].copy_number_variants || [];
        this.geneFusions = data[0].gene_fusions || [];
        this.snvAndIndels = data[0].indels || [];
        this.snvAndIndels = this.snvAndIndels.concat(data[0].single_nucleotide_variants || [])
        
        this.tvc_version = data[1].tvc_version;
        this.pool1 = data[1].pool1;
        this.pool2 = data[1].pool2;
        this.biopsySequenceNumber = data[1].biopsySequenceNumber;
        this.ocpSummary = data[1].genes;
        this.ocpSummary['SUM'] = this.calculateOcpSum(this.ocpSummary);

        this.mapd = data[2].mapd;
        this.cellularity = data[2].cellularity;

        this.isLoaded = true;
      },
      err => console.error(err)
    );
  }
}
