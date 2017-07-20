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
import { Config } from './config/env.config';

const anyParamRe = '([-a-zA-Z0-9:%_\+.~#?&//=]+)';
const exlcudedFromHandlingUrlPatterns = [
    RegExp(Config.API.PATIENT + '/patients/' + anyParamRe + '/variant_reports/' + anyParamRe + '/copy_number_report')
];

@Injectable()
export class HttpInterceptor extends Http {
    excludedFromErrorHandling(url: string): any {
        if (!url)
            return false;

        try {
            for (const re of exlcudedFromHandlingUrlPatterns) {
                if (re.test(url)) {
                    return true;
                }
            }
        } catch (error) {
            return false;            
        }

        return false;
    }

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch(this.responseError());
    }

    responseError() {
        return (response: Response) => {
            if (response.status === 404 && !this.excludedFromErrorHandling(response.url)) {
                this.router.navigate(['/error']);
            }
            return Observable.throw(response);
        };
    }
}
