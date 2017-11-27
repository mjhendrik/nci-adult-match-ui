import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { PatientData } from './patient-details.module';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';

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
  enableFileUpload = false;
  dzConfigDocuments: DropzoneConfigInterface;
  pendingVariantReport: any;
  pendingAssignmentReport: any;
  activeBiopsySequenceNumber: string;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private transformer: ViewDataTransformer,
    private router: Router,
    private profile: UserProfileService) {

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

    const roles = this.profile.roles().filter(x => {
      return x.indexOf('CLIA_') !== -1 || x.indexOf('SYSTEM') !== -1 || x.indexOf('ADMIN') !== -1;
    });

    if (roles.indexOf('ADMIN') !== -1
      || roles.indexOf('SYSTEM') !== -1
      || roles.indexOf('CLIA_') !== -1) {
      this.enableFileUpload = true;
    }

    this.navigateToSection();
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

  getVariantReportLink(report: any): string {
    if (report.isOutsideAssayWorkflow) {
      return `/patients/${this.patient.patientSequenceNumber}/variant_reports_oa/${report.analysisId}`;
    } else {
      return `/patients/${this.patient.patientSequenceNumber}/biopsies/${report.biopsySequenceNumber}/variant_reports/${report.analysisId}`;
    }
  }

  getVariantReportQueryParams(report: any): any {
    if (report.isOutsideAssayWorkflow) {
      return { isOutsideAssay: report.isOutsideAssay };
    } else {
      return null;
    }
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
