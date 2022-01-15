import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private token: String = 's';
  constructor() {}

  getEnvVariable(param: any) {
    let env: any = environment;
    return env[param];
  }
  getResetToken() {
    return this.token;
  }

  setResetTokenFromUrl(url: String) {
    let arr = url.split('/');
    this.token = arr[arr.length - 1];
  }
}
