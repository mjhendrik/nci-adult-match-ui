import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ColorCodeDaysDirective } from './colorcode-days.directive';

@Component({
    template: `<span [colorCodeDays]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus?: number;
}

export function main() {
    describe('ColorCodeDaysDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ColorCodeDaysDirective]
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
        });

        it('0 adds "text-success-light" color class', () => {
            testHost.testStatus = 0;
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('6 adds "text-success-light" color class', () => {
            testHost.testStatus = 6;
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('7 adds "text-warning-light" color class', () => {
            testHost.testStatus = 7;
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(true);
        });

        it('13 adds "text-warning-light" color class', () => {
            testHost.testStatus = 13;
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(true);
        });

        it('14 adds "text-danger-light" color class', () => {
            testHost.testStatus = 14;
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });
    });
}
