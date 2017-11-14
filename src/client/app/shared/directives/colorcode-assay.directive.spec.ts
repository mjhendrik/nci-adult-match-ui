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

import { ColorCodeAssayDirective } from './colorcode-assay.directive';

@Component({
    template: `<span [colorCodeAssay]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('ColorCodeAssayDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ColorCodeAssayDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testEl = fixture.debugElement.query(By.css('span'));
            fixture.detectChanges();
        });

        it('empty value adds no color class', () => {
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-muted')).toBe(false);
        });

        it('"POSITIVE" adds "text-success-light" color class', () => {
            testHost.testStatus = 'POSITIVE';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-muted')).toBe(false);
        });

        it('"INDETERMINATE" adds "text-danger-light" color class', () => {
            testHost.testStatus = 'INDETERMINATE';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-muted')).toBe(false);
        });

        it('"NEGATIVE" adds "text-warning-light" color class', () => {
            testHost.testStatus = 'NEGATIVE';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-muted')).toBe(false);
        });

        it('"UNKNOWN" adds "text-muted" color class', () => {
            testHost.testStatus = 'UNKNOWN';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-muted')).toBe(true);
        });

    });
}
