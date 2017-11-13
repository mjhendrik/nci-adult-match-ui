import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-loading-spinner',
  template: `
  <div *ngIf="isLoading">
    <i class="fa fa-cog fa-spin fa-fw"></i>
    <span class="sr-only">Loading...</span>
    <span>Loading...</span>
  </div>
  `
})
export class LoadingSpinnerComponent {
  @Input() isLoading: boolean = true;
}
