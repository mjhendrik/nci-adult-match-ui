import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[faIcon]' })
export class FaIconDirective implements OnInit {

    @Input() 'faIcon': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.faIcon === 'bar-chart') {
            this.el.nativeElement.classList.add('fa-bar-chart');
        } else if (this.faIcon === 'user') {
            this.el.nativeElement.classList.add('fa-user');
        } else if (this.faIcon === 'medkit') {
            this.el.nativeElement.classList.add('fa-medkit');
        }

    }

}
