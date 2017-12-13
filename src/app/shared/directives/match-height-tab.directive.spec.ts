import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatchHeightTabClickDirective } from './match-height-tab.directive';

@Component({
    template: `
            <ul class="nav nav-tabs nav-tabs-orangeshade p-l-0">
              <li class="active">
                <a class="p-0 unit-test-directive-class" href="#tab-PC" data-toggle="tab" aria-expanded="true" matchHeightTab="clia-tab">
                  <div class="panel-heading">
                    <div class="panel-heading-btn">
                    </div>
                    <h4 class="panel-title">Positive Control</h4>
                  </div>
                </a>
              </li>
              <li class="">
                <a class="p-0 unit-test-directive-class" href="#tab-NTC" data-toggle="tab" aria-expanded="false" matchHeightTab="clia-tab">
                  <div class="panel-heading">
                    <div class="panel-heading-btn">
                    </div>
                    <h4 class="panel-title">No Template Control</h4>
                  </div>
                </a>
              </li>
            </ul>    
    `
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('MatchHeightTabClickDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testElements: DebugElement[];

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, MatchHeightTabClickDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testElements = fixture.debugElement.queryAll(By.css('a'));
            fixture.detectChanges();
        });

        it('should define host elements', () => {
            expect(testElements).toBeDefined();
            expect(testElements.length).toBe(2);
        });

        xit('resizing one element and clicking should resize other elements', () => {
            fixture.detectChanges();

            testElements[0].nativeElement.style.height = '100';
            testElements[0].triggerEventHandler('click', null);

            expect(testElements[1].nativeElement.style.height).toBe('100px');
        });
    });
}
