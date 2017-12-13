import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ActivatedRouteStub {
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
