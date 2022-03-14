import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
// import {StepperOrientation} from '@angular/material/stepper';
import {map} from 'rxjs/operators';
import { RestService } from 'src/app/core/services/rest.service';
import { AppService } from 'src/app/core/services/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-connect-exchange',
  templateUrl: './connect-exchange.component.html',
  styleUrls: ['./connect-exchange.component.scss']
})

export class ConnectExchangeComponent implements OnInit {
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  // stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, 
    private restService: RestService,
    private appService: AppService,
    
    private toastr: ToastrService,) {
  //   this.stepperOrientation = breakpointObserver
  //     .observe('(min-width: 800px)')
  //     .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  apiKey: any;
 secretKey: any;

  ngOnInit(): void {

  }

  connectEx() {
    let payload = {
      apiKey: this.apiKey,
      secretKey: this.secretKey,
      exchange: 'wazirx'
    }
    this.restService
    .post(
      `${this.appService.getEnvVariable('API_HOST')}/invest/connect-exchange`,
      payload
    ) 
    .subscribe(
      (res) => {
        this.toastr.success("Connected Successfully");
      },
      (error) => this.toastr.error(JSON.stringify(error.error))
    );
  }

}
