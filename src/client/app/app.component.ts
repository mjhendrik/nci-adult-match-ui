import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { Auth } from './shared/auth.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private auth: Auth) { }
}
