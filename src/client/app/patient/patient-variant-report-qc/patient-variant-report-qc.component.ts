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
  psn: string;
  analysisId: string;
  molecularSequenceNumber: string;
  dateReceived: any;

  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  assay: any[];
  cnv: any[];
  snvAndIndels: any[];
  geneFusions: any[];
  assignmentReason: any;
  assignmentHistory: any[];
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
    this.patientApi.getPatientVariantReportQc(psn, analysisId)
      .subscribe((response: any) => {
        this.molecularSequenceNumber = response.molecularSequenceNumber;
        this.dateReceived = response.dateReceived;
        this.cnv = response.copy_number_variants || [];
        this.geneFusions = response.gene_fusions || [];
        this.snvAndIndels = response.indels || [];
        this.snvAndIndels = this.snvAndIndels.concat(response.single_nucleotide_variants || [])
        this.isLoaded = true;
      },
      error => this.errorMessage = <any>error
      );
  }
}
