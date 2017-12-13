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
import { CosmicLinkComponent } from './cosmic-link/cosmic-link.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileService } from './user-profile/user-profile.service';
import { AmoiListComponent } from './amoi-list/amoi-list.component';
import { InlinePairsComponent } from './inline-pairs/inline-pairs.component';
import { PopoverModule } from 'ngx-bootstrap';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    PopoverModule
  ],
  declarations: [
    NavbarComponent,
    TreatmentArmLinkComponent,
    CosmicLinkComponent,
    FooterComponent,
    AmoiListComponent,
    InlinePairsComponent
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    TreatmentArmLinkComponent,
    CosmicLinkComponent,
    FooterComponent,
    AmoiListComponent,
    InlinePairsComponent
  ],
  providers: [ConfigApiService, UserProfileService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
