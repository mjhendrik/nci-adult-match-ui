import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FileUploadNotificationService {
    private _done: BehaviorSubject<boolean> = new BehaviorSubject(false);

    get onDone(): Observable<boolean> {
        return this._done.asObservable();
    }

    done(success: boolean): void {
        this._done.next(success);
    }
}
