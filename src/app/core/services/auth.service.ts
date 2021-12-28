import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from './app.service';
import { LocalStorageService } from './local-storage.service';
import { RestService } from './rest.service';

function _window() {
  return window;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;
  private authInfo = null;

  constructor(private localStorageService: LocalStorageService) {}

  setAuthInfo(info: any) {
    this.localStorageService.addItem('userInfo', info);
    this.authInfo = info;
  }

  getAuthInfo() {
    return this.authInfo || this.localStorageService.getItem('userInfo');
  }

  getAuthToken() {
    return this.token;
  }

  setAuthToken(token: any) {
    this.token = token;
  }

  getNativeWindow() {
    return _window();
  }
}
