import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';
import * as auth0 from 'auth0-js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AUTH_CONFIG } from './auth-config';
import { environment } from '../../../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  auth0Options = {
    theme: {
      logo: 'assets/svg/nci-logo-full.svg',
      primaryColor: '#2d8ca9' // dark-info-color of the theme
    },
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      redirect: false,
      responseType: 'token id_token',
      // audience: `https://${environment.auth0.domain}/userinfo`,
      params: {
        scope: 'openid name email roles'
      }
    },
    // autoclose: true,
    // oidcConformant: true,
  };

  lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );

  userProfile: any;
  isLoggedIn: boolean;
  loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn);

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
        this.isLoggedIn = true;
        this.loggedIn.next(this.isLoggedIn);
      });

      this.router.navigate(['dashboard']);
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login() {
    this.lock.show();
  }

  logout() {
    // Remove tokens and profile and update login status subject
    localStorage.removeItem('token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    this.userProfile = undefined;
    this.setLoggedIn(false);
    // Go back to the home route
    this.router.navigate(['/login']);
  }

  public get authenticated(): boolean {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    // this.loggedIn.next(value);
    this.isLoggedIn = value;
  }

  // // Create Auth0 web auth instance
  // auth0 = new auth0.WebAuth({
  //   clientID: AUTH_CONFIG.CLIENT_ID,
  //   domain: AUTH_CONFIG.CLIENT_DOMAIN,
  //   responseType: 'token id_token',
  //   redirectUri: AUTH_CONFIG.REDIRECT,
  //   audience: AUTH_CONFIG.AUDIENCE,
  //   scope: AUTH_CONFIG.SCOPE
  // });

  // lock = new Auth0Lock(AUTH_CONFIG.CLIENT_ID, AUTH_CONFIG.CLIENT_DOMAIN, {
  //   autoclose: true,
  //   theme: {
  //     logo: 'assets/svg/nci-logo-full.svg',
  //     primaryColor: '#2d8ca9' // dark-info-color of the theme
  //   },
  //   languageDictionary: {
  //     title: 'NCI-MATCH'
  //   },
  //   auth: {
  //     redirectUrl: AUTH_CONFIG.REDIRECT,
  //     responseType: 'token id_token',
  //     audience: `https://${AUTH_CONFIG.CLIENT_DOMAIN}/userinfo`,
  //     params: {
  //       scope: 'openid name'
  //     }
  //   }
  // });

  // userProfile: any;
  // isLoggedIn: boolean;
  // loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn);

  // constructor(private router: Router) {
  //   // If authenticated, set local profile property and update login status subject
  //   // If token is expired, log out to clear any data from localStorage
  //   if (this.authenticated) {
  //     this.userProfile = JSON.parse(localStorage.getItem('profile'));
  //     this.setLoggedIn(true);
  //   } else {
  //     this.logout();
  //   }
  // }

  // setLoggedIn(value: boolean) {
  //   // Update login status subject
  //   this.loggedIn.next(value);
  //   this.isLoggedIn = value;
  // }

  // public login(): void {
  //   this.lock.show();
  // }

  // // Call this method in app.component.ts
  // // if using path-based routing
  // public handleAuthentication(): void {
  //   this.lock.on('authenticated', (authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.getProfile(authResult);
  //       this.router.navigate(['/dashboard']);
  //     }
  //   });
  //   this.lock.on('authorization_error', (err) => {
  //     this.router.navigate(['/login']);
  //     console.log(err);
  //     alert(`Error: ${err.error}. Check the console for further details.`);
  //   });
  // }

  // // Call this method in app.component.ts
  // // if using hash-based routing
  // public handleAuthenticationWithHash(): void {
  //   this
  //     .router
  //     .events
  //     .filter(event => event instanceof NavigationStart)
  //     .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
  //     .subscribe(() => {
  //       this.lock.resumeAuth(window.location.hash, (err, authResult) => {
  //         if (err) {
  //           this.router.navigate(['/login']);
  //           console.log(err);
  //           alert(`Error: ${err.error}. Check the console for further details.`);
  //           return;
  //         }
  //         this.getProfile(authResult);
  //         this.router.navigate(['/login']);
  //       });
  //     });
  // }

  // private getProfile(authResult) {
  //   this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
  //     if (error) {
  //       // Handle error
  //       alert(error);
  //       return;
  //     }
  //     this.setSession(authResult, profile);
  //   });
  // }

  // private setSession(authResult, profile): void {
  //   const expTime = authResult.expiresIn * 1000 + Date.now();
  //   localStorage.setItem('token', authResult.accessToken);
  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('profile', JSON.stringify(profile));
  //   localStorage.setItem('expires_at', JSON.stringify(expTime));
  //   this.userProfile = profile;
  //   this.setLoggedIn(true);
  // }

  // public logout(): void {
  //   // Remove tokens and profile and update login status subject
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('profile');
  //   localStorage.removeItem('expires_at');
  //   this.userProfile = undefined;
  //   this.setLoggedIn(false);
  //   // Go back to the home route
  //   this.router.navigate(['/login']);
  // }

  // public get authenticated(): boolean {
  //   // Check whether the current time is past the
  //   // access token's expiry time
  //   const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  //   return new Date().getTime() < expiresAt;
  // }
}
