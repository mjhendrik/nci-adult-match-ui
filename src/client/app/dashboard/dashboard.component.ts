import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  currentPage: number;
  numberOfRecords: number;

  /**
   * Creates an instance of the DashboardComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    this.currentPage = 0;
    this.numberOfRecords = 25;
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
      names => this.names = names,
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

  disablePrevious(): string {
    return this.currentPage === 0 ? 'disabled' : '';
  }

  disableNext(): string {
    return this.currentPage === this.totalPages() ? "disabled" : "";
  }

  totalPages(): number {
    return Math.ceil(this.tableData.tissue_variant_reports.length / this.numberOfRecords) - 1;
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages())
      this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 0)
      this.currentPage--;
  }

  pageClicked(p: number): void {
    console.log(p);
  }

  rangeSize: number = 5;
  ps: number[] = [];
  start: number;
  paginationRange(): number[] {

    this.ps = [];

    this.start = this.currentPage;

    if (this.start > this.totalPages() - this.rangeSize) {

      this.start = this.totalPages() - this.rangeSize + 1;

    }

    for (var i = this.start; i < this.start + this.rangeSize; i++) {
      if (i >= 0)
        this.ps.push(i);
    }

    return this.ps;
  }

  lastPage(): void {
    console.log(this.totalPages());
    this.currentPage = this.totalPages();
    console.log(this.currentPage);
  }

  firstPage(): void {
    this.currentPage = 0;
    console.log(this.currentPage);
  }

  tableData: any = {
    "tissue_variant_reports": [
      {
        "patient_id": "PT_AM04_TsReceived1",
        "molecular_id": "PT_AM04_TsReceived1_MOI1",
        "analysis_id": "PT_AM04_TsReceived1_ANI1",
        "surgical_event_id": "PT_AM04_TsReceived1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T20:17:12.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC12_VRUploaded1",
        "molecular_id": "PT_VC12_VRUploaded1_MOI1",
        "analysis_id": "PT_VC12_VRUploaded1_ANI1",
        "surgical_event_id": "PT_VC12_VRUploaded1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:40:15.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "UI_PA08_MochaTsVrUploaded",
        "molecular_id": "UI_PA08_MochaTsVrUploaded_MOI1",
        "analysis_id": "UI_PA08_MochaTsVrUploaded_ANI1",
        "surgical_event_id": "UI_PA08_MochaTsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-24T19:50:47.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MochaTsVrUploaded2",
        "molecular_id": "PT_AU05_MochaTsVrUploaded2_MOI1",
        "analysis_id": "PT_AU05_MochaTsVrUploaded2_ANI1",
        "surgical_event_id": "PT_AU05_MochaTsVrUploaded2_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T18:34:32.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MdaTsVrUploaded0",
        "molecular_id": "PT_AU05_MdaTsVrUploaded0_MOI1",
        "analysis_id": "PT_AU05_MdaTsVrUploaded0_ANI1",
        "surgical_event_id": "PT_AU05_MdaTsVrUploaded0_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T18:32:39.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AM02_VrReceived",
        "molecular_id": "PT_AM02_VrReceived_MOI1",
        "analysis_id": "PT_AM02_VrReceived_ANI1",
        "surgical_event_id": "PT_AM02_VrReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-12-23T17:17:25.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC05a_VRUploaded",
        "molecular_id": "PT_VC05a_VRUploaded_MOI1",
        "analysis_id": "PT_VC05a_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC05a_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-17T20:54:00.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC05g_TsVrUploaded",
        "molecular_id": "PT_SC05g_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC05g_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC05g_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:39:11.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC10_VRUploadedMOIExpired",
        "molecular_id": "PT_VC10_VRUploadedMOIExpired_MOI2",
        "analysis_id": "PT_VC10_VRUploadedMOIExpired_ANI2",
        "surgical_event_id": "PT_VC10_VRUploadedMOIExpired_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:33:02.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC02_VRUploaded",
        "molecular_id": "PT_VC02_VRUploaded_MOI1",
        "analysis_id": "PT_VC02_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC02_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:36:28.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC05c_TsVrUploaded",
        "molecular_id": "PT_SC05c_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC05c_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC05c_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:33:01.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC05a_TsThenAssayReceived",
        "molecular_id": "PT_SC05a_TsThenAssayReceived_MOI1",
        "analysis_id": "PT_SC05a_TsThenAssayReceived_ANI1",
        "surgical_event_id": "PT_SC05a_TsThenAssayReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:32:00.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VU09_VariantReportUploaded",
        "molecular_id": "PT_VU09_VariantReportUploaded_MOI1",
        "analysis_id": "PT_VU09_VariantReportUploaded_ANI1",
        "surgical_event_id": "PT_VU09_VariantReportUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:25:15.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MdaTsVrUploaded3",
        "molecular_id": "PT_AU05_MdaTsVrUploaded3_MOI1",
        "analysis_id": "PT_AU05_MdaTsVrUploaded3_ANI1",
        "surgical_event_id": "PT_AU05_MdaTsVrUploaded3_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T19:42:33.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_CR01_PathAssayDoneVRUploadedToConfirm",
        "molecular_id": "PT_CR01_PathAssayDoneVRUploadedToConfirm_MOI1",
        "analysis_id": "PT_CR01_PathAssayDoneVRUploadedToConfirm_ANI1",
        "surgical_event_id": "PT_CR01_PathAssayDoneVRUploadedToConfirm_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-20T16:09:27.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC15_VrReceived",
        "molecular_id": "PT_VC15_VrReceived_MOI1",
        "analysis_id": "PT_VC15_VrReceived_ANI1",
        "surgical_event_id": "PT_VC15_VrReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:44:03.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AM01_TsVrReceived1",
        "molecular_id": "PT_AM01_TsVrReceived1_MOI1",
        "analysis_id": "PT_AM01_TsVrReceived1_ANI1",
        "surgical_event_id": "PT_AM01_TsVrReceived1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-14T20:40:27.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC14_BdVRUploadedTsVRUploadedOtherReady",
        "molecular_id": "PT_VC14_BdVRUploadedTsVRUploadedOtherReady_MOI1",
        "analysis_id": "PT_VC14_BdVRUploadedTsVRUploadedOtherReady_ANI1",
        "surgical_event_id": "PT_VC14_BdVRUploadedTsVRUploadedOtherReady_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-18T07:10:28.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC08_VRUploaded",
        "molecular_id": "PT_VC08_VRUploaded_MOI1",
        "analysis_id": "PT_VC08_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC08_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:38:46.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_RA07_VrAndAssayReady",
        "molecular_id": "PT_RA07_VrAndAssayReady_MOI1",
        "analysis_id": "PT_RA07_VrAndAssayReady_ANI1",
        "surgical_event_id": "PT_RA07_VrAndAssayReady_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-12-23T17:16:06.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC01c_TsVrUploadedStep2",
        "molecular_id": "PT_SC01c_TsVrUploadedStep2_MOI2",
        "analysis_id": "PT_SC01c_TsVrUploadedStep2_ANI2",
        "surgical_event_id": "PT_SC01c_TsVrUploadedStep2_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T00:23:59.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC13_VRUploaded1",
        "molecular_id": "PT_VC13_VRUploaded1_MOI1",
        "analysis_id": "PT_VC13_VRUploaded1_ANI1",
        "surgical_event_id": "PT_VC13_VRUploaded1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:41:12.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC04f_TsVrUploaded",
        "molecular_id": "PT_SC04f_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC04f_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC04f_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:13:12.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_CR03_VRUploadedPathConfirmed",
        "molecular_id": "PT_CR03_VRUploadedPathConfirmed_MOI1",
        "analysis_id": "PT_CR03_VRUploadedPathConfirmed_ANI1",
        "surgical_event_id": "PT_CR03_VRUploadedPathConfirmed_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T18:01:40.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "ION_AQ41_TsVrUploaded",
        "molecular_id": "ION_AQ41_TsVrUploaded_MOI1",
        "analysis_id": "ION_AQ41_TsVrUploaded_ANI1",
        "surgical_event_id": "ION_AQ41_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T15:59:45.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC01_VRUploaded",
        "molecular_id": "PT_VC01_VRUploaded_MOI1",
        "analysis_id": "PT_VC01_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC01_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:35:59.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC00_CnvVrReceived",
        "molecular_id": "PT_VC00_CnvVrReceived_MOI1",
        "analysis_id": "PT_VC00_CnvVrReceived_ANI1",
        "surgical_event_id": "PT_VC00_CnvVrReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:46:26.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MochaTsVrUploaded3",
        "molecular_id": "PT_AU05_MochaTsVrUploaded3_MOI1",
        "analysis_id": "PT_AU05_MochaTsVrUploaded3_ANI1",
        "surgical_event_id": "PT_AU05_MochaTsVrUploaded3_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T19:42:51.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AM04_TsReceived2",
        "molecular_id": "PT_AM04_TsReceived2_MOI1",
        "analysis_id": "PT_AM04_TsReceived2_ANI1",
        "surgical_event_id": "PT_AM04_TsReceived2_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T20:17:49.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC11_VRUploaded",
        "molecular_id": "PT_VC11_VRUploaded_MOI1",
        "analysis_id": "PT_VC11_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC11_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:39:45.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC03_VRUploadedAfterRejected",
        "molecular_id": "PT_VC03_VRUploadedAfterRejected_MOI1",
        "analysis_id": "PT_VC03_VRUploadedAfterRejected_ANI2",
        "surgical_event_id": "PT_VC03_VRUploadedAfterRejected_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:37:50.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC04b_TsVrUploadedNoSd",
        "molecular_id": "PT_SC04b_TsVrUploadedNoSd_MOI1",
        "analysis_id": "PT_SC04b_TsVrUploadedNoSd_ANI1",
        "surgical_event_id": "PT_SC04b_TsVrUploadedNoSd_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:08:09.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC15_AssayReceivedVrReceivedToReject",
        "molecular_id": "PT_VC15_AssayReceivedVrReceivedToReject_MOI1",
        "analysis_id": "PT_VC15_AssayReceivedVrReceivedToReject_ANI1",
        "surgical_event_id": "PT_VC15_AssayReceivedVrReceivedToReject_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:45:17.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_CR04_VRUploadedAssayReceived",
        "molecular_id": "PT_CR04_VRUploadedAssayReceived_MOI1",
        "analysis_id": "PT_CR04_VRUploadedAssayReceived_ANI1",
        "surgical_event_id": "PT_CR04_VRUploadedAssayReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-20T16:11:07.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC15_AssayReceivedVrReceivedToConfirm",
        "molecular_id": "PT_VC15_AssayReceivedVrReceivedToConfirm_MOI1",
        "analysis_id": "PT_VC15_AssayReceivedVrReceivedToConfirm_ANI1",
        "surgical_event_id": "PT_VC15_AssayReceivedVrReceivedToConfirm_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:44:39.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "UI_PA08_MdaTsVrUploaded",
        "molecular_id": "UI_PA08_MdaTsVrUploaded_MOI1",
        "analysis_id": "UI_PA08_MdaTsVrUploaded_ANI1",
        "surgical_event_id": "UI_PA08_MdaTsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-24T19:50:29.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC05a_TsVrUploaded",
        "molecular_id": "PT_SC05a_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC05a_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC05a_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:31:46.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SR14_TsVrUploaded",
        "molecular_id": "PT_SR14_TsVrUploaded_MOI1",
        "analysis_id": "PT_SR14_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SR14_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:12:51.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_OS01_TsVrReceived",
        "molecular_id": "PT_OS01_TsVrReceived_MOI2",
        "analysis_id": "PT_OS01_TsVrReceived_ANI2",
        "surgical_event_id": "PT_OS01_TsVrReceived_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T19:57:26.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC02c_TsVrUploaded",
        "molecular_id": "PT_SC02c_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC02c_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC02c_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:05:38.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_GVF_TsVrUploaded",
        "molecular_id": "PT_GVF_TsVrUploaded_MOI1",
        "analysis_id": "PT_GVF_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_GVF_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T00:19:51.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SS27_VariantReportUploaded",
        "molecular_id": "PT_SS27_VariantReportUploaded_MOI1",
        "analysis_id": "PT_SS27_VariantReportUploaded_ANI1",
        "surgical_event_id": "PT_SS27_VariantReportUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:25:45.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC04e_TsVrUploaded",
        "molecular_id": "PT_SC04e_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC04e_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC04e_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:12:51.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "ION_AQ43_TsVrUploaded",
        "molecular_id": "ION_AQ43_TsVrUploaded_MOI1",
        "analysis_id": "ION_AQ43_TsVrUploaded_ANI1",
        "surgical_event_id": "ION_AQ43_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:00:42.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC10_VRUploadedSEIExpired",
        "molecular_id": "PT_VC10_VRUploadedSEIExpired_MOI2",
        "analysis_id": "PT_VC10_VRUploadedSEIExpired_ANI2",
        "surgical_event_id": "PT_VC10_VRUploadedSEIExpired_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:32:07.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_RA02_TsVrReceived",
        "molecular_id": "PT_RA02_TsVrReceived_MOI2",
        "analysis_id": "PT_RA02_TsVrReceived_ANI2",
        "surgical_event_id": "PT_RA02_TsVrReceived_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T20:44:38.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_CR07_RejectVariantReport",
        "molecular_id": "PT_CR07_RejectVariantReport_MOI1",
        "analysis_id": "PT_CR07_RejectVariantReport_ANI1",
        "surgical_event_id": "PT_CR07_RejectVariantReport_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T18:04:28.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AS12_VrReceived",
        "molecular_id": "PT_AS12_VrReceived_MOI1",
        "analysis_id": "PT_AS12_VrReceived_ANI1",
        "surgical_event_id": "PT_AS12_VrReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:23:32.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_CR05_SpecimenShippedTwice",
        "molecular_id": "PT_CR05_SpecimenShippedTwice_MOI2",
        "analysis_id": "PT_CR05_SpecimenShippedTwice_ANI2",
        "surgical_event_id": "PT_CR05_SpecimenShippedTwice_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T18:03:25.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_CR06_RejectOneVariant",
        "molecular_id": "PT_CR06_RejectOneVariant_MOI1",
        "analysis_id": "PT_CR06_RejectOneVariant_ANI1",
        "surgical_event_id": "PT_CR06_RejectOneVariant_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T18:03:55.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC02f_TsVrUploaded",
        "molecular_id": "PT_SC02f_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC02f_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC02f_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:06:47.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SS26_TsVRReceived",
        "molecular_id": "PT_SS26_TsVRReceived_MOI1",
        "analysis_id": "PT_SS26_TsVRReceived_ANI1",
        "surgical_event_id": "PT_SS26_TsVRReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:24:20.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MochaTsVrUploaded1",
        "molecular_id": "PT_AU05_MochaTsVrUploaded1_MOI1",
        "analysis_id": "PT_AU05_MochaTsVrUploaded1_ANI1",
        "surgical_event_id": "PT_AU05_MochaTsVrUploaded1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T18:33:58.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VU10_VariantReportUploaded",
        "molecular_id": "PT_VU10_VariantReportUploaded_MOI1",
        "analysis_id": "PT_VU10_VariantReportUploaded_ANI1",
        "surgical_event_id": "PT_VU10_VariantReportUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:25:45.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC15_OneAssayAndVrReceived",
        "molecular_id": "PT_VC15_OneAssayAndVrReceived_MOI1",
        "analysis_id": "PT_VC15_OneAssayAndVrReceived_ANI1",
        "surgical_event_id": "PT_VC15_OneAssayAndVrReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:45:49.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC09_VRUploaded",
        "molecular_id": "PT_VC09_VRUploaded_MOI1",
        "analysis_id": "PT_VC09_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC09_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:39:15.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "ION_SF03_TsVrUploaded",
        "molecular_id": "ION_SF03_TsVrUploaded_MOI1",
        "analysis_id": "ION_SF03_TsVrUploaded_ANI1",
        "surgical_event_id": "ION_SF03_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:01:11.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC02d_VrAssayReady",
        "molecular_id": "PT_SC02d_VrAssayReady_MOI1",
        "analysis_id": "PT_SC02d_VrAssayReady_ANI1",
        "surgical_event_id": "PT_SC02d_VrAssayReady_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:06:04.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_RA03_TsVrReceived",
        "molecular_id": "PT_RA03_TsVrReceived_MOI2",
        "analysis_id": "PT_RA03_TsVrReceived_ANI2",
        "surgical_event_id": "PT_RA03_TsVrReceived_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T21:52:57.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC10_VRUploadedANIExpired",
        "molecular_id": "PT_VC10_VRUploadedANIExpired_MOI1",
        "analysis_id": "PT_VC10_VRUploadedANIExpired_ANI2",
        "surgical_event_id": "PT_VC10_VRUploadedANIExpired_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:34:12.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC12_VRUploaded2",
        "molecular_id": "PT_VC12_VRUploaded2_MOI1",
        "analysis_id": "PT_VC12_VRUploaded2_ANI1",
        "surgical_event_id": "PT_VC12_VRUploaded2_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:40:45.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC04_VRUploaded",
        "molecular_id": "PT_VC04_VRUploaded_MOI1",
        "analysis_id": "PT_VC04_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC04_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:38:18.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MochaTsVrUploaded0",
        "molecular_id": "PT_AU05_MochaTsVrUploaded0_MOI1",
        "analysis_id": "PT_AU05_MochaTsVrUploaded0_ANI1",
        "surgical_event_id": "PT_AU05_MochaTsVrUploaded0_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T18:33:08.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SR10_TsVrReceived",
        "molecular_id": "PT_SR10_TsVrReceived_MOI1",
        "analysis_id": "PT_SR10_TsVrReceived_ANI1",
        "surgical_event_id": "PT_SR10_TsVrReceived_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:10:31.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MdaTsVrUploaded1",
        "molecular_id": "PT_AU05_MdaTsVrUploaded1_MOI1",
        "analysis_id": "PT_AU05_MdaTsVrUploaded1_ANI1",
        "surgical_event_id": "PT_AU05_MdaTsVrUploaded1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T18:33:42.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC02g_TsVrUploaded",
        "molecular_id": "PT_SC02g_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC02g_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC02g_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:07:29.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_GVF_VrAssayReady",
        "molecular_id": "PT_GVF_VrAssayReady_MOI1",
        "analysis_id": "PT_GVF_VrAssayReady_ANI1",
        "surgical_event_id": "PT_GVF_VrAssayReady_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T00:18:17.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC05d_VrAssayReady",
        "molecular_id": "PT_SC05d_VrAssayReady_MOI1",
        "analysis_id": "PT_SC05d_VrAssayReady_ANI1",
        "surgical_event_id": "PT_SC05d_VrAssayReady_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:33:25.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "ION_FL02_TsVrUploaded",
        "molecular_id": "ION_FL02_TsVrUploaded_MOI1",
        "analysis_id": "ION_FL02_TsVrUploaded_ANI1",
        "surgical_event_id": "ION_FL02_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:01:40.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SR14_TsVrUploaded1",
        "molecular_id": "PT_SR14_TsVrUploaded1_MOI1",
        "analysis_id": "PT_SR14_TsVrUploaded1_ANI1",
        "surgical_event_id": "PT_SR14_TsVrUploaded1_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T16:14:24.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AU05_MdaTsVrUploaded2",
        "molecular_id": "PT_AU05_MdaTsVrUploaded2_MOI1",
        "analysis_id": "PT_AU05_MdaTsVrUploaded2_ANI1",
        "surgical_event_id": "PT_AU05_MdaTsVrUploaded2_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-11T18:34:13.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_VC04a_VRUploaded",
        "molecular_id": "PT_VC04a_VRUploaded_MOI1",
        "analysis_id": "PT_VC04a_VRUploaded_ANI1",
        "surgical_event_id": "PT_VC04a_VRUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T17:41:40.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC01c_TsVrUploaded",
        "molecular_id": "PT_SC01c_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC01c_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC01c_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T00:22:27.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_RA04a_TsVrReceived",
        "molecular_id": "PT_RA04a_TsVrReceived_MOI2",
        "analysis_id": "PT_RA04a_TsVrReceived_ANI2",
        "surgical_event_id": "PT_RA04a_TsVrReceived_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-07T22:12:43.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_OS01a_TsVrReceived",
        "molecular_id": "PT_OS01a_TsVrReceived_MOI2",
        "analysis_id": "PT_OS01a_TsVrReceived_ANI2",
        "surgical_event_id": "PT_OS01a_TsVrReceived_SEI2",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-22T05:11:17.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_SC05f_TsVrUploaded",
        "molecular_id": "PT_SC05f_TsVrUploaded_MOI1",
        "analysis_id": "PT_SC05f_TsVrUploaded_ANI1",
        "surgical_event_id": "PT_SC05f_TsVrUploaded_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2017-01-04T01:35:16.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      },
      {
        "patient_id": "PT_AM01_TsVrReceived2",
        "molecular_id": "PT_AM01_TsVrReceived2_MOI1",
        "analysis_id": "PT_AM01_TsVrReceived2_ANI1",
        "surgical_event_id": "PT_AM01_TsVrReceived2_SEI1",
        "ion_reporter_id": "bdd_test_ion_reporter",
        "variant_report_received_date": "2016-11-15T21:40:34.000+00:00",
        "specimen_received_date": "2016-04-26T15:17:11.000+00:00"
      }
    ],
    "assignment_reports": [
      {
        "patient_id": "PT_AU06_PendingConfirmation0",
        "molecular_id": "PT_AU06_PendingConfirmation0_MOI1",
        "analysis_id": "PT_AU06_PendingConfirmation0_ANI1",
        "surgical_event_id": "PT_AU06_PendingConfirmation0_SEI1",
        "assignment_date": "2017-01-10T22:09:08.000+00:00",
        "assignment_uuid": "b13fc6c4-cdb6-44dc-a980-99599718d88a",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC02e_PendingConfirmation",
        "molecular_id": "PT_SC02e_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC02e_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC02e_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-04T01:06:41.000+00:00",
        "assignment_uuid": "46db54a0-2794-4dc9-a298-69796bf93a61",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_OS01_PendingConfirmation",
        "molecular_id": "PT_OS01_PendingConfirmation_MOI1",
        "analysis_id": "PT_OS01_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_OS01_PendingConfirmation_SEI1",
        "assignment_date": "2016-11-22T05:01:04.000+00:00",
        "assignment_uuid": "b8a6ad48-a5e6-418a-befc-85ac18dfcfde",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_AU06_PendingConfirmation2",
        "molecular_id": "PT_AU06_PendingConfirmation2_MOI1",
        "analysis_id": "PT_AU06_PendingConfirmation2_ANI1",
        "surgical_event_id": "PT_AU06_PendingConfirmation2_SEI1",
        "assignment_date": "2017-01-11T19:16:08.000+00:00",
        "assignment_uuid": "91449155-c67c-4d73-9fe6-a10d938815a5",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_AU06_PendingConfirmation3",
        "molecular_id": "PT_AU06_PendingConfirmation3_MOI1",
        "analysis_id": "PT_AU06_PendingConfirmation3_ANI1",
        "surgical_event_id": "PT_AU06_PendingConfirmation3_SEI1",
        "assignment_date": "2017-01-11T19:18:39.000+00:00",
        "assignment_uuid": "ff93828f-126a-4c92-9e78-ce022419576b",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "UI_PA08_PendingConfirmation",
        "molecular_id": "UI_PA08_PendingConfirmation_MOI1",
        "analysis_id": "UI_PA08_PendingConfirmation_ANI1",
        "surgical_event_id": "UI_PA08_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-24T19:51:22.000+00:00",
        "assignment_uuid": "b3a9d17b-ab70-41a1-9f09-f7f9522bedb9",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_RA03_PendingConfirmation",
        "molecular_id": "PT_RA03_PendingConfirmation_MOI1",
        "analysis_id": "PT_RA03_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_RA03_PendingConfirmation_SEI1",
        "assignment_date": "2016-11-22T04:59:17.000+00:00",
        "assignment_uuid": "33e34ec7-f4e9-4a91-b9e8-67d65bad4545",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC02g_PendingConfirmation",
        "molecular_id": "PT_SC02g_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC02g_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC02g_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-04T01:02:20.000+00:00",
        "assignment_uuid": "f19859d6-bc70-44ec-aa66-bddf77fada93",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_OS01a_PendingConfirmation",
        "molecular_id": "PT_OS01a_PendingConfirmation_MOI1",
        "analysis_id": "PT_OS01a_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_OS01a_PendingConfirmation_SEI1",
        "assignment_date": "2016-11-22T05:24:56.000+00:00",
        "assignment_uuid": "ab583e1a-29ed-4b97-a5b5-f389f2cb59d3",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_RA04a_PendingConfirmation",
        "molecular_id": "PT_RA04a_PendingConfirmation_MOI1",
        "analysis_id": "PT_RA04a_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_RA04a_PendingConfirmation_SEI1",
        "assignment_date": "2016-11-22T05:00:11.000+00:00",
        "assignment_uuid": "46f2add4-f9e2-4fd0-9534-32663a0adc94",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC05a_PendingConfirmation",
        "molecular_id": "PT_SC05a_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC05a_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC05a_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-04T01:32:42.000+00:00",
        "assignment_uuid": "f129d32b-e049-472d-8e84-d9d48e526b81",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_AU06_PendingConfirmation1",
        "molecular_id": "PT_AU06_PendingConfirmation1_MOI1",
        "analysis_id": "PT_AU06_PendingConfirmation1_ANI1",
        "surgical_event_id": "PT_AU06_PendingConfirmation1_SEI1",
        "assignment_date": "2017-01-11T19:07:00.000+00:00",
        "assignment_uuid": "3c3bfcf1-262a-4654-a609-8e1657b6c03e",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC05g_PendingConfirmation",
        "molecular_id": "PT_SC05g_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC05g_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC05g_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-04T01:39:46.000+00:00",
        "assignment_uuid": "55cd4ddb-fc56-4208-a86e-b8dfd83b8269",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC05f_PendingConfirmation",
        "molecular_id": "PT_SC05f_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC05f_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC05f_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-04T01:37:57.000+00:00",
        "assignment_uuid": "b0ce56f7-001b-4734-8e0f-7982c85ff825",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC02f_PendingConfirmation",
        "molecular_id": "PT_SC02f_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC02f_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC02f_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-04T01:07:23.000+00:00",
        "assignment_uuid": "59723e18-763d-4d67-a599-67b314ccf6b6",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_SC05e_PendingConfirmation",
        "molecular_id": "PT_SC05e_PendingConfirmation_MOI1",
        "analysis_id": "PT_SC05e_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_SC05e_PendingConfirmation_SEI1",
        "assignment_date": "2017-01-10T06:07:13.000+00:00",
        "assignment_uuid": "8be1aa77-48f8-42b6-a6c5-617175bddb52",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      },
      {
        "patient_id": "PT_RA02_PendingConfirmation",
        "molecular_id": "PT_RA02_PendingConfirmation_MOI1",
        "analysis_id": "PT_RA02_PendingConfirmation_ANI1",
        "surgical_event_id": "PT_RA02_PendingConfirmation_SEI1",
        "assignment_date": "2016-12-01T16:25:01.000+00:00",
        "assignment_uuid": "a8b4fabb-dcf7-4867-b373-ff1d9c4b67ff",
        "disease": "Papillary thyroid carcinoma",
        "treatment_arm_title": "APEC1621-A (100, 2015-08-06)",
        "treatment_arm_id": "APEC1621-A",
        "treatment_arm_stratum_id": "100",
        "treatment_arm_version": "2015-08-06"
      }
    ]
  }

}
