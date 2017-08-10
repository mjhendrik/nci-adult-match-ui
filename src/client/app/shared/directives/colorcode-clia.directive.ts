import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[colorCodeClia]' })
export class ColorCodeCliaDirective {

    private colorCodeCliaValue?: string = null;

    @Input() set colorCodeClia(value: string) {
        this.colorCodeCliaValue = value;
        this.setColor();
    }
    get colorCodeClia(): string {
        return this.colorCodeCliaValue;
    }

    constructor(private el: ElementRef) { }

    private setColor() {
        if (this.colorCodeClia === 'PASSED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeClia === 'FAILED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorCodeClia === 'PENDING') {
            this.el.nativeElement.classList.add('text-purple-light');
        }

    }

}
