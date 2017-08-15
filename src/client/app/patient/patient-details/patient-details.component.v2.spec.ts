// import {
//   ChangeDetectorRef,
//   DebugElement
// } from '@angular/core';
// import {
//   async,
//   TestBed,
//   ComponentFixture
// } from '@angular/core/testing';
// import {
//   ActivatedRoute
// } from '@angular/router';
// import { FormsModule } from '@angular/forms';
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

// import { ActivatedRouteStub } from '../test-stubs/activated-route.stub';
// import { PatientApiServiceStub } from '../test-stubs/patient-api.service.stub';

// export function main() {
//   // xdescribe('PatientDetailsComponent (patient-details.component.html)', () => {
//   //   let component: PatientDetailsComponent;
//   //   let fixture: ComponentFixture<PatientDetailsComponent>;

//   //   let config: any[] = [
//   //     { path: 'patients/1234', component: 'PatientDetailsComponent' }
//   //   ];

//   //   // async beforeEach
//   //   beforeEach(async(() => {
//   //     TestBed.configureTestingModule({
//   //       imports: [
//   //         RouterTestingModule.withRoutes(config),
//   //         DirectivesModule,
//   //         PipesModule,
//   //         FormsModule,
//   //         DataTableModule,
//   //         PatientTimelineModule,
//   //         DropzoneModule,
//   //         SharedModule
//   //       ],
//   //       declarations: [PatientDetailsComponent], // declare the test component
//   //       providers: [
//   //         { provide: ActivatedRoute, useClass: ActivatedRouteStub },
//   //         { provide: PatientApiService, useClass: PatientApiServiceStub },
//   //         ChangeDetectorRef,
//   //         ViewDataTransformer
//   //       ]
//   //     }).compileComponents();  // compile template and css
//   //   }));

//   //   // synchronous beforeEach
//   //   beforeEach(() => {
//   //     fixture = TestBed.createComponent(PatientDetailsComponent);

//   //     component = fixture.componentInstance; // PatientDetailsComponent test instance

//   //     // // query for the title <h1> by CSS element selector
//   //     // headerDebugEl = fixture.debugElement.query(By.css('h1'));
//   //     // headerEl = headerDebugEl.nativeElement;
//   //   });

//   //   fit('no title in the DOM until manually call `detectChanges`', () => {
//   //     expect(component).toBeDefined();
//   //   });

//   // });
// }
