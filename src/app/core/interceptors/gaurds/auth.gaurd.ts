import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { promise } from 'selenium-webdriver';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
    this.authService.loggedIn$.subscribe((res) => {
      if (res) {
        this.isLoggedIn = true;
      }
    });
  }

  isLoggedIn = this.authService.getAuthToken() ? true : false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLoggedIn;
  }
}
