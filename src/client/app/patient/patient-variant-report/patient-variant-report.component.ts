import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService, ApiStatusUpdateError, ApiStatusUpdateSuccess } from '../patient-api.service';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ConfirmableItem } from '../../shared/check-box-with-confirm/check-box-with-confirm.component';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { DialogResults } from '../../shared/modal-dialogs/modal-dialog-results';
import { VariantReportData } from '../variant-report-data';
import { ToastrService } from '../../shared/error-handling/toastr.service';
import { ModalDialogConfirmationComponent } from '../../shared/modal-dialogs/modal-dialog-confirmation.component';
import { ModalDialogWithCommentsComponent } from '../../shared/modal-dialogs/modal-dialog-with-comments.component';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';

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
export class PatientVariantReportComponent implements OnInit, OnDestroy, VariantReportData {
  scrollTo: (id: string) => void;

  biopsySequenceNumber: string;
  patientSequenceNumber: string;
  molecularSequenceNumber: string;
  analysisId: string;
  patient: any;
  assays: any[] = [];
  variantReportFileReceivedDate: string;
  variantReportCreatedDate: string;
  variantReporterRejectedOrConfirmedDate: string;
  variantReportStatus: string;
  comments: string;
  statusUser: string;

  moiSummary: {
      totalaMOIs: number;
      totalMOIs: number;
      confirmedaMOIs: number;
      confirmedMOIs: number;
  };

  assignmentReport: any;
  assignmentHistory: any;
  parsed_vcf_genes: any;
  tvc_version: string;
  pool1: number;
  pool2: number;
  mapd: string;
  cellularity: any;
  showPools: boolean;
  tvcVersion: string;
  dnaBamFilePath: string;
  rnaBamFilePath: string;
  dnaBaiFilePath: string;
  rnaBaiFilePath: string;
  vcfFilePath: string;
  qcFile: string;

  isVariantReportEditable: boolean;
  isAssignmentReportEditable: boolean;
  isOutsideAssayWorkflow: boolean;

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
    private profile: UserProfileService) {
      this.scrollTo = scrollService.scrollToElement;
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);

    this.allowVariantReportEdit = this.profile.checkRoles(roles.variantReportEdit);
    this.allowAssignmentReportEdit = this.profile.checkRoles(roles.assignmentReportEdit);
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.patientSequenceNumber, file);
  }

  confirmVariantReport(): void {
    const action = () => {
      console.info('Confirming variant report: ' + this.analysisId);
      this.patientApi.updateVariantReport(this.patientSequenceNumber, this.biopsySequenceNumber, this.analysisId, true).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this, x);
              this.showToast(`Variant Report ${this.analysisId} has been confirmed`, false);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      false,
      'Variant Report Confirmation',
      `Are you sure you want to confirm Variant Report ${this.analysisId}?`,
      'Confirm',
      'Don\'t Confirm',
      action
    );
  }

  rejectVariantReport(): void {
    const action = () => {
      console.info('Rejecting variant report: ' + this.analysisId);
      this.patientApi.updateVariantReport(this.patientSequenceNumber, this.biopsySequenceNumber, this.analysisId, false).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateVariantReportStatus(this, x);
              this.showToast(`Variant Report ${this.analysisId} has been rejected`, false);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      false,
      'Variant Report Rejection',
      `Are you sure you want to reject Variant Report ${this.analysisId}?`,
      'Reject',
      'Don\'t Reject',
      action
    );
  }

  onVariantUpdated(item: ConfirmableItem) {
    console.info('Confirming variant: ' + JSON.stringify(item));

    this.patientApi.updateVariant(
      this.patientSequenceNumber,
      this.biopsySequenceNumber,
      this.analysisId,
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
            this.transformer.updateVariantStatus(item, x);
            this.showToast(`Variant has been ${item.confirmed ? 'confirmed' : 'rejected'}`, false);
            break;
        }
      }
    );
  }

  confirmAssignmentReport(): void {
    const action = () => {
      console.info('Confirming assignment report: ' + this.analysisId);
      this.patientApi.updateAssignmentReport(this.patientSequenceNumber, true).subscribe(
        (x: ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
          switch (x.kind) {
            case 'error':
              this.showToast(x.message, true);
              break;
            case 'success':
              this.transformer.updateAssignmentReportStatus(this, x);
              this.showToast(`Assignment Report ${this.analysisId} has been confirmed`, false);
              break;
          }
        }
      );
    };

    this.showConfirmation(
      false,
      'Assignment Report Confirmation',
      `Are you sure you want to confirm Assignment Report ${this.analysisId}?`,
      'Confirm',
      'Don\'t Confirm',
      action
    );
  }

  private showConfirmation(
    withComment: boolean,
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

    this.modalRef = withComment
      ? this.modalService.show(ModalDialogWithCommentsComponent)
      : this.modalService.show(ModalDialogConfirmationComponent);

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
    console.error(message);
    if (this.toastrService && this.toastrService.toastr) {
      if (isError) {
        this.toastrService.toastr.error(message);
      } else {
        this.toastrService.toastr.success(message);
      }
    }
  }
}
