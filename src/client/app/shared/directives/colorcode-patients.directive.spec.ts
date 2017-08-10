import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ColorCodePatientsDirective } from './colorcode-patients.directive';

export function main() {
    describe('ColorCodePatientsDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ColorCodePatientsDirective]
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
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"ON_TREATMENT_ARM" adds "text-success-light" color class', () => {
            testHost.testStatus = 'ON_TREATMENT_ARM';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"REGISTRATION" adds "text-info-light" color class', () => {
            testHost.testStatus = 'REGISTRATION';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"COMPASSIONATE_CARE" adds "text-purple-light" color class', () => {
            testHost.testStatus = 'COMPASSIONATE_CARE';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"PENDING_" adds "text-purple-light" color class', () => {
            testHost.testStatus = 'PENDING_';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"REJOIN_REQUESTED" adds "text-purple-light" color class', () => {
            testHost.testStatus = 'REJOIN_REQUESTED';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"NOT_ELIGIBLE" adds "text-purple-light" color class', () => {
            testHost.testStatus = 'NOT_ELIGIBLE';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"OFF_TRIAL_" adds "text-danger-light" color class', () => {
            testHost.testStatus = 'OFF_TRIAL_';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"OFF_TRIAL" adds "text-danger-light" color class', () => {
            testHost.testStatus = 'OFF_TRIAL';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(false);
        });

        it('"FORMERLY" adds "text-warning-light" color class', () => {
            testHost.testStatus = 'FORMERLY';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(true);
        });

        it('"PROGRESSION" adds "text-warning-light" color class', () => {
            testHost.testStatus = 'PROGRESSION';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-info-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-purple-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-warning-light')).toBe(true);
        });
    });
}

@Component({
    template: `<span [colorCodePatients]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus: string;
}
