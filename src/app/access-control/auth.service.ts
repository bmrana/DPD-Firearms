import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as hello from 'hellojs/dist/hello.all.js';
import { Configs } from '../access-control/configs';

@Injectable()

export class AuthService {

  constructor(
    private zone: NgZone,
    private router: Router
  ) { }

  initAuth() {
    hello.init({
        msft: {
          id: Configs.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.origin }
    );
  }

  login() {
    hello('msft').login({ scope: Configs.scope, display: 'page', force: false }).then(
      () => {
        this.zone.run(() => {
          this.router.navigate(['app']);
        });
      },
      e => console.error(e.error.message)
    );
  }

  logout() {
    hello('msft').logout().then(
      () => window.location.href = '/',
      e => console.error(e.error.message)
    );
  }

  isLoggedIn() {
    const isAuthenticated = function(session) {
      const currentTime = (new Date()).getTime() / 1000;
      return session && session.access_token && session.expires > currentTime;
    };

    const getSession = hello('msft').getAuthResponse();
    
    return isAuthenticated(getSession);
  }
}