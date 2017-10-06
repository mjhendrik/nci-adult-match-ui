import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { Config } from '../../shared/config/env.config';
import { ApiService } from '../../shared/api/api.service';
import { FileUploadComponent } from './file-upload.component';

export interface FileSet {
  zipFile: string;
  dnaFile: string;
  cdnaFile: string;
}

@Injectable()
export class FileUploadService extends ApiService {
  protected get baseApiUrl(): string { return Config.API.MESSAGE; }

  msn: string;

  paths: FileSet = {
    zipFile: '',
    dnaFile: '',
    cdnaFile: ''
  };

  constructor(
    private modalService: BsModalService,
    http: AuthHttp) {

    super(http);
  }

  openUploadDialog(msn: string) {
    // this.modalService.show(FileUploadComponent);
  }

  getPresignUrls(): Observable<FileSet> {
    return Observable.forkJoin(
      this.http.post(Config.API.MESSAGE + '/message/clia/aliquot/presign_url?filename=' + this.paths.zipFile + '&msn=' + this.msn, ''),
      this.http.post(Config.API.MESSAGE + '/message/clia/aliquot/presign_url?filename=' + this.paths.dnaFile + '&msn=' + this.msn, ''),
      this.http.post(Config.API.MESSAGE + '/message/clia/aliquot/presign_url?filename=' + this.paths.cdnaFile + '&msn=' + this.msn, '')
    ).map(
      data => {
        return {
          zipFile: this.extractData(data[0]),
          dnaFile: this.extractData(data[1]),
          cdnaFile: this.extractData(data[2])
        };
      }
    );
  }
}
