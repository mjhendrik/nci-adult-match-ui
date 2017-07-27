import {
    DebugElement
} from '@angular/core';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router/router';

import { PipesModule } from './../../shared/pipes/pipes.module';
import { TreatmentArmLinkComponent } from './treatment-arm-link.component';

export function main() {
    describe('TreatmentArmLinkComponent component', () => {

        let comp: TreatmentArmLinkComponent;
        let fixture: ComponentFixture<TreatmentArmLinkComponent>;
        let de: DebugElement;
        let el: HTMLElement;

        // async beforeEach
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [PipesModule],
                declarations: [TreatmentArmLinkComponent],
            }).compileComponents();  // compile template and css
        }));

        // synchronous beforeEach
        beforeEach(() => {
            fixture = TestBed.createComponent(TreatmentArmLinkComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('ta-link'));
            el = de.nativeElement;
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TreatmentArmLinkComponent);

            comp = fixture.componentInstance;

            de = fixture.debugElement.query(By.css('ta-link'));
            el = de.nativeElement;
        });

        xit('no title in the DOM until manually call `detectChanges`', () => {
            expect(el.textContent).toEqual('');
        });

    });
}

