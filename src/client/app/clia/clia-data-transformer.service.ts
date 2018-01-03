import { Injectable } from '@angular/core';

import { CliaReportData } from './clia-report-data';
import { ApiStatusUpdateSuccess, ApiSuccess } from './sample-control-api.service';

/*
*  Clia transformation service
*/
@Injectable()
export class CliaDataTransformer {
  updateRejectedCliaPCStatus(report: CliaReportData, updatedStatus: ApiStatusUpdateSuccess): void {
    report.report_status = updatedStatus.status;
    report.isReviewer = false;
  }

}
