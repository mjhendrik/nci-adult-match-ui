import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigApiService } from './config/config-api.service';
import { TreatmentArmLinkComponent } from './treatment-arm-link/treatment-arm-link.component';
import { PipesModule } from './pipes/pipes.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

 @NgModule({
   imports: [
     CommonModule,
     RouterModule,
     PipesModule
   ],
  declarations: [NavbarComponent, TreatmentArmLinkComponent],
  exports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    TreatmentArmLinkComponent
  ],
  providers: [ConfigApiService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
