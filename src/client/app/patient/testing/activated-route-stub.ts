import {
    Injectable,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap, ActivatedRouteSnapshot } from '@angular/router';

import { ViewDataTransformerStub } from './view-data-transformer-stubs';

@Injectable()
export class ActivatedRouteStub {
    // ActivatedRoute.paramMap is Observable
    private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
    // tslint:disable-next-line:member-ordering
    paramMap = this.subject.asObservable();
    private trasformerStub: ViewDataTransformerStub = new ViewDataTransformerStub();

    // Test parameters
    private _testParamMap: ParamMap;
    get testParamMap() { return this._testParamMap; }
    set testParamMap(params: {}) {
        this._testParamMap = convertToParamMap(params);
        this.subject.next(this._testParamMap);
    }

    private actvatedSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();

    // ActivatedRoute.snapshot.paramMap
    get snapshot(): ActivatedRouteSnapshot {
        return this.actvatedSnapshot;
    }

    constructor() {
        this.actvatedSnapshot.data = {};
    }

    toString(): string {
        return "ActivatedRouteStub";
    }
}
