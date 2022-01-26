import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from './core/services/app.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cryft';
  constructor(
    private router: Router,
    private appService: AppService,
    private authService: AuthService,
  ) {
   
  }
 
  ngOnInit(): void {
    console.log("link", location.href)
    let url = location.href;
    if (url.includes('reset-password')) {
      this.appService.setResetTokenFromUrl(location.href);
      this.router.navigate(['/reset-password']);
    }
  }
}
