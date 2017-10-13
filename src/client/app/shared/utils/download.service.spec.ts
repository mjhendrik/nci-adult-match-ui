import {
  Component,
  Input,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';

import { Injectable } from '@angular/core';
import { DownloadService } from './../../shared/utils/download.service';
export function main() {
  describe('download.service downFile', () => {

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
    let testdata = "/test_download_url";
    return Observable.of(testdata);;
  }
}
