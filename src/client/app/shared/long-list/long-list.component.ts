import {
  Component,
  Input
} from '@angular/core';

/**
 * This class represents the lazy loaded LongListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-long-list',
  templateUrl: 'long-list.component.html',
  styleUrls: ['long-list.component.css'],
})
export class LongListComponent {
  @Input() items: string;
  @Input() displayItems: number;
}
