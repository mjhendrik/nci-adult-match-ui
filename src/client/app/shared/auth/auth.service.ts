import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Config } from '../config/env.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  lockOptions: any = {
    theme: {
      logo: 'assets/svg/nci-logo-full.svg',
      primaryColor: '#2d8ca9' // dark-info-color of the theme
    },
    languageDictionary: {
      title: 'NCI-MATCH'
    }
  };

  // Configure Auth0
  lock = new Auth0Lock(Config.CLIENT_ID, Config.AUTH_DOMAIN, this.lockOptions);

  private userProfile: any;

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });

      this.router.navigate(['dashboard']);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
  };
}
