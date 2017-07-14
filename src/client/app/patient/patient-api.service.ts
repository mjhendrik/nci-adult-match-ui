import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

// import 'rxjs/add/operator/do';  // for debugging

import { Config } from '../shared/config/env.config';

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
  constructor(private http: AuthHttp) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getPatientList(page: number, size: number, sortOrder: string, sortBy: string, filter: string): Observable<any[]> {
    return this.http.get(this.url(`/patients?projection=patientSequenceNumber,currentPatientStatus,currentStepNumber,diseases.shortName,
registrationDate,patientAssignments.treatmentArm.name,patientAssignments.treatmentArm.version&page=` + page + '&size=' + size + '&sort='
      + sortBy + ':' + sortOrder + '&projfilter=' + filter, 'assets/mock-data/patient-list.json'))
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientCount(filter: string): Observable<number> {
    return this.http.get(Config.API.PATIENT + `/patients/count?projection=patientSequenceNumber,currentPatientStatus,currentStepNumber,
diseases.shortName,registrationDate,patientAssignments.treatmentArm.name,patientAssignments.treatmentArm.version&projfilter=` + filter)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientTotal(): Observable<number> {
    return this.http.get(Config.API.PATIENT + '/patients/count?projection=patientSequenceNumber')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientDetails(psn: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn, 'assets/mock-data/patient.1067.json'))
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientVariantReport(): Observable<any> {
    return this.http.get('assets/mock-data/patient-variant-report.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientVariantReportQc(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/quality_control_report',
      'assets/mock-data/qcvr-MSN3053_v1_e3d4df31-9785-40ff-8001-985297a3240e.json'))
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientVariantReportOcp(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/oncomine_control_panel',
      'assets/mock-data/oncomine-control-panel.json'))
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientCopyNumberReport(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/copy_number_report',
      'assets/mock-data/copy-number-report.json'))
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPatientVariantReportFileInfo(psn: string, analysisId: string): Observable<any> {
    return this.http.get(this.url('/patients/' + psn + '/variant_reports/' + analysisId + '/file_info',
      'assets/mock-data/variant-report-file-info.json'))
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
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
}
