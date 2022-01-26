import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  loggedIn$ = new Subject();
  profile$ = new Subject();
  private profile: any;

  constructor(
    private localStorageService: LocalStorageService,
    private restService: RestService,
    private appService: AppService
  ) {}

  setAuthInfo(info: any) {
    this.localStorageService.addItem('userInfo', info);
    this.authInfo = info;
  }

  setProfile(data: any) {
    this.profile = data;
    this.profile$.next(data);
  }

  getServerProfile() {
    return this.restService.get(
      `${this.appService.getEnvVariable('API_HOST')}/users/profile`
    );
  }

  getProfile(){
    return this.profile;
  }

  getAuthInfo() {
    return this.authInfo || this.localStorageService.getItem('userInfo');
  }

  getAuthToken() {
    return this.localStorageService.getItem('token');
  }

  setAuthToken(token: any) {
    this.loggedIn$.next(true);
    this.localStorageService.addItem('token', token);
    this.token = token;
  }

  getNativeWindow(): any {
    return _window();
  }

  logout() {
    this.loggedIn$.next(false);
    this.setProfile({});
    this.localStorageService.removeItem('token');
  }
}
