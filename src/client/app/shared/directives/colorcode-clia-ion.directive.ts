import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[colorCodeCliaIon]' })
export class ColorCodeCliaIonDirective {

    private colorCodeCliaIonValue?: string = null;

    @Input() set colorCodeCliaIon(value: string) {
        this.colorCodeCliaIonValue = value;
        this.setColor();
    }
    get colorCodeCliaIon(): string {
        return this.colorCodeCliaIonValue;
    }

    constructor(private el: ElementRef) { }

    private setColor() {
        if (this.colorCodeCliaIon && this.colorCodeCliaIon.indexOf('Contacted') !== -1)
            this.el.nativeElement.classList.add('text-success-light');
        else
            this.el.nativeElement.classList.add('text-danger-light');
    }

}
