import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RefreshMatchHeightDirective } from './refresh-match-height.directive';
import { MatchHeightDirective } from './match-height.directive';

@Component({
    template: `
        <ul class="nav nav-tabs nav-tabs-purple">
          <li id="outsideDataTab" class="active"><a href="#tab-outside-lab-report" data-toggle="tab" refreshMatchHeight>Outside Lab Report</a></li>
          <li id="matchDataTab"><a href="#tab-confirmation-report" data-toggle="tab" refreshMatchHeight>Confirmation Report</a></li>
        </ul>

        <div class="row" matchHeight="panel-height-middle">
            <div class="col-md-6">
                <div class="panel panel-white panel-accent-bottom-purple overflow-hidden panel-height-middle">
                    <div class="panel-heading">
                        <dl class="dl-horizontal">
                            <h4>MOI/aMOI Summary</h4>
                            <dt>Total aMOIs</dt>
                            <dd>SOME TEXT</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="panel panel-white panel-accent-bottom-purple overflow-hidden panel-height-middle">
                    <div class="panel-heading">
                        <dl class="dl-horizontal">
                            <h4>MOI/aMOI Summary</h4>
                            <dd>SOME TEXT</dd>
                            <h4>MOI/aMOI Summary</h4>
                            <dd>SOME TEXT</dd>
                            <h4>MOI/aMOI Summary</h4>
                            <dd>SOME TEXT</dd>
                            <h4>MOI/aMOI Summary</h4>
                            <dd>SOME TEXT</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
`
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('RefreshMatchHeightDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testElement: DebugElement;
        let innerElements: DebugElement[];

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, RefreshMatchHeightDirective, MatchHeightDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testElement = fixture.debugElement.query(By.directive(RefreshMatchHeightDirective));
            innerElements = fixture.debugElement.queryAll(By.directive(MatchHeightDirective));
        });

        it('should have dependent directives', () => {
            expect(testElement).toBeDefined();
            expect(innerElements.length).toBe(1);
        });

        xit('the second element has the same height as the first element', () => {
            testElement.triggerEventHandler('click', null);
            fixture.detectChanges();
            expect(innerElements[1].nativeElement.style.height).toBe('100px');
        });
    });
}
