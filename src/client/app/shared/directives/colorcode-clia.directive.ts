import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeClia]' })
export class ColorCodeCliaDirective implements OnInit {

    @Input() 'colorcodeClia': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorcodeClia === 'PASSED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorcodeClia === 'FAILED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorcodeClia === 'PENDING') {
            this.el.nativeElement.classList.add('text-purple-light');
        }

    }

}
