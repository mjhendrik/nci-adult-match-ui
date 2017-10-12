import {
    TestBed,
    ComponentFixture,
    async
} from '@angular/core/testing';
import {
    Component,
    DebugElement
} from '@angular/core';
import { By } from '@angular/platform-browser';

import { ColorCodeConcordanceDirective } from './colorcode-concordance.directive';

@Component({
    template: `<span [colorCodeConcordance]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('ColorCodeConcordanceDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ColorCodeConcordanceDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testEl = fixture.debugElement.query(By.css('span'));
            fixture.detectChanges();
        });

        xit('empty value adds no color class', () => {
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        xit('"Y" adds "text-success-light" color class', () => {
            testHost.testStatus = 'Y';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        xit('"N" adds "text-warning-light" color class', () => {
            testHost.testStatus = 'N';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        xit('"U" adds "text-muted" color class', () => {
            testHost.testStatus = 'U';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(true);
        });

    });
}
