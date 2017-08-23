import { NgModule } from '@angular/core';

import { DownloadService } from './download.service';
import { ScrollService } from './scroll.to.service';

@NgModule({
  imports: [],
  exports: [DownloadService, ScrollService],
  declarations: [DownloadService, ScrollService],
  providers: [],
})
export class NameModule { }
