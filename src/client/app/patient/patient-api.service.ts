import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { VariantReportComparisonData } from './patient-variant-report-oa/variant-report-comparison-data';
import { DownloadService } from '../shared/utils/download.service';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PatientApiService {

  /**
   * Creates a new PatientApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(private http: AuthHttp,
    private download: DownloadService) { }

  getPatientList(page: number,
    size: number,
    sortOrder: string,
    sortBy: string,
    filter: string,
    isOutsideAssay?: boolean): Observable<any[]> {
    return this.http.get(this.url('/patients?view=ui_list&page='
      + page + '&size=' + size + '&sort=' + sortBy + ':' + sortOrder
      + (filter ? '&projfilter=' + filter : '')
      + (isOutsideAssay !== null ? '&is-oa=' + isOutsideAssay : ''),
      'assets/mock-data/patient-list.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientCount(filter: string, isOutsideAssay?: boolean): Observable<number> {
    return this.http.get(Config.API.PATIENT
      + '/patients/count?projection=patientSequenceNumber,currentPatientStatus,currentStepNumber,diseases.shortName,registrationDate,patientAssignments.treatmentArm.name,patientAssignments.treatmentArm.version'
      + (filter ? '&projfilter=' + filter : '')
      + (isOutsideAssay !== null ? '&is-oa=' + isOutsideAssay : ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatientTotal(): Observable<number> {
    return this.http.get(Config.API.PATIENT + '/patients/count?projection=patientSequenceNumber')
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
      'assets/mock-data/copy-number-report.json'))
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

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private url(endpoint: string, defaultUrl: string): string {
    return Config.API.PATIENT && Config.API.PATIENT !== '[TBD]' ? Config.API.PATIENT + endpoint : defaultUrl;
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return (typeof body !== 'undefined') ? body : null;
  }
}
