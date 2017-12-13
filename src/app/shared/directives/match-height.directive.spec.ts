import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatchHeightDirective } from './match-height.directive';

@Component({
    template: `
  <div class="row" matchHeight="panel-height-top">
    <div class="col-md-6">
      <div class="panel panel-white panel-accent-sides-purple overflow-hidden panel-height-top">
        <div style="height:100px"></div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-white panel-accent-sides-purple overflow-hidden panel-height-top">
      </div>
    </div>
`
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('MatchHeightDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testElement: DebugElement;
        let innerElements: DebugElement[];

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, MatchHeightDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testElement = fixture.debugElement.query(By.directive(MatchHeightDirective));
            innerElements = fixture.debugElement.queryAll(By.css('.panel-height-top'));
        });

        it('should define host elements', () => {
            expect(testElement).toBeDefined();
            expect(innerElements.length).toBe(2);
        });

        it('the second element has the same height as the first element', () => {
            window.dispatchEvent(new Event('resize'));
            fixture.detectChanges();
            expect(innerElements[1].nativeElement.style.height).toBe('100px');
        });
    });
}
