import {
  TestBed,
  async
} from '@angular/core/testing';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from "./../../shared/directives/directives.module";
import { PipesModule } from "./../../shared/pipes/pipes.module";
import { LongListModule } from '../../shared/long-list/long-list.module';
import { PatientTimelineComponent } from './patient-timeline.component';

export function main() {
  describe('patient timeline component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, CommonModule, PipesModule, FormsModule, DirectivesModule,
          LongListModule],
        declarations: [PatientTimelineComponent]
      });
    });

    it('should test getIcon',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientTimelineComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientTimelineComponent);
            fixture.componentInstance.getIcon("test");
          });
      }));
  });
}
