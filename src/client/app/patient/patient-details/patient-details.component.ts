import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { PatientData } from './patient-details.module';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';
import { ModalDialogPathologyReportComponent } from '../../shared/modal-dialogs/modal-dialog-pathology-report.component';
import { FileUploadNotificationService } from '../file-upload/file-upload-notification.service';

const roles = {
  variantReportUpload: [
    'SYSTEM',
    'ADMIN',
    'CLIA_MOCHA',
    'CLIA_YALE',
    'CLIA_MGH',
    'CLIA_MDA',
    'CLIA_DARTMOUTH'
  ]
};

@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientDetailsComponent implements OnInit, AfterViewInit, PatientData {

  needToScroll?: boolean;
  psn: string = '';
  patient: any = {};
  summaryData: any = {};
  entityId?: string = '';
  section?: string = '';
  dzConfigDocuments: DropzoneConfigInterface;
  pendingVariantReport: any;
  pendingAssignmentReport: any;
  activeBiopsySequenceNumber: string;

  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  constructor(
    public transformer: ViewDataTransformer,
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private router: Router,
    private profile: UserProfileService,
    private modalService: BsModalService,
    private uploadNotifications: FileUploadNotificationService) {

    this.dzConfigDocuments = {
      // Change this to your upload POST address:
      url: 'https://httpbin.org/post',
      // maxFiles: 3,
      // parallelUploads: 3,
      timeout: 0,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.zip,.bam',
      addRemoveLinks: true
    };
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
    this.navigateToSection();
    this.uploadNotifications.onDone.subscribe(success => {
      console.info('Successfully uploaded VR files: ' + success);
      if (success) {
        this.patientApi.getPatientDetails(this.psn).subscribe(data => {
          let patient = this.transformer.transformPatient(data);
          patient.section = this.section;
          patient.entityId = this.entityId;

          let updated = {
            psn: this.psn,
            patient: patient,
            summaryData: {},
            section: this.section,
            entityId: this.entityId,
            pendingVariantReport: patient.pendingVariantReport,
            pendingAssignmentReport: patient.pendingAssignmentReport
          };

          Object.assign(this, updated);
        });
      }
    });
  }

  ngAfterViewInit() {
    if (this.needToScroll && !!this.entityId) {
      setTimeout(() => {
        const element = document.getElementById(this.entityId);
        if (element) {
          console.info(`scrolling to ID ${this.entityId}`);
          element.scrollIntoView();
        }
      }, 226);
    }
  }

  getVrPendingDaysColor(variantReport: any): string {
    if (variantReport.daysPending < 7) {
      return 'bg-lime-light';
    } else if (variantReport.daysPending < 14) {
      return 'bg-warning-light';
    } else if (variantReport.daysPending >= 14) {
      return 'bg-danger-light';
    } else {
      return 'bg-info-light';
    }
  }

  getAPendingHoursColor(assignmentReport: any): string {
    if (assignmentReport.hoursPending < 8) {
      return 'bg-lime-light';
    } else if (assignmentReport.hoursPending < 14) {
      return 'bg-warning-light';
    } else if (assignmentReport.hoursPending >= 14) {
      return 'bg-danger-light';
    } else {
      return 'bg-info-light';
    }
  }

  getBiopsyTitlePrefix(biopsy: any): string {
    if (!biopsy.isOutsideAssayWorkflow)
      return null;
    return biopsy.isOutsideAssay ? 'Treatment' : 'Confirmation';
  }

  getVariantReportLink(report: any): string {
    if (report.patientType === 'OUTSIDE_ASSAY') {
      return `/patients/${this.patient.patientSequenceNumber}/variant_reports_oa/${report.analysisId}`;
    } else {
      return `/patients/${this.patient.patientSequenceNumber}/biopsies/${report.biopsySequenceNumber}/variant_reports/${report.analysisId}`;
    }
  }

  getVariantReportQueryParams(report: any): any {
    if (report.patientType === 'OUTSIDE_ASSAY') {
      return { isOutsideAssay: report.isOutsideAssay };
    } else {
      return null;
    }
  }

  openPathologyReport(biopsySequenceNumber: string, report: any) {
    this.dialogSubscription = this.modalService.onHidden.subscribe(() => {
      this.unsubscribe();
    });

    this.modalRef = this.modalService.show(ModalDialogPathologyReportComponent);

    this.modalRef.content.biopsySequenceNumber = report.biopsySequenceNumber;
    this.modalRef.content.receivedDate = report.receivedDate;
    this.modalRef.content.signedOutDate = report.signedOutDate;
    this.modalRef.content.message = atob(report.pathologyReport);
  }

  isUploadEnabled(biopsy: any, sendout: any): boolean {
    const hasPermissions = this.profile.checkRoles(roles.variantReportUpload);

    if (!hasPermissions)
      return false;

    if (this.patient.currentPatientStatus === 'OFF_STUDY')
      return false;

    if (biopsy.isOutsideAssay)
      return false;

    for (let nucleicAcidSendout of biopsy.nucleicAcidSendouts || []) {
      for (let analysis of nucleicAcidSendout.analyses || []) {
        if (analysis.variantReport && analysis.variantReport.variantReportStatus === 'CONFIRMED') {
          return false;
        }
      }
    }

    if (this.patient.biopsies && this.patient.biopsies.length > 1) {
      const latestBiopsy = this.patient.biopsies[0];
      if (biopsy !== latestBiopsy)
        return false;
    }

    if (biopsy.nucleicAcidSendouts && biopsy.nucleicAcidSendouts.length > 1) {
      const latestSendout = biopsy.nucleicAcidSendouts[biopsy.nucleicAcidSendouts.length - 1];
      if (latestSendout !== sendout)
        return false;
    }

    return true;
  }

  private unsubscribe() {
    if (!this.dialogSubscription) {
      return;
    }
    this.dialogSubscription.unsubscribe();
    this.dialogSubscription = null;
  }

  private navigateToSection(): void {
    if (!this.section) {
      return;
    }

    if (this.section === 'biopsies') {
      this.activeBiopsySequenceNumber = this.entityId;
    } else if (this.section === 'msn') {
      this.activeBiopsySequenceNumber = this.findBiopsyByMsn(this.entityId);
      this.needToScroll = !!this.activeBiopsySequenceNumber;
    }
  }

  private findBiopsyByMsn(msn: string): string {
    for (let biopsy of this.patient.biopsies || []) {
      for (let sendout of biopsy.nucleicAcidSendouts || []) {
        if (sendout.molecularSequenceNumber === msn) {
          return biopsy.biopsySequenceNumber;
        }
      }
    }

    return null;
  }
}
