import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFeatComponent } from './test-feat.component';

describe('TestFeatComponent', () => {
  let component: TestFeatComponent;
  let fixture: ComponentFixture<TestFeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
