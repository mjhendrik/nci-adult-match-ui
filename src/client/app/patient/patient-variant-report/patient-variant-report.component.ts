import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { VariantReportData } from './patient-variant-report.module';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ConfirmableItem } from '../../shared/check-box-with-confirm/check-box-with-confirm.component';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { DialogResults } from '../../shared/modal-dialogs/modal-dialog-results';
import { ModalDialogConfirmationComponent } from '../../shared/modal-dialogs/modal-dialog-confirmation.component';

/**
 * PatientVariantReportComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report',
  templateUrl: 'patient-variant-report.component.html',
  styleUrls: ['patient-variant-report.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportComponent implements OnInit, VariantReportData {
  scrollTo: (id: string) => void;

  psn: string;
  bsn: string;
  analysisId: string;
  patient: any;
  variantReport: any;
  assignmentReport: any;
  assignmentHistory: any;
  parsed_vcf_genes: any;
  tvc_version: string;
  pool1: number;
  pool2: number;
  mapd: string;
  cellularity: any;
  showPools: boolean;
  assays: any[] = [];
  isEditable: boolean;

  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private scrollService: ScrollService,
    private transformer: ViewDataTransformer,
    private modalService: BsModalService) {
      this.scrollTo = scrollService.scrollToElement;
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  confirmReport(): void {
    const action = () => {
      console.info('Confirming variant report: ' + this.analysisId);
      this.patientApi.updateVariantReport(this.psn, this.bsn, this.analysisId, true, null).subscribe(
        (x: any) => { this.transformer.updateVariantReportStatus(this, x); }
      );
    };

    this.showConfirmation(
      'Variant Report Confirmation',
      `Are you sure you want to confirm Variant Report ${this.analysisId}?`,
      'Confirm',
      'Cancel',
      action
    );
  }

  rejectReport(): void {
    const action = () => {
      console.info('Rejecting variant report: ' + this.analysisId);
      this.patientApi.updateVariantReport(this.psn, this.bsn, this.analysisId, false, null).subscribe(
        (x: any) => { this.transformer.updateVariantReportStatus(this, x); }
      );
    };

    this.showConfirmation(
      'Variant Report Rejection',
      `Are you sure you want to reject Variant Report ${this.analysisId}?`,
      'Reject',
      'Cancel',
      action
    );
  }

  onVariantConfirmed(item: ConfirmableItem) {
    console.info('Confirming variant: ' + JSON.stringify(item));

    this.patientApi.updateVariant(
      this.psn,
      this.bsn,
      this.analysisId,
      (item as any).metadata._id,
      item.confirmed,
      item.comment
    ).subscribe(
      (x: any) => { this.transformer.updateVariantStatus(this, x); }
    );
  }

  private showConfirmation(
    confirmTitle: string,
    confirmMessage: string,
    okButtonText: string,
    cancelButtonText: string,
    action: () => void) {
    this.dialogSubscription = this.modalService.onHidden.subscribe((results: string) => {
      const modalResults = DialogResults.fromString(results);
      if (modalResults.success) {
        console.log('comments = ' + modalResults.comment);
        action();
      }
      this.unsubscribe();
    });

    this.modalRef = this.modalService.show(ModalDialogConfirmationComponent);
    this.modalRef.content.title = confirmTitle;
    this.modalRef.content.message = confirmMessage;
    this.modalRef.content.okButtonText = okButtonText;
    this.modalRef.content.cancelButtonText = cancelButtonText;
  }

  private unsubscribe() {
    if (!this.dialogSubscription) {
      return;
    }
    this.dialogSubscription.unsubscribe();
    this.dialogSubscription = null;
  }
}
