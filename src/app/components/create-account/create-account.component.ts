import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { RestService } from 'src/app/core/services/rest.service';

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
    private appService: AppService
  ) {}

  createAccountForm: any;
  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  signup() {
    
  }
}
