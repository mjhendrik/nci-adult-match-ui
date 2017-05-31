import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../shared/config/env.config';
import { AuthHttp } from 'angular2-jwt';

// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class TreatmentArmApiService {

  /**
   * Creates a new TreatmentArmApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(private http: AuthHttp) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getTreatmentArmDetails(): Observable<any[]> {

    return this.http.get('assets/mock-data/treatment-arm-details-new.json')

      // return this.http.get(Config.API.TREATMENT_ARM + '/treatment_arms/' + treatmentId
      //   + `?active=true&projection=treatmentId,name,version,treatmentArmDrugs,gene,numPatientsAssigned,treatmentArmStatus,statusLog,
      //     assayResults,exclusionDiseases,exclusionDrugs,variantReport,summaryReport`)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getPreviousTreatmentArmDetails(): Observable<any[]> {

    return this.http.get('assets/mock-data/treatment-arm-details-new-previous.json')

      // return this.http.get(Config.API.TREATMENT_ARM + '/treatment_arms/' + treatmentId
      //   + `?projection=treatmentId,name,version,treatmentArmDrugs,gene,numPatientsAssigned,treatmentArmStatus,statusLog,assayResults,
      //     exclusionDiseases,exclusionDrugs,variantReport,dateArchived,summaryReport`)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getTreatmentArmVersions(): Observable<any[]> {

    return this.http.get('assets/mock-data/treatment-arm-details-version.json')

      // return this.http.get(Config.API.TREATMENT_ARM + '/treatment_arms/' + treatmentId + '?projection=dateArchived,version')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getTreatmentArmList(): Observable<any[]> {

    // return this.http.get('assets/mock-data/treatment-arm-list.json')

    return this.http.get(Config.API.TREATMENT_ARM
      + '/treatment_arms?active=true&projection=treatmentId,name,treatmentArmStatus,dateCreated,statusLog,summaryReport')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
