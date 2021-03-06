import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';

import { routerTransition } from './../../shared/router.animations';
import { DialogResults } from '../../shared/modal-dialogs/modal-dialog-results';
import { CliaVariantReportsPACCViewData } from '../clia-data-interfaces';
import { SampleControlApiService } from '../sample-control-api.service';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';
import { ToastrService } from '../../shared/error-handling/toastr.service';
import { CliaDataTransformer } from '../clia-data-transformer.service';
import { ModalDialogConfirmationComponent } from '../../shared/modal-dialogs/modal-dialog-confirmation.component';
import { ModalDialogWithCommentsComponent } from '../../shared/modal-dialogs/modal-dialog-with-comments.component';

import { ApiStatusUpdateError, ApiStatusUpdateSuccess, ApiError, ApiSuccess } from '../sample-control-api.service';
import { CliaReportPcData, CliaReportPccData } from '../clia-report-data';

/**
 * CLIAVariantReportsPaccComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-reports-pacc',
  templateUrl: 'clia-variant-reports-pacc.component.html',
  styleUrls: ['clia-variant-reports-pacc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class CliaVariantReportsPaccComponent implements OnInit {

  molecular_id: any;
  analysis_id: any;
  total_variants: any;
  mapd: any;
  cellularity: any;
  date_variant_received: any;
  torrent_variant_caller_version: any;
  report_status: any;
  comment: any;
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
  errorMessage: string;
  paccType: string;
  cliaTypeName: string;
  next_generation_sequence: any;
  parsed_vcf_genes: any;
  isReviewer: boolean = false;

  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  constructor(
    private api: SampleControlApiService,
    private route: ActivatedRoute,
    private profile: UserProfileService,
    // private transformer: ViewDataTransformer,
    private modalService: BsModalService,
    private toastrService: ToastrService,
    private transformer: CliaDataTransformer) {
  }

  ngOnInit() {
    this.paccType = this.route.snapshot.url[0].path;
    this.paccType = this.paccType.substring(this.paccType.indexOf('_') + 1).trim();

    if (this.paccType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.paccType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.paccType === 'yale') this.cliaTypeName = 'Yale';
    if (this.paccType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.paccType === 'mda') this.cliaTypeName = 'MD Anderson';

    // this.route.snapshot.data['data'].next_generation_sequence;

    this.getData(this.route.snapshot.data['data'].data[0]);
    this.getGraph(this.route.snapshot.data['data'].graph);

    const roles = this.profile.roles().filter(x => {
      return x.indexOf('_VARIANT_REPORT_REVIEWER') !== -1 || x === 'ADMIN';
    });

    if (roles.indexOf('ADMIN') !== -1 || roles.join().toLowerCase().indexOf(this.paccType) !== -1) {
      this.isReviewer = true;
    }
  }

  getData(itemList: CliaVariantReportsPACCViewData) {
    this.molecular_id = itemList.molecularSequenceNumber;
    this.total_variants = itemList.total_variants;
    this.mapd = itemList.mapd;
    this.cellularity = itemList.cellularity;
    this.date_variant_received = itemList.dateReceived;
    this.torrent_variant_caller_version = itemList.torrent_variant_caller_version;
    this.report_status = itemList.status;
    this.comment = itemList.comment;

    this.next_generation_sequence = itemList.nextGenerationSequence;
    this.analysis_id = this.next_generation_sequence.ionReporterResults.jobName;
    this.copy_number_variants = this.next_generation_sequence.ionReporterResults.variantReport.copyNumberVariants;
    this.gene_fusions = this.next_generation_sequence.ionReporterResults.variantReport.geneFusions;
    this.snv_indels = this.next_generation_sequence.ionReporterResults.variantReport.singleNucleotideVariants;
    // this.indels = this.next_generation_sequence.ionReporterResults.variantReport.indels;
  };

  getGraph(itemList: CliaVariantReportsPACCViewData) {
    this.parsed_vcf_genes = [itemList.parsedVCFGenes, itemList.file_name, itemList.tvcVersion];
  }

  downloadDnaBam(): void {
    this.api.downloadCliaDnaBam(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadRnaBam(): void {
    this.api.downloadCliaRnaBam(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadVcf(): void {
    this.api.downloadCliaVcf(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  rejectReport(): void {

    const action = () => {
      console.info('Rejecting Proficiency and Competency clia report: ' + this.molecular_id);

      this.api
        .rejectReport(this.molecular_id, 'proficiency_competency_control')
        .subscribe(
          (x:  ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
            switch (x.kind) {
              case 'error':
                this.showToast(x.message, true);
                break;
              case 'success':
                this.transformer.updateRejectedCliaPCCStatus(this, x);
                this.showToast(`Profiency and Competency Control Clia Report ${this.molecular_id} has been rejected`, false);
                break;
            }
          });
    };

    this.showConfirmation(
      false,
      'Profiency and Competency Control Clia Report Rejection',
      `Are you sure you want to reject Profiency and Competency Control Clia Report ${this.molecular_id}?`,
      'Reject',
      `Don't Reject`,
      action
    );
  };

  confirmReport(): void {

    const action = () => {
      console.info('Confirming Proficiency and Competency clia report: ' + this.molecular_id);

      this.api
        .rejectReport(this.molecular_id, 'proficiency_competency_control')
        .subscribe(
          (x:  ApiStatusUpdateSuccess | ApiStatusUpdateError) => {
            switch (x.kind) {
              case 'error':
                this.showToast(x.message, true);
                break;
              case 'success':
                this.transformer.updateConfirmedCliaPCCStatus(this, x);
                this.showToast(`Profiency and Competency Control Clia Report ${this.molecular_id} has been confirmed`, false);
                break;
            }
          });
    };

    this.showConfirmation(
      false,
      'Profiency and Competency Control Clia Report Confirmation',
      `Are you sure you want to confirm Profiency and Competency Control Clia Report ${this.molecular_id}?`,
      'Confirm',
      `Don't Confirm`,
      action
    );
  };

  // confirmReport(): void {
  //   this.api.confirmReport(this.molecular_id, 'proficiency_competency_control')
  //     .subscribe((itemList: any) => {
  //       console.info('Report Confirmed');
  //     });
  // };

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
    if (this.toastrService && this.toastrService.toastr) {
      if (isError) {
        console.error(message);
        this.toastrService.toastr.error(message);
      } else {
        console.info(message);
        this.toastrService.toastr.info(message);
      }
    }
  }

}
