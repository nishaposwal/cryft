import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

function _window() {
  return window;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;
  private authInfo = null;
  loggedIn$ = new Subject();

  constructor(private localStorageService: LocalStorageService) {}

  setAuthInfo(info: any) {
    this.localStorageService.addItem('userInfo', info);
    this.authInfo = info;
  }

  getAuthInfo() {
    return this.authInfo || this.localStorageService.getItem('userInfo');
  }

  getAuthToken() {
    return this.localStorageService.getItem('token');
  }

  setAuthToken(token: any) {
    this.loggedIn$.next(true)
    this.localStorageService.addItem('token', token);
    this.token = token;
  }

  getNativeWindow(): any {
    return _window();
  }

  logout(){
    this.loggedIn$.next(false);
    this.localStorageService.removeItem('token')
  }
}
