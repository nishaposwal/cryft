import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cryft';
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    let url = location.href;
    if (url.includes('reset-password')) {
      this.appService.setResetTokenFromUrl(location.href);
      this.router.navigate(['/reset-pass']);
    }
  }
}
