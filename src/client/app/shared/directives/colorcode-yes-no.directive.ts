import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const yesRe = new RegExp(/y|yes|true/i).compile();

@Directive({ selector: '[colorCodeYesNo]' })
export class ColorCodeYesNoDirective implements OnInit {

    @Input() colorCodeYesNo: string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeYesNo === null)
            return;

        if (this.colorCodeYesNo.match(yesRe)) {
            this.el.nativeElement.classList.add('text-success-light');
        } else {
            this.el.nativeElement.classList.add('text-danger-light');
        }
    }
}
