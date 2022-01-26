import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
})
export class ChangeComponent implements OnInit {
  constructor(
    private restService: RestService,
    private appService: AppService,
    private router: Router
  ) {}
  password: String = '';
  newPassword: String = '';
  token: String = '';
  ngOnInit(): void {
    this.token = this.appService.getResetToken();
  }

  changePassword() {
    let payload = {
      password: this.password,
      token: this.token,
    };
    this.restService
      .post(
        `${this.appService.getEnvVariable('API_HOST')}/users/reset-password`,
        payload
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['login']);
      });
  }
}
