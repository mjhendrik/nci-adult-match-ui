import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap';

import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService,
  ApiStatusUpdateSuccess,
  ApiStatusUpdateError,
  ApiError,
  ApiSuccess
} from '../patient-api.service';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { ConfirmableItem } from '../../shared/check-box-with-confirm/check-box-with-confirm.component';
import { DialogResults } from '../../shared/modal-dialogs/modal-dialog-results';
import { ModalDialogConfirmationComponent } from '../../shared/modal-dialogs/modal-dialog-confirmation.component';
import { VariantReportComparisonData } from '../variant-report-comparison-data';
import { VariantReportData } from '../variant-report-data';
import { ToastrService } from '../../shared/error-handling/toastr.service';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';
import { DownloadService } from '../../shared/utils/download.service';

const roles = {
  variantReportEdit: [
    'SYSTEM',
    'ADMIN',
    'DARTMOUTH_VARIANT_REPORT_REVIEWER',
    'MDA_VARIANT_REPORT_REVIEWER',
    'MGH_VARIANT_REPORT_REVIEWER',
    'MOCHA_VARIANT_REPORT_REVIEWER',
    'YALE_VARIANT_REPORT_REVIEWER'
  ],
  assignmentReportEdit: [
    'SYSTEM',
    'ADMIN',
    'ASSIGNMENT_REPORT_REVIEWER'
  ]
};

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

  patientData: any = {};
  patient: any = {};

  outsideData: VariantReportData;
  matchData: VariantReportData;

  comparisonVariantReport: {
    singleNucleotideVariantAndIndels: any[];
    copyNumberVariants: any[];
    unifiedGeneFusions: any[];
  };

  allowVariantReportEdit: boolean;
  allowAssignmentReportEdit: boolean;

  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private scrollService: ScrollService,
    private transformer: ViewDataTransformer,
    private modalService: BsModalService,
    private toastrService: ToastrService,
    private profile: UserProfileService,
    private downloadApi: DownloadService) {
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

    this.allowVariantReportEdit = this.profile.checkRoles(roles.variantReportEdit);
    this.allowAssignmentReportEdit = this.profile.checkRoles(roles.assignmentReportEdit);
    this.patientData = this;

    this.patient.raceList = this.patient.races.join(', ');
    this.patient.isOutsideAssayWorkflow = true;
    if (this.patient.diseases && this.patient.diseases.length) {
      this.patient.disease.outsideData = this.patient.diseases.length > 0 ? this.patient.diseases[0] : {};
      this.patient.disease.matchData = this.patient.diseases.length > 1 ? this.patient.diseases[1] : {};
    }
    this.patient.concordance = this.transformConcordance(this.patient);
  }

  download(file: string) {
    this.patientApi
      .downloadPatientFile(this.patientSequenceNumber, file)
      .subscribe((resp: ApiError | ApiSuccess) => {
        switch (resp.kind) {
          case 'error':
            this.showToast(resp.message, true);
            break;
          case 'success':
            let url = resp.data ? resp.data.download_url : null;
            if (url) {
              this.downloadApi.downloadFile(url);
            } else {
              this.showToast('Unable to read the file URL', true);
            }
            break;
        }
      });
  }

  confirmOutsideVariantReport(): void {
    const action = () => {
      console.info('Confirming outside lab variant report: ' + this.outsideData.analysisId);
      this.patientApi
        .updateVariants(
        this.patientSequenceNumber,
        this.outsideData.biopsySequenceNumber,
        this.outsideData.analysisId,
        this.transformer.getVariants(this.outsideData.variantReport)
        )
        .flatMap(
        () => this.patientApi.updateVariantReportStatus(this.patientSequenceNumber, this.outsideData.biopsySequenceNumber, this.outsideData.analysisId, true)
        )
        .subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this, x);
              this.showToast(`Variant Report ${this.outsideData.analysisId} has been confirmed`, false);
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
      // tslint:disable-next-line:max-line-length
      this.patientApi.updateVariantReportStatus(this.patientSequenceNumber, this.outsideData.biopsySequenceNumber, this.outsideData.analysisId, false).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this.outsideData, x);
              this.showToast(`Variant Report ${this.outsideData.analysisId} has been rejected`, false);
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
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateAssignmentReportStatus(this.outsideData, x);
              this.showToast(`Assignment Report ${this.outsideData.analysisId} has been confirmed`, false);
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
      this.patientApi
        .updateVariants(this.patientSequenceNumber,
        this.matchData.biopsySequenceNumber,
        this.matchData.analysisId,
        this.transformer.getVariants(this.matchData.variantReport)
        )
        .flatMap(
        () => this.patientApi.updateVariantReportStatus(this.patientSequenceNumber, this.matchData.biopsySequenceNumber, this.matchData.analysisId, true)
        )
        .subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this, x);
              this.showToast(`Variant Report ${this.matchData.analysisId} has been confirmed`, false);
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
      this.patientApi.updateVariantReportStatus(this.patientSequenceNumber, this.matchData.biopsySequenceNumber, this.matchData.analysisId, false).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this.matchData, x);
              this.showToast(`Variant Report ${this.matchData.analysisId} has been rejected`, false);
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
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateAssignmentReportStatus(this.matchData, x);
              this.showToast(`Assignment Report ${this.matchData.analysisId} has been confirmed`, false);
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

  onVariantUpdated(reportData: VariantReportData, item: ConfirmableItem) {
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
            this.showToast(x.message, true);
            break;
          case 'success':
            this.transformer.updateVariantStatus(reportData, item, x);
            this.showToast(`Variant has been ${item.confirmed ? 'confirmed' : 'rejected'}`, false);
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

  hasReportData(data: any): boolean {
    return !!data && data.analysisId;
  }

  private transformConcordance(patient: any): string {
    if (!patient || !patient.concordance) {
      return 'UNKNOWN';
    }

    switch (patient.concordance) {
      case 'Y': return 'YES';
      case 'N': return 'NO';
      case 'U': return 'UNKNOWN';
      default: return patient.concordance;
    }
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

  private showToast(message: string, isError: boolean): void {
    if (this.toastrService && this.toastrService.toastr) {
      if (isError) {
        console.error(message);
        this.toastrService.toastr.error(message);
      } else {
        console.info(message);
        this.toastrService.toastr.info(message);
      }
    }
  }
}
