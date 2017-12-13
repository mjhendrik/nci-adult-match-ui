import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FaIconDirective } from './fa-icon.directive';

@Component({
    template: `<span [faIcon]="testStatus">Some Text</span>`
})
class TestHostComponent {
    testStatus: string;
}

export function main() {
    describe('FaIconDirective', () => {
        let testHost: TestHostComponent;
        let fixture: ComponentFixture<TestHostComponent>;
        let testEl: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, FaIconDirective]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            testEl = fixture.debugElement.query(By.css('span'));
            fixture.detectChanges();
        });

        it('empty value adds no color class', () => {
            expect(testEl.nativeElement.classList.contains('fa-bar-chart')).toBe(false);
            expect(testEl.nativeElement.classList.contains('fa-user')).toBe(false);
            expect(testEl.nativeElement.classList.contains('fa-medkit')).toBe(false);
        });

        it('"bar-chart" adds "fa-bar-chart" color class', () => {
            testHost.testStatus = 'bar-chart';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('fa-bar-chart')).toBe(true);
            expect(testEl.nativeElement.classList.contains('fa-user')).toBe(false);
            expect(testEl.nativeElement.classList.contains('fa-medkit')).toBe(false);
        });

        it('"user" adds "fa-user" color class', () => {
            testHost.testStatus = 'user';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('fa-bar-chart')).toBe(false);
            expect(testEl.nativeElement.classList.contains('fa-user')).toBe(true);
            expect(testEl.nativeElement.classList.contains('fa-medkit')).toBe(false);
        });

        it('"medkit" adds "fa-medkit" color class', () => {
            testHost.testStatus = 'medkit';
            fixture.detectChanges();
            expect(testEl.nativeElement.classList.contains('fa-bar-chart')).toBe(false);
            expect(testEl.nativeElement.classList.contains('fa-user')).toBe(false);
            expect(testEl.nativeElement.classList.contains('fa-medkit')).toBe(true);
        });

    });
}
