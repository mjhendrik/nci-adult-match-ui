import { Injectable } from '@angular/core';

import { CliaReportPcData, CliaReportPccData } from './clia-report-data';
import { ApiStatusUpdateSuccess, ApiSuccess } from './sample-control-api.service';

/*
*  Clia transformation service
*/
@Injectable()
export class CliaDataTransformer {
  updateRejectedCliaPCStatus(report: CliaReportPcData, updatedStatus: ApiStatusUpdateSuccess): void {
    report.report_status = updatedStatus.status;
    report.isReviewer = false;
  }

  updateRejectedCliaPCCStatus(report: CliaReportPccData, updatedStatus: ApiStatusUpdateSuccess): void {
    report.report_status = updatedStatus.status;
    report.isReviewer = false;
  }

  updateConfirmedCliaPCCStatus(report: CliaReportPccData, updatedStatus: ApiStatusUpdateSuccess): void {
    report.report_status = updatedStatus.status;
    report.isReviewer = true;
  }

}
