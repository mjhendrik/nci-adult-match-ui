import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Request,
    Response,
    Headers
} from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpInterceptor extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch(this.responseError());
    }

    responseError() {
        return (response: Response) => {
            if (response.status === 404) {
                // this.router.navigate(['/dashboard']);
            }
            return Observable.throw(response);
        };
    }
}
