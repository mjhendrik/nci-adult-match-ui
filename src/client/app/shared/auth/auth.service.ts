import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import { Config } from '../config/env.config';

// Avoid name not found warnings
declare var auth0: any;

@Injectable()
export class Auth {

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: Config.AUTH_DOMAIN,
    clientID: Config.CLIENT_ID,
    redirectUri: Config.REDIRECT_URL,
    responseType: 'token id_token'
  });

  constructor(private router: Router) {
  }

  public handleAuthentication(): void {
    this.auth0.parseHash({ _idTokenVerification: false }, (err: any, authResult: any) => {
      if (err) {
        alert(`Error: ${err.errorDescription}`);
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  public login(username: string, password: string): void {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password
    }, (err: any) => {
      if (err) return alert(err.description);
    });
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired('id_token');
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  }

  private setUser(authResult: any): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}
