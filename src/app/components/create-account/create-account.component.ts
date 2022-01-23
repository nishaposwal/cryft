import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RestService } from 'src/app/core/services/rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private restService: RestService,
    private appService: AppService,
    private authSrvice : AuthService,
    private toastr: ToastrService
  ) {}

  createAccountForm: any;
  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  signup() {
    if (
      this.createAccountForm.valid &&
      this.createAccountForm.controls['password'].value ===
        this.createAccountForm.controls['confirm_password'].value
    ) {
      this.restService
        .post(`${this.appService.getEnvVariable('API_HOST')}/users/register`, {
          ...this.createAccountForm.value,
        })
        .subscribe((res:any) => {
          this.authSrvice.setAuthToken(res.token)
          this.router.navigate(['/cryft']);
          this.toastr.success("Signed up successfully")
        }, error => this.toastr.error(JSON.stringify(error.error)));
    }
  }
}
