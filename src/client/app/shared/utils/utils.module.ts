import { NgModule } from '@angular/core';

import { DownloadService } from './download.service';
import { ScrollService } from './scroll.to.service';

@NgModule({
  providers: [
    DownloadService,
    ScrollService,
    { provide: Window, useValue: window }
  ],
})
export class UtilsModule { }
