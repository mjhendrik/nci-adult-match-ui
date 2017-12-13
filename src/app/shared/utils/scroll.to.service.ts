import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {
  constructor(private window: Window) { }

  scrollToElement(id: string): void {
    let element = window.document.getElementById(id);
    if (element) {
      setTimeout(() => { window.scroll(0, element.offsetTop); });
    }
  }
}
