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

import { AmoiDirective } from './amoi.directive';

@Component({
    template: `<span [amoi]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('AmoiDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, AmoiDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testEl = fixture.debugElement.query(By.css('span'));
            fixture.detectChanges();
        });

        it('empty value adds no label class', () => {
            expect(testEl.nativeElement.classList.contains('label-success')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-info')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-danger')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-grey')).toBe(false);
        });

        it('"CURRENT" adds "label-success" label class', () => {
            testHost.testStatus = 'CURRENT';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('label-success')).toBe(true);
            expect(testEl.nativeElement.classList.contains('label-info')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-danger')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-grey')).toBe(false);
        });

        it('"FUTURE" adds "label-info" label class', () => {
            testHost.testStatus = 'FUTURE';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('label-success')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-info')).toBe(true);
            expect(testEl.nativeElement.classList.contains('label-danger')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-grey')).toBe(false);
        });

        it('"PRIOR" adds "label-danger" label class', () => {
            testHost.testStatus = 'PRIOR';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('label-success')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-info')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-danger')).toBe(true);
            expect(testEl.nativeElement.classList.contains('label-grey')).toBe(false);
        });

        it('"PREVIOUS" adds "label-grey" label class', () => {
            testHost.testStatus = 'PREVIOUS';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('label-success')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-info')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-danger')).toBe(false);
            expect(testEl.nativeElement.classList.contains('label-grey')).toBe(true);
        });

    });
}
