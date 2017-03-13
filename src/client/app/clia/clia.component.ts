import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';


/**
 * This class represents the lazy loaded CLIAComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia',
  templateUrl: 'clia.component.html',
  styleUrls: ['clia.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CliaComponent { }
