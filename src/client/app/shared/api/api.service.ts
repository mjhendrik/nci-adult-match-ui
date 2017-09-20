import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Response } from '@angular/http';

export abstract class ApiService {
  constructor(protected http: AuthHttp) { }

  /**
    * Handle HTTP error
    */
  protected handleError(error: any): ErrorObservable {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /**
    * Extract data if the response status code is between 200 and 300
    * otherwise throw error
    */
  protected extractData(res: Response): Promise<any> {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return (typeof body !== 'undefined') ? body : null;
  }
}
