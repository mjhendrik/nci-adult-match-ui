import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ColorCodeCliaIonDirective } from './colorcode-clia-ion.directive';

export function main() {
    describe('Pipe: Default', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ColorCodeCliaIonDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testEl = fixture.debugElement.query(By.css('span'));
            fixture.detectChanges();
        });

        it('empty value adds "text-danger-light" class', () => {
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
        });

        xit('"Contacted" in the text adds "text-success-light" color class', () => {
            testHost.testStatus = 'This lab has been Contacted';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(true);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(false);
        });

        it('Not having "Contacted" in the text adds "text-danger-light" color class', () => {
            testHost.testStatus = 'Some other random text';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('text-success-light')).toBe(false);
            expect(testEl.nativeElement.classList.contains('text-danger-light')).toBe(true);
        });
    });
}

@Component({
    template: `<span [colorCodeCliaIon]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus: string;
}
