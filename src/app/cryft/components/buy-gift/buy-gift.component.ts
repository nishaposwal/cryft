import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { currencies } from 'src/app/constants/constant';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RestService } from 'src/app/core/services/rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buy-gift',
  templateUrl: './buy-gift.component.html',
  styleUrls: ['./buy-gift.component.scss'],
})
export class BuyGiftComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private restService: RestService,
    private appService: AppService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  cryptos = currencies;

  showMsg: boolean = false;
  amounts = [100, 200, 500, 1000];
  profile: any;
  selectedAmount = 100;
  selectedCrypto: any;
  isloggedIn = false;
  options: any = {
    key: 'rzp_live_FM5EtJ4ekjxFo5',
    currency: 'INR',
    name: 'Gappy',
    description: 'Buy Gift',
    image: '',
    notes: {
      address: 'Swaran Path, Mansarovar, Jaipur',
    },
    theme: {
      color: '#4055b5',
    },
  };

  deliveryForm: any;
  ngOnInit(): void {
    this.selectedCrypto = this.cryptos[0];
    this.deliveryForm = this.formBuilder.group({
      recipientName: ['', Validators.required],
      recipientEmail: ['', Validators.required],
      message: [''],
      deliveryDateTime: ['', Validators.required],
      money: [100, [Validators.required, Validators.min(100)]],
      currency: [this.selectedCrypto.marketSymbol, Validators.required],
      currencyName: [this.selectedCrypto.currency, Validators.required],
      deliveryType: ['email', Validators.required],
    });

    this.isloggedIn = this.authService.getAuthToken() ? true : false;
    this.authService.loggedIn$.subscribe((res: any) => {
      this.isloggedIn = res;
    });
    this.restService
      .get(`${this.appService.getEnvVariable('API_HOST')}/users/profile`)
      .subscribe((res) => {
        this.profile = res;
      });
  }

  amount: Number | undefined;

  selecteAmount(amount: number) {
    this.selectedAmount = amount;
    this.deliveryForm.get('money').setValue(amount);
  }

  selectTypeOfCrypto(crypto: any) {
    this.selectedCrypto = crypto;
    this.deliveryForm.get('currency').setValue(this.selectedCrypto.currency);
  }

  print(event: any) {
    console.log(event.target.value);
  }

  createOrder() {
    let that = this;
    let payload = {
      amount: this.deliveryForm.controls['money'].value + '00',
      currency: 'INR',
      receipt: 'receipt',
    };
    this.restService
      .post(
        `${this.appService.getEnvVariable('API_HOST')}/payments/new-order`,
        payload
      )
      .subscribe((res: any) => {
        console.log('lol', res);
        this.options['order_id'] = res.id;
        this.options['prefill'] = {
          name: this.profile.name,
          email: this.profile.email,
          contact: this.profile.contactNo,
        };
        this.options['handler'] = function (res: any) {
          that.varifyPayment(res);
        };
        let rzp1 = this.authService.getNativeWindow().Razorpay(this.options);
        rzp1.open();
      });
  }

  varifyPayment(response: any) {
    let payload = {
      ...this.deliveryForm.value,
      orderId: response.razorpay_order_id,
      paymentId: response.razorpay_payment_id,
      sig: response.razorpay_signature,
    };
    delete payload['contactNo']
    this.restService
      .post(
        `${this.appService.getEnvVariable(
          'API_HOST'
        )}/payments/verify-and-add-gift`,
        payload
      )
      .subscribe((res: any) => {
        this.toastr.success('Gift bought successfully')
        this.deliveryForm.get('money').setValue('');
        this.deliveryForm.get('recipientName').setValue('');
        this.deliveryForm.get('recipientEmail').setValue('');
        this.deliveryForm.get('message').setValue('');
        this.deliveryForm.get('currency').setValue('');
        this.deliveryForm.get('contactNo').setValue('');
        this.deliveryForm.get('deliveryDateTime').setValue('');
        console.log(res);
      }, error =>  this.toastr.error(error.error));
  }

  buyNow() {
    if (this.isloggedIn) {
      console.log(this.deliveryForm?.value);
      this.createOrder();
    } else {
      this.router.navigate(['login']);
    }
  }

  sendByNowRequest() { }
}
