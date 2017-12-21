import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class FileUploadResult {
    success: boolean;
    fileType: string;
}

@Injectable()
export class FileUploadNotificationService {
    private _done: BehaviorSubject<FileUploadResult> = new BehaviorSubject({ success: false, fileType: 'none' });

    get onDone(): Observable<FileUploadResult> {
        return this._done.asObservable();
    }

    done(success: FileUploadResult): void {
        this._done.next(success);
    }
}
