import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';
import { VariantReportComparisonData } from './variant-report-comparison-data';

export interface ApiError {
  kind: 'error';
  code?: number;
  message: string;
}

export interface ApiSuccess {
  kind: 'success';
  status: string;
  data: any;
}

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
  constructor(http: AuthHttp) {
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

  downloadPatientFile(psn: string, url: string): Observable<ApiSuccess | ApiError> {
    return this.http.post(Config.API.PATIENT + '/patients/' + psn + '/download_url', { s3_url: url })
      .map((res: Response) => {
        return { kind: 'success', data: res.json() } as ApiSuccess;
      })
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json ? err.json() : err;
          message = errResp.error_message ? errResp.error_message : errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiError);
      });
  }

  updateVariantReportStatus(psn: string, bsn: string, analysisId: string, confirmed: boolean): Observable<ApiStatusUpdateSuccess | ApiStatusUpdateError> {
    const patch = {
      'status': confirmed ? 'CONFIRMED' : 'REJECTED'
    };

    return this.http.patch(`${Config.API.MESSAGE}/message/clia/patient/${psn}/biopsy/${bsn}/variant_reports/${analysisId}`, patch)
      .map((res: Response) => {
        const data = res.json();
        return { kind: 'success', commenter: data.commenter, status: data.status, dateTime: data.dateTime } as ApiStatusUpdateSuccess;
      })
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json();
          message = errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiStatusUpdateError);
      });
  }

  updateVariants(psn: string, bsn: string, analysisId: string, variants: any): Observable<ApiStatusUpdateSuccess | ApiStatusUpdateError> {
    return this.http.patch(
      // tslint:disable-next-line:max-line-length
      `${Config.API.MESSAGE}/message/clia/patient/${psn}/biopsy/${bsn}/variant_reports/${analysisId}/variants`,
      variants
    )
      .map((res: Response) => {
        const data = res.json();
        return { kind: 'success', commenter: data.commenter, status: data.status, dateTime: data.dateTime } as ApiStatusUpdateSuccess;
      })
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json();
          message = errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiStatusUpdateError);
      });
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
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json();
          message = errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiStatusUpdateError);
      });
  }

  updateAssignmentReport(psn: string, confirmed: boolean): Observable<ApiStatusUpdateSuccess | ApiStatusUpdateError> {
    const patch = {
      'status': confirmed ? 'CONFIRMED' : 'REJECTED'
    };

    return this.http.patch(`${Config.API.MESSAGE}/message/ecog/patient/${psn}/assignment`, patch)
      .map((res: Response) => {
        const data = res.json();
        return { kind: 'success', commenter: data.commenter, status: data.status, dateTime: data.dateTime } as ApiStatusUpdateSuccess;
      })
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json();
          message = errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiStatusUpdateError);
      });
  }

  getPendingAssignmentReports(): Observable<any[]> {
    return this.http.get(this.url('/patients/dashboard/assignment_reports'))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getPendingVariantReports(): Observable<any[]> {
    return this.http.get(this.url('/patients/dashboard/variant_reports'))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getPatientsAwaiting(): Observable<any[]> {
    return this.http.get(this.url('/patients/dashboard/awaiting'))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getOverviewPatients(): Observable<any> {
    return this.http.get(this.url('/patients/dashboard/overview'))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getOverviewBt(): Observable<any> {
    return this.http.get(this.url('/patients/tracking/dashboard/overview'))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getDocumentPresignedUrls(psn: string, fileName: string): Observable<ApiSuccess | ApiError> {
    return this.http.post(this.url(`/patients/${psn}/upload_url`), { 'file_name': fileName })
      .map((res: Response) => {
        return { kind: 'success', data: res.json() } as ApiSuccess;
      })
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json ? err.json() : err;
          message = errResp.error_message ? errResp.error_message : errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiError);
      });
  }

  notifyAfterUpload(psn: string, fileName: string): Observable<ApiSuccess | ApiError> {
    const profileData = localStorage.getItem('profile');
    const profile = profileData?JSON.parse(profileData):{user:'System'};
    const body = { file_name: fileName, user: profile.name };
    return this.http.post(`${this.baseApiUrl}/patients/${psn}/documents`, body)
      .map((res: Response) => {
        return { kind: 'success', data: res.json() } as ApiSuccess;
      })
      .catch((err: any) => {
        let message: string;
        if (err instanceof Response) {
          const errResp = err.json ? err.json() : err;
          message = errResp.error_message ? errResp.error_message : errResp.message;
        } else if (err instanceof Error) {
          const error = err as Error;
          message = error.message;
        } else {
          message = (typeof err === 'string') ? err : err.toString();
        }
        return Observable.of({ kind: 'error', message: message } as ApiError);
      });
  }
}
