import {
  TestBed
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PipesModule } from './../../shared/pipes/pipes.module';

import { DownloadService } from './../../shared/utils/download.service';
export function main() {
  xdescribe('download.service downFile', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          PipesModule,
          FormsModule],
        declarations: [],
        providers: [{ provide: DownloadService, useClass: MockDownloadService }]
      }).compileComponents();
    });

  });
}
class MockDownloadService {
  downloadFile():Observable<any> {
    let testData = '/test_download_url';
    return Observable.of(testData);;
  }
}
