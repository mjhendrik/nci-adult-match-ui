import {
  Component,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PipesModule } from './../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';

const fakeData = {
  'CURRENT': [
    {
      'treatmentArmId': 'CukeTest-122-1',
      'inclusions': [
        '2015-08-06'
      ],
      'exclusions': [] as string[],
      'type': 'Hotspot'
    },
    {
      'treatmentArmId': 'EAY131-N',
      'inclusions': [],
      'exclusions': [
        '2016-05-31'
      ],
      'type': 'Hotspot'
    }
  ],
  'FUTURE': [
    {
      'treatmentArmId': 'CukeTest-122-1-PENDING',
      'inclusions': [
        '2015-08-06'
      ],
      'exclusions': [] as string[],
      'type': 'Hotspot'
    }
  ],
  'PRIOR': [
    {
      'treatmentArmId': 'CukeTest-122-1-PENDING',
      'inclusions': [
        '2015-08-06'
      ],
      'exclusions': [] as string[],
      'type': 'Hotspot'
    }
  ],
  'IMPOSSIBLE': [
    {
      'treatmentArmId': 'CukeTest-122-1-PENDING',
      'inclusions': [
        'dummy version'
      ],
      'type': 'Dummy'
    }
  ],
};

@Component({
  selector: 'test-cmp',
  template: '<sd-amoi-list [amois]="testAmois"></sd-amoi-list>'
})
class TestComponent {
  testAmois: any = {};
}

export function main() {
  describe('AmoiListComponent', () => {
    let hostComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          PipesModule,
          SharedModule
        ],
        declarations: [TestComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('sd-amoi-list'));
      el = de.nativeElement;
    });

    it('should have no container div until manually calling `detectChanges`', () => {
      let listDiv = fixture.debugElement.query(By.css('div.amoi-status'));
      expect(listDiv).toBeNull();
    });

    it('should display "-" when host provides empty object', () => {
      fixture.detectChanges();
      let listDiv = fixture.debugElement.query(By.css('div.amoi-status'));
      let rows = listDiv.queryAll(By.css('div'));
      expect(rows.length).toEqual(0);
      expect((listDiv.nativeElement as HTMLElement).innerText).toContain('-');
    });

    it('should display "-" when host provides null', () => {
      hostComponent.testAmois = null;
      fixture.detectChanges();
      let listDiv = fixture.debugElement.query(By.css('div.amoi-status'));
      let rows = listDiv.queryAll(By.css('div'));
      expect(rows.length).toEqual(0);
      expect((listDiv.nativeElement as HTMLElement).innerText).toContain('-');
    });

    it('should display 2 rows when host provides array of 2 amois', () => {
      hostComponent.testAmois = fakeData;
      fixture.detectChanges();
      let listDiv = fixture.debugElement.query(By.css('div.amoi-status'));
      console.log((listDiv.nativeElement as HTMLElement).outerHTML);
      let rows = listDiv.queryAll(By.css('div'));
      expect(rows.length).toEqual(5);
    });

  });
}
