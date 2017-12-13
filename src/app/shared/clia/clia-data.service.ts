import { Injectable, Input } from '@angular/core';

@Injectable()
export class CliaDataService {
  value: any;

  public _test:any;

  set transferData(value:any) {
    this._test = value
  }

  get transferData():any {
    return this._test;
  }
}
