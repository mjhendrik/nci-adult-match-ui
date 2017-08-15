// import {
//   ChangeDetectorRef,
//   Injectable,
//   DebugElement
// } from '@angular/core';
// import {
//   async,
//   TestBed,
//   ComponentFixture
// } from '@angular/core/testing';
// import {
//   ActivatedRoute,
//   convertToParamMap,
//   ParamMap,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { RouterTestingModule } from '@angular/router/testing';
// import { By } from '@angular/platform-browser/platform-browser';
// import { DropzoneModule } from 'ngx-dropzone-wrapper';

// import { DirectivesModule } from './../../shared/directives/directives.module';
// import { PipesModule } from './../../shared/pipes/pipes.module';
// import { DataTableModule } from './../../shared/datatables/DataTableModule';
// import { PatientDetailsComponent } from './patient-details.component';
// import { PatientApiService } from './../patient-api.service';
// import { ViewDataTransformer } from './../view-data-transformer.service';
// import { PatientTimelineModule } from './../patient-timeline/patient-timeline.module';
// import { SharedModule } from '../../shared/shared.module';

// import { PatientApiServiceStub } from '../patient-api.service.stub';

// @Injectable()
// export class ActivatedRouteStub {
//   // ActivatedRoute.paramMap is Observable
//   private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
//   // tslint:disable-next-line:member-ordering
//   paramMap = this.subject.asObservable();

//   // Test parameters
//   private _testParamMap: ParamMap;
//   get testParamMap() { return this._testParamMap; }
//   set testParamMap(params: {}) {
//     this._testParamMap = convertToParamMap(params);
//     this.subject.next(this._testParamMap);
//   }

//   private actvatedSnapshot: ActivatedRouteSnapshot;

//   // ActivatedRoute.snapshot.paramMap
//   get snapshot(): ActivatedRouteSnapshot {
//     return this.actvatedSnapshot;
//   }

//   constructor() {
//     this.actvatedSnapshot = new ActivatedRouteSnapshot();
//     this.actvatedSnapshot.data = {};
//     this.actvatedSnapshot.data['data'] = {};
//   }

//   toString(): string {
//     return 'ActivatedRouteStub';
//   }
// }

// export function main() {
//   fdescribe('PatientDetailsComponent (patient-details.component.html)', () => {

//     let component: PatientDetailsComponent;
//     let fixture: ComponentFixture<PatientDetailsComponent>;
//     let headerDebugEl: DebugElement;
//     let headerEl: HTMLElement;

//     // async beforeEach
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         declarations: [PatientDetailsComponent], // declare the test component
//       })
//         .compileComponents();  // compile template and css
//     }));

//     // synchronous beforeEach
//     beforeEach(() => {
//       fixture = TestBed.createComponent(PatientDetailsComponent);

//       component = fixture.componentInstance; // PatientDetailsComponent test instance

//       // query for the title <h1> by CSS element selector
//       headerDebugEl = fixture.debugElement.query(By.css('h1'));
//       headerEl = headerDebugEl.nativeElement;
//     });

//     fit('no title in the DOM until manually call `detectChanges`', () => {
//       expect(component).toBeDefined();
//     });

//     it('no title in the DOM until manually call `detectChanges`', () => {
//       expect(headerEl.textContent).toEqual('Patient ');
//     });

//     it('should display original title', () => {
//       fixture.detectChanges();
//       // expect(headerEl.textContent).toContain(comp.title);
//     });

//   });

// }
