import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  ApplicationRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { routerTransition } from './../shared/router.animations';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

/**
 * BiopsyTrackingListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-biopsy-tracking',
  templateUrl: 'biopsy-tracking.component.html',
  styleUrls: ['biopsy-tracking.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class BiopsyTrackingListComponent implements OnInit {

  searchtermBiopsyTrackingList: string = '';
  recordsPerPageBiopsyTrackingList: number = 10;
  tableBiopsyTrackingListDefaultSort: string = 'biopsySequenceNumber';
  tableBiopsyTrackingListData: any[];
  errorMessage: string;
  biopsyCount: number;
  biopsyTotal: number;
  previous: any;
  activePage: number = 1;
  page: number = this.activePage;
  size: number = this.recordsPerPageBiopsyTrackingList;
  sortOrder: string = 'asc';
  sortBy: string = this.tableBiopsyTrackingListDefaultSort;

  @ViewChild('input') inputElRef: ElementRef;

  constructor(private biopsyTrackingApi: BiopsyTrackingApiService,
    private route: ActivatedRoute,
    private ngzone: NgZone,
    private cdref: ChangeDetectorRef,
    private appref: ApplicationRef) {

  }

  ngOnInit() {
    this.getBiopsyCount(this.route.snapshot.data['data'].count);
    this.biopsyCount = this.route.snapshot.data['data'].count;
    this.biopsyTotal = this.route.snapshot.data['data'].total;
  }

  getData() {
    this.biopsyTrackingApi.getBiopsyTracking(this.page, this.size, this.sortOrder, this.sortBy, this.searchtermBiopsyTrackingList)
      .subscribe(itemList => {
        this.tableBiopsyTrackingListData = itemList;
      },
      error => this.errorMessage = <any>error
      );
  }

  getBiopsyCount(list: any) {
    this.biopsyTrackingApi.getBiopsyCount('').subscribe((itemList: any) => {
      this.biopsyCount = itemList;
      this.getData();
      this.getBiopsyTotal();
    });
  }

  getBiopsyTotal() {
    this.biopsyTrackingApi.getBiopsyTotal()
      .subscribe(itemList => {
        this.biopsyTotal = itemList;
      },
      error => this.errorMessage = <any>error
      );
  }

  onSearchChanged(val: any) {
    Observable.fromEvent(this.inputElRef.nativeElement, 'keyup')
      .debounceTime(400)
      .subscribe((val: any) => {
        this.cdref.detectChanges();
        if (this.searchtermBiopsyTrackingList !== val.target.value) {
          this.searchtermBiopsyTrackingList = val.target.value;
          this.previous = this.page + ',' + this.size + ',' + this.sortOrder + ',' + this.sortBy + ','
            + this.searchtermBiopsyTrackingList;
          this.getBiopsyCount(this.route.snapshot.data['data'].data);
        }
        this.searchtermBiopsyTrackingList = val.target.value;
      });
  }

  currentPageActive(evt: any): void {
    evt += ',' + this.searchtermBiopsyTrackingList;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt && this.previous !== undefined)
      this.getBiopsyCount(this.route.snapshot.data['data'].data);
    this.previous = evt;
  }

  SortStatus(evt: any): void {
    evt += ',' + this.searchtermBiopsyTrackingList;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt)
      this.getBiopsyCount(this.route.snapshot.data['data'].data);
    this.previous = evt;
  }

}
