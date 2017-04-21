import {
  Component,
  Input
} from '@angular/core';

/**
 * LongListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-long-list',
  templateUrl: 'long-list.component.html',
  styleUrls: ['long-list.component.css']
})
export class LongListComponent {
  displayItems: string[] = [];

  @Input() title: string;

  private _items: string[];
  // tslint:disable-next-line:member-ordering
  @Input()
  set items(value: string[]) {
    // tslint:disable-next-line:triple-equals
    this._items = (value !== null) ? value : [];
    this.update();
  }

  get items(): string[] { return this._items; }

  private _maxDisaplayItems: number = 5;
  // tslint:disable-next-line:member-ordering
  @Input()
  set maxDisaplayItems(value: number) {
    // tslint:disable-next-line:triple-equals
    this._maxDisaplayItems = (value !== null) ? value : 0;
    this.update();
  }

  get maxDisaplayItems(): number { return this._maxDisaplayItems; }

  private update(): void {
    if (this._items && this._items.length) {
      this.displayItems = this._items.slice(0, this._maxDisaplayItems);
    } else {
      this.displayItems = [];
    }
  }
}
