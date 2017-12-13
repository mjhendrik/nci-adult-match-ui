import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentArmDetailsComponent } from './treatment-arm-details.component';
import { TreatmentArmDetailsRoutingModule } from './treatment-arm-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TreatmentArmApiService } from '../treatment-arm-api.service';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

export class Tabs {
  activeTab: string;
  hasActive: boolean;

  private tabs: { [key: string]: boolean } = {};

  set(key: string, active: boolean): void {
    this.tabs[key] = active;
    this.hasActive = this.hasActive || active;
    if (active) {
      this.activeTab = key;
    }
  }

  get(key: string, subKey?: string): boolean {
    return this.tabs[key + (subKey || '')] || false;
  }
}

@NgModule({
  imports: [
    CommonModule,
    TreatmentArmDetailsRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    ChartsModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [TreatmentArmDetailsComponent],
  exports: [TreatmentArmDetailsComponent],
  providers: [TreatmentArmApiService]
})
export class TreatmentArmDetailsModule { }
