import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService, ApiStatusUpdateSuccess, ApiStatusUpdateError } from '../patient-api.service';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { ConfirmableItem } from '../../shared/check-box-with-confirm/check-box-with-confirm.component';
import { DialogResults } from '../../shared/modal-dialogs/modal-dialog-results';
import { ModalDialogConfirmationComponent } from '../../shared/modal-dialogs/modal-dialog-confirmation.component';
import { VariantReportComparisonData } from '../variant-report-comparison-data';
import { VariantReportData } from '../variant-report-data';
import { ToastrService } from '../../shared/error-handling/toastr.service';

/**
 * PatientVariantReportOutsideAssayComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report-oa',
  templateUrl: 'patient-variant-report-oa.component.html',
  styleUrls: ['patient-variant-report-oa.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportOutsideAssayComponent
  implements OnInit, OnDestroy, VariantReportComparisonData {

  scrollTo: (id: string) => void;
  showComparison: boolean;
  showOutsideAssay: boolean;
  isOutsideAssayValue: boolean = null;

  patientSequenceNumber: string;
  currentPatientStatus: string;
  currentStepNumber: string;
  concordance: string;

  outsideData: VariantReportData;
  matchData: VariantReportData;

  comparisonVariantReport: {
    singleNucleotideVariantAndIndels: any[];
    copyNumberVariants: any[];
    unifiedGeneFusions: any[];
  };

  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private scrollService: ScrollService,
    private transformer: ViewDataTransformer,
    private modalService: BsModalService,
    private toastrService: ToastrService) {
    this.scrollTo = scrollService.scrollToElement;
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  openOutsideAssignmentReason(elementId: string, isOutsideAssay: boolean) {
    this.showOutsideAssay = isOutsideAssay;
    this.scrollTo(elementId);
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.patientSequenceNumber, file);
  }

  confirmOutsideVariantReport(): void {
    const action = () => {
      console.info('Confirming outside lab variant report: ' + this.outsideData.analysisId);
      this.patientApi.updateVariantReport(this.patientSequenceNumber, this.outsideData.biopsySequenceNumber, this.outsideData.analysisId, true).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showError(x.message);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this.outsideData, x);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      'Variant Report Confirmation',
      `Are you sure you want to confirm Outside Lab Variant Report ${this.outsideData.analysisId}?`,
      'Confirm',
      'Don\'t Confirm',
      action
    );
  }

  rejectOutsideVariantReport(): void {
    const action = () => {
      console.info('Rejecting outside lab variant report: ' + this.outsideData.analysisId);
      this.patientApi.updateVariantReport(this.patientSequenceNumber, this.outsideData.biopsySequenceNumber, this.outsideData.analysisId, false).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showError(x.message);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this.outsideData, x);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      'Variant Report Rejection',
      `Are you sure you want to reject Outside Lab Variant Report ${this.outsideData.analysisId}?`,
      'Reject',
      'Don\'t Reject',
      action
    );
  }

  confirmOutsideAssignmentReport(): void {
    const action = () => {
      console.info('Confirming outside lab assignment report: ' + this.outsideData.analysisId);
      this.patientApi.updateAssignmentReport(this.patientSequenceNumber, true).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showError(x.message);
              break;
            case 'success':
              this.transformer.updateAssignmentReportStatus(this.outsideData, x);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      'Assignment Report Confirmation',
      `Are you sure you want to confirm Outside Lab Assignment Report ${this.outsideData.analysisId}?`,
      'Confirm',
      'Don\'t Confirm',
      action
    );
  }

  confirmMatchVariantReport(): void {
    const action = () => {
      console.info('Confirming MATCH variant report: ' + this.matchData.analysisId);
      this.patientApi.updateVariantReport(this.patientSequenceNumber, this.matchData.biopsySequenceNumber, this.matchData.analysisId, true).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showError(x.message);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this.matchData, x);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      'Variant Report Confirmation',
      `Are you sure you want to confirm MATCH Variant Report ${this.matchData.analysisId}?`,
      'Confirm',
      'Don\'t Confirm',
      action
    );
  }

  rejectMatchVariantReport(): void {
    const action = () => {
      console.info('Rejecting MATCH variant report: ' + this.matchData.analysisId);
      this.patientApi.updateVariantReport(this.patientSequenceNumber, this.matchData.biopsySequenceNumber, this.matchData.analysisId, false).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showError(x.message);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this.matchData, x);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      'Variant Report Rejection',
      `Are you sure you want to reject MATCH Variant Report ${this.matchData.analysisId}?`,
      'Reject',
      'Don\'t Reject',
      action
    );
  }

  confirmMatchAssignmentReport(): void {
    const action = () => {
      console.info('Confirming MATCH assignment report: ' + this.matchData.analysisId);
      this.patientApi.updateAssignmentReport(this.patientSequenceNumber, true).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showError(x.message);
              break;
            case 'success':
              this.transformer.updateAssignmentReportStatus(this.matchData, x);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      'Assignment Report Confirmation',
      `Are you sure you want to confirm MATCH Assignment Report ${this.matchData.analysisId}?`,
      'Confirm',
      'Don\'t Confirm',
      action
    );
  }

  onVariantConfirmed(reportData: VariantReportData, item: ConfirmableItem) {
    console.info('Confirming variant: ' + JSON.stringify(item));

    this.patientApi.updateVariant(
      this.patientSequenceNumber,
      reportData.biopsySequenceNumber,
      reportData.analysisId,
      (item as any).metadata._id,
      item.confirmed,
      item.comment
    ).subscribe(
      (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
        switch (x.kind) {
          case 'error':
            this.showError(x.message);
            break;
          case 'success':
            this.transformer.updateVariantStatus(reportData, x);
            break;
        }
      }
    );
  }

  hasAssignment(data: VariantReportData): boolean {
    return data.assignmentReport
      && data.assignmentReport.reasons
      && data.assignmentReport.reasons.length;
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

  private showError(message: string): void {
    console.error(message);
    if (this.toastrService && this.toastrService.toastr) {
      this.toastrService.toastr.error(message);
    }
  }
}
