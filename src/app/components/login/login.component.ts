import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    private router: Router,
    private appService: AppService,
    private restService: RestService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  loginForm: any;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createAccount() {
    this.router.navigate(['/sign-up']);
  }

  login() {
    this.restService
      .post(`${this.appService.getEnvVariable('API_HOST')}/users/login`, {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe((res: any) => {
        if (res.success) {
          this.router.navigate(['/cryft']);
          this.authService.setAuthToken(res.token);
        }
      });
  }
}
