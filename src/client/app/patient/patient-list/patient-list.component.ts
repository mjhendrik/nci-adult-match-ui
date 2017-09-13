import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  ApplicationRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { PatientApiService } from '../patient-api.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';




import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  moduleId: module.id,
  selector: 'sd-patients',
  templateUrl: 'patient-list.component.html',
  styleUrls: ['patient-list.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientListComponent implements OnInit {

  searchTerm: string = '';
  recordsPerPagePatients: number = 10;
  tablePatientsDefaultSort: string = 'patientSequenceNumber';
  tablePatientsData: any[] = [];
  errorMessage: string;
  activePage: number = 1;
  patientCount: number;
  patientTotal: number;
  previous: any;
  page: number = this.activePage;
  size: number = this.recordsPerPagePatients;
  sortOrder: string = 'asc';
  sortBy: string = this.tablePatientsDefaultSort;

  @ViewChild('input') inputElRef: ElementRef;

  private isOutsideAssayValue?: boolean = null;
  set isOutsideAssayWorkflow(value: boolean) {
    this.isOutsideAssayValue = value;
    this.refreshData();
  }
  get isOutsideAssayWorkflow(): boolean {
    return this.isOutsideAssayValue;
  }

  constructor(private patientApi: PatientApiService,
    private ngzone: NgZone,
    private cdref: ChangeDetectorRef,
    private appref: ApplicationRef,           private toastr: ToastsManager) { }

  ngOnInit() {
    this.refreshData();
  }

  testToast() {
    this.toastr.info('An info');
    this.toastr.warning('A warning');
    this.toastr.success('A success');
    this.toastr.error('An error');

    throw Error('Everything is broken!');
  }


  onSearchChanged(val: any) {
    Observable.fromEvent(this.inputElRef.nativeElement, 'input')
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((val: any) => {
        this.cdref.detectChanges();
        if (this.searchTerm !== val.target.value) {
          this.searchTerm = val.target.value;
          this.previous = this.page + ',' + this.size + ',' + this.sortOrder + ',' + this.sortBy + ','
            + this.searchTerm;
          this.refreshData();
        }
        this.searchTerm = val.target.value;
      });
  }

  currentPageActive(evt: any): void {
    evt += ',' + this.searchTerm;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt && this.previous !== undefined)
      this.refreshData();
    this.previous = evt;
  }

  sortStatus(evt: any): void {
    evt += ',' + this.searchTerm;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt) {
      this.refreshData();
    }
    this.previous = evt;
  }

  private refreshData() {
    this.patientApi.getPatientCount(this.searchTerm, this.isOutsideAssayWorkflow)
      .subscribe(itemList => {
        this.patientCount = itemList;
        this.getData();
        this.getPatientTotal();
      },
      error => this.errorMessage = <any>error
      );
  }

  private getData() {
    let gmt = new GmtPipe();
    this.patientApi.getPatientList(this.page, this.size, this.sortOrder, this.sortBy, this.searchTerm, this.isOutsideAssayWorkflow)
      .subscribe(itemList => {
        this.tablePatientsData = itemList.map(x => {
          x.registrationDate = gmt.transform(x.registrationDate);
          x.offTrialDate = gmt.transform(x.offTrialDate);
          x.diseases.shortName = x.diseases && x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
          return x;
        });
      },
      error => this.errorMessage = <any>error
      );
  }

  private getPatientTotal() {
    this.patientApi.getPatientTotal()
      .subscribe(itemList => {
        this.patientTotal = itemList;
      },
      error => this.errorMessage = <any>error
      );
  }
}
