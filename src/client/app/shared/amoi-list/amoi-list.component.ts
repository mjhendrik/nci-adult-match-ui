import { Component, Input } from '@angular/core';

interface Amoi {
  status: string;
  treatmentArmId: string;
  treatmentArmVersion: string;
  exclusion: boolean;
}

@Component({
  moduleId: module.id,
  selector: 'amoi-list',
  styleUrls: ['amoi-list.component.css'],
  template: `
    <div *ngIf="isAmoi" class="amoi-status">
        <div *ngFor="let amoi of amoiList">
            <span class="label {{getBadgeColorStyle(amoi)}}" title="{{getTreatmentStatus(amoi)}}"> {{getTreatmentLabel(amoi)}}</span>
            <treatment-arm-link *ngIf="amoi.treatmentArmId" [treatmentArmId]="amoi.treatmentArmId" [version]="amoi.treatmentArmVersion"
            [removePrefix]="true"></treatment-arm-link>
        </div>
    </div>
    <div *ngIf="!isAmoi" class="amoi-status"> - </div>
    `
})
export class AmoiListComponent {
  // tslint:disable-next-line:member-ordering
  amoiList: Amoi[];
  private amoi: any;

  @Input()
  set amois(amoi: any) {
    this.amoi = amoi;
    this.amoiList = this.extractList(amoi);
    console.log(this.amoiList);
  }
  get amois(): any {
    return this.amoi;
  }

  get isAmoi(): boolean {
    return this.amoiList && this.amoiList.length > 0;
  }

  getInclusion(amoi: Amoi) {
    return amoi.exclusion ? 'E' : 'I';
  }

  getDisplayText(amoi: Amoi) {
    return amoi.status;
  }

  getBadgeColorStyle(amoi: Amoi) {
    if (amoi.exclusion)
      return 'label-danger';

    var status = (amoi.status || '').toLowerCase();

    if (status === 'prior')
      return 'label-danger';

    if (status === 'future' && !amoi.exclusion)
      return 'label-primary';

    if (status === 'current' && !amoi.exclusion)
      return 'label-success';

    return '';
  }

  getTreatmentStatus(amoi: Amoi) {
    return amoi.status + (amoi.exclusion ? ' - EXCLUSION' : ' - INCLUSION');
  }

  getTreatmentLabel(amoi: Amoi) {
    return (amoi.status ? amoi.status.substring(0, 1) : '') + (amoi.exclusion ? ' - E' : ' - I');
  }

  private extractList(amoi: any): Amoi[] {
    if (!amoi)
      return [];

    let result: Amoi[] = [];

    Object.keys(amoi).forEach(key => {
      let amoiItems = amoi[key] || [];

      for (let item of amoiItems) {
        for (let x of item.inclusions) {
          result.push({
            status: key,
            treatmentArmId: item.treatmentArmId,
            treatmentArmVersion: x,
            exclusion: false
          });

          for (let x of item.exclusions) {
            result.push({
              status: key,
              treatmentArmId: item.treatmentArmId,
              treatmentArmVersion: x,
              exclusion: true
            });
          }
        }
      }
    });

    return result;
  }
}
