import { Injectable } from '@angular/core';

/*
*  View transformation service
*/
@Injectable()
export class ViewDataTransformer {
  transformPatient(source: any): any {
    const transformed: any = {... source}; // Deep-copy the source

    transformed.disease = source.diseases && source.diseases.length ? source.diseases[0] : null;

    if (transformed.biopsies && transformed.biopsies.length) {
      transformed.biopsies = transformed.biopsies.reverse().map((x: any) => this.transformBiopsy(x));
    }

    if (transformed.races && transformed.races.length) {
      transformed.raceList = transformed.races.join(', ');
    }

    return transformed;
  }

  transformBiopsy(source: any): any {
    let transformed = source;

    return transformed;
  }
}
