import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getEnvVariable(param : any) {
    let env : any  = environment;
    return env[param];
  }
}
