import {
    DebugElement
} from '@angular/core';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router/router';

import { TreatmentArmLinkComponent } from './treatment-arm-link.component';
import { SharedModule } from '../shared.module';

export function main() {
    xdescribe('TreatmentArmLinkComponent component', () => {
        console.info('Debugging');

        let comp: TreatmentArmLinkComponent;
        let fixture: ComponentFixture<TreatmentArmLinkComponent>;
        let de: DebugElement;
        let el: HTMLElement;

        // async beforeEach
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SharedModule, Router]
            }).compileComponents();  // compile template and css
        }));

        // synchronous beforeEach
        beforeEach(() => {
            fixture = TestBed.createComponent(TreatmentArmLinkComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('ta-link'));
            el = de.nativeElement;
        });

        it('no title in the DOM until manually call `detectChanges`', () => {
            expect(el.textContent).toEqual('');
        });

        it('should display original ID if it contains non-standard prefix', () => {
            comp.treatmentArmId = 'ABCDE';
            fixture.detectChanges();
            expect(comp.prefix).toBe('');
            expect(comp.suffix).toBe('ABCDE');
        });
    });
}
