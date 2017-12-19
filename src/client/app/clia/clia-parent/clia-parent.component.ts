import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { SampleControlApiService } from '../sample-control-api.service';
import { IonReportersApiService } from '../ion-reporters-api.service';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';
import { CliaDataService } from './../../shared/clia/clia-data.service';

import {
  Observable,
  Subscription
} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/**
 * CliaParentComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-parent',
  templateUrl: 'clia-parent.component.html',
  styleUrls: ['clia-parent.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class CliaParentComponent implements OnInit, OnDestroy {

  @Input('cliaType') cliaType: string;

  searchtermPC: string = '';
  searchtermNTC: string = '';
  searchtermPACC: string = '';

  recordsPerPagePC: number = 10;
  recordsPerPageNTC: number = 10;
  recordsPerPagePACC: number = 10;

  tablePCDefaultSort: string = 'date_molecular_id_created';
  tableNTCDefaultSort: string = 'date_molecular_id_created';
  tablePACCDefaultSort: string = 'date_molecular_id_created';

  sortByDescPC: string = 'desc';
  sortByDescNTC: string = 'desc';
  sortByDescPACC: string = 'desc';

  countContacted: number = 0;
  countLost: number = 0;

  timestamp: any = new Date();

  tablePCData: any[] = [];
  tableNTCData: any[] = [];
  tablePACCData: any[] = [];

  ionReportersData: any[] = [];

  cliaTypeName: string;
  control_type: string = 'positive';

  generateMsnBtn: boolean = false;

  dataAvailable: boolean = false;

  private autoRefreshSubscription: Subscription;

  constructor(
    private apiSample: SampleControlApiService,
    private apiIon: IonReportersApiService,
    private route: ActivatedRoute,
    private profile: UserProfileService,
    private cliaData: CliaDataService) {
  }

  ngOnInit() {

    this.cliaType = this.route.snapshot.data['cliaType'];

    if (this.cliaType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.cliaType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.cliaType === 'yale') this.cliaTypeName = 'Yale';
    if (this.cliaType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.cliaType === 'mda') this.cliaTypeName = 'MDA';
    // if (this.cliaType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.getDataPC();
    this.getDataNTC();
    this.getDataPACC();
    this.getDataIon();
    this.autoLoadDataIon();
    // TO_DO: Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
    // (https://github.com/angular/angular/issues/8280#issue-151377567)

    const roles = this.profile.roles().filter(x => {
      return x.indexOf('_SENDER') !== -1 || x.indexOf('_REVIEWER') !== -1 || x === 'ADMIN';
    });

    if (roles.indexOf('ADMIN') !== -1 || roles.join().toLowerCase().indexOf(this.cliaType) !== -1) {
      this.generateMsnBtn = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  getDataPC() {
    this.apiSample.getCliaDetailsPC(this.cliaTypeName)
      .subscribe(details => {
        let gmt = new GmtPipe();
        let data: {};

        this.tablePCData = details.map((x: any) => {
          x.molecular_id = x.molecularSequenceNumber;
          x.date_molecular_id_created = gmt.transform(x.dateCreated);
          x.date_variant_received = gmt.transform(x.dateReceived);
          x.report_status = x.status;
          x.tvc_version = (typeof x.nextGenerationSequence !== 'undefined') ? x.nextGenerationSequence.tvcVersion : null;
          x.analysis_id = (typeof x.nextGenerationSequence !== 'undefined') ? x.nextGenerationSequence.ionReporterResults.jobName : null;

          data = {
            molecular_id: x.molecular_id,
            analysis_id: x.analysis_id,
            status: x.report_status,
            date_variant_received: x.dateReceived,
            torrent_variant_caller_version: x.tvc_version
          };

          this.cliaData.transferData = data;
          return x;
        });
        // this.tablePCData.splice(-1, 1); --> Check if you need this in the new message-api implementation
        this.dataAvailable = true;
      });
  };

  getDataNTC() {
    this.apiSample.getCliaDetailsNTC(this.cliaTypeName)
      .subscribe(details => {
        let gmt = new GmtPipe();
        let data: {};

        this.tableNTCData = details.map((x: any) => {
          x.molecular_id = x.molecularSequenceNumber;
          x.date_molecular_id_created = gmt.transform(x.dateCreated);
          x.date_variant_received = null;
          x.report_status = null;

          if (typeof x.dateReceived !== 'undefined') {

            x.date_variant_received = gmt.transform(x.dateReceived);
            x.report_status = (x.passed === true) ? 'PASSED' : 'FAILED';

            data = {
              molecular_id: x.molecular_id,
              analysis_id: x.analysis_id,
              status: x.report_status,
              date_variant_received: x.dateReceived,
              torrent_variant_caller_version: x.tvc_version
            };

            this.cliaData.transferData = data;
          }
          return x;
        });
        // this.tableNTCData.splice(-1, 1); --> Check if you need this in the new message-api implementation
        this.dataAvailable = true;
      });
  };

  getDataPACC() {
    this.apiSample.getCliaDetailsPACC(this.cliaTypeName)
      .subscribe(details => {
        let gmt = new GmtPipe();
        // let data: {};

        this.tablePACCData = details.map((x: any) => {
          x.molecular_id = x.molecularSequenceNumber;
          x.date_molecular_id_created = gmt.transform(x.dateCreated);
          x.date_variant_received = null;
          x.report_status = null;
          x.date_variant_received = gmt.transform(x.dateReceived);
          x.report_status = x.status;
          x.analysis_id = typeof x.dateReceived === 'undefined' ? null : x.nextGenerationSequence.ionReporterResults.jobName;

          // console.log("x.nextGenerationSequence")
          // console.log(x.nextGenerationSequence)

          // if (typeof x.dateReceived !== 'undefined') {
          //   x.analysis_id = x.nextGenerationSequence.ionReporterResults.jobName;
          // }

          // if (typeof x.dateReceived !== 'undefined') {
          //   x.date_variant_received = gmt.transform(x.dateReceived);
          //   x.report_status = x.status;
          //   x.analysis_id = x.nextGenerationSequence.ionReporterResults.jobName;
          //
          //   data = {
          //     molecular_id: x.molecular_id,
          //     analysis_id: x.analysis_id,
          //     status: x.report_status,
          //     date_variant_received: x.dateReceived,
          //     torrent_variant_caller_version: x.tvc_version
          //   };
          //   this.cliaData.transferData = data;
          // }

          // x.date_variant_received = gmt.transform(x.date_variant_received);
          // x.report_status = x.passed;
          return x;
        });
        // this.tablePACCData.splice(-1, 1); --> Check if you need this in the new message-api implementation
        this.dataAvailable = true;
      });
  };

  getDataIon() {
    if (this.cliaTypeName === 'MDA') this.cliaTypeName = 'MDACC';
    this.apiIon.getCliaIon(this.cliaTypeName)
      .subscribe(details => {
        let gmt = new GmtPipe();
        this.ionReportersData = details.map((x: any) => {
          x.lastContactDate = gmt.transform(x.lastContactDate);
          return x;
        });
        this.dataAvailable = true;
      });
  };

  setControlType(type: string): void {
    this.control_type = type;
  }

  generateMsn(): void {
    this.apiSample.generateMsn(this.cliaTypeName, this.control_type)
      .subscribe((itemList: any) => {
        if (this.control_type === 'positive') this.getDataPC();
        if (this.control_type === 'no_template') this.getDataNTC();
        if (this.control_type === 'proficiency_competency') this.getDataPACC();
      });
  };

  autoLoadDataIon() {
    this.autoRefreshSubscription = Observable.interval(1000 * 60).subscribe(x => {

      this.apiIon.getCliaIon(this.cliaType)
        .subscribe(details => {

          let gmt = new GmtPipe();

          this.ionReportersData = details.map(x => {
            x.lastContactDate = gmt.transform(x.lastContactDate);
            return x;
          });

        });

      this.timestamp = new Date();

    });
  };

  private unsubscribe() {
    if (!this.autoRefreshSubscription) {
      return;
    }
    this.autoRefreshSubscription.unsubscribe();
    this.autoRefreshSubscription = null;
  }

}
