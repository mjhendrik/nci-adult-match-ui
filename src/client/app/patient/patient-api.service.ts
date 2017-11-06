import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { DownloadService } from '../shared/utils/download.service';
import { ApiService } from '../shared/api/api.service';
import { VariantReportComparisonData } from './variant-report-comparison-data';

export interface ApiStatusUpdateError {
  kind: 'error';
  code?: number;
  message: string;
}

export interface ApiStatusUpdateSuccess {
  kind: 'success';
  status: string;
  comments: string;
  commenter: string;
  dateTime: string;
}

@Injectable()
export class PatientApiService extends ApiService {
  protected get baseApiUrl(): string { return Config.API.PATIENT; }

  /**
   * Creates a new PatientApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(http: AuthHttp, private download: DownloadService) {
    super(http);
  }

  getPatientList(page: number,
    size: number,
    sortOrder: string,
    sortBy: string,
    filter: string,
    isOutsideAssayWorkflow?: boolean): Observable<any[]> {
    return this.http.get(this.url('/patients?view=ui_list&page='
      + page + '&size=' + size + '&sort=' + sortBy + ':' + sortOrder
      + (filter ? '&projfilter=' + filter : '')
      + (isOutsideAssayWorkflow !== null ? '&is-oa=' + isOutsideAssayWorkflow : ''),
      'assets/mock-data/patient-list.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientCount(filter: string, isOutsideAssayWorkflow?: boolean): Observable<number> {
    return this.http.get(Config.API.PATIENT
      // tslint:disable-next-line:max-line-length
      + '/patients/count?projection=patientSequenceNumber,currentPatientStatus,currentStepNumber,diseases.shortName,registrationDate,patientAssignments.treatmentArm.name,patientAssignments.treatmentArm.version'
      + (filter ? '&projfilter=' + filter : '')
      + (isOutsideAssayWorkflow !== null ? '&is-oa=' + isOutsideAssayWorkflow : ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientTotal(isOutsideAssayWorkflow?: boolean): Observable<number> {
    return this.http.get(Config.API.PATIENT + '/patients/count?projection=patientSequenceNumber'
      + (isOutsideAssayWorkflow !== null ? '&is-oa=' + isOutsideAssayWorkflow : ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientDetails(psn: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn, 'assets/mock-data/patient.1067.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getOutsideAssayComparisonVariantReport(psn: string): Observable<VariantReportComparisonData> {
    return this.http.get(this.url('/patients/' + psn + '/outside_assay/comparison_variant_report',
      'assets/mock-data/patient.OA5.comparison-variant-report.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientVariantReportQc(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/quality_control_report',
      'assets/mock-data/qcvr-MSN3053_v1_e3d4df31-9785-40ff-8001-985297a3240e.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientVariantReportOcp(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/oncomine_control_panel',
      'assets/mock-data/oncomine-control-panel.json'))
      .map(this.extractData)
      .catch(err => Observable.of({ hasError: true, error: err }));
  }

  getPatientCopyNumberReport(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/copy_number_report',
      ''))
      .map(this.extractData)
      .catch(err => Observable.of({ hasError: true, error: err, parsed_vcf_genes: {} }));
  }

  getPatientVariantReportFileInfo(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/file_info',
      'assets/mock-data/variant-report-file-info.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadPatientFile(psn: string, url: string): void {
    this.http.post(Config.API.PATIENT + '/patients/' + psn + '/download_url', { s3_url: url })
      .map((res: Response) => res)
      .catch(this.handleError)
      .subscribe((resp: Response) => {
        const data = resp.json();
        if (data && data.download_url) {
          this.download.downloadFile(data.download_url);
        }
      });
  }

  getUrl(fileName: string, psn: string): Observable<string> {
    return this.http.post(Config.API.MESSAGE + '/patients/' + psn + '/documents/presign_url', null)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateVariantReport(psn: string, bsn: string, analysisId: string, confirmed: boolean): Observable<ApiStatusUpdateSuccess | ApiStatusUpdateError> {
    const patch = {
      'status': confirmed ? 'CONFIRMED' : 'REJECTED'
    };

    return this.http.patch(`${Config.API.MESSAGE}/message/clia/patient/${psn}/biopsy/${bsn}/variant_reports/${analysisId}`, patch)
      .map((res: Response) => {
        const data = res.json();
        return { kind: 'success', commenter: data.commenter, status: data.status, dateTime: data.dateTime } as ApiStatusUpdateSuccess;
      })
      .catch((err: string) => Observable.of({ kind: 'error', message: err } as ApiStatusUpdateError));
  }

  updateVariant(
    psn: string,
    bsn: string,
    analysisId: string,
    variantId: string,
    confirmed: boolean,
    comment: string): Observable<ApiStatusUpdateSuccess | ApiStatusUpdateError> {

    const patch = {
      'status': confirmed ? 'CONFIRMED' : 'REJECTED',
      'comment': comment
    };

    return this.http.patch(`${Config.API.MESSAGE}/message/clia/patient/${psn}/biopsy/${bsn}/variant_reports/${analysisId}/variants/${variantId}`, patch)
      .map((res: Response) => {
        const data = res.json();
        return { kind: 'success', commenter: data.commenter, status: data.status, dateTime: data.dateTime, comments: data.comment } as ApiStatusUpdateSuccess;
      })
      .catch((err: string) => Observable.of({ kind: 'error', message: err } as ApiStatusUpdateError));
  }

  updateAssignmentReport(psn: string, confirmed: boolean): Observable<ApiStatusUpdateSuccess | ApiStatusUpdateError> {
    const patch = {
      'status': confirmed ? 'CONFIRMED' : 'REJECTED'
    };

    return this.http.patch(`${Config.API.MESSAGE}/ecog/patient/${psn}/assignment`, patch)
      .map((res: Response) => {
        const data = res.json();
        return { kind: 'success', commenter: data.commenter, status: data.status, dateTime: data.dateTime } as ApiStatusUpdateSuccess;
      })
      .catch((err: string) => Observable.of({ kind: 'error', message: err } as ApiStatusUpdateError));
  }

}
