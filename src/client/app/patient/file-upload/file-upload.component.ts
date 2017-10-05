import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload',
  templateUrl: 'file-upload.component.html'
})
export class FileUploadComponent {
  @Input() items: any;

  getIcon(status: string): string {
    return 'fa-user-o';
  }
}
