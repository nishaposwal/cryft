import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RestService } from 'src/app/core/services/rest.service';

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
    private router: Router
  ) {}

  cryptos = [
    {
      id: 1,
      currency: 'btc',
      img: 'gift-card.png',
    },
    {
      id: 2,
      currency: 'Ether',
      img: 'gift-card1.png',
    },
    {
      id: 3,
      currency: 'Ghonchu',
      img: 'gift-card.png',
    },
    {
      id: 4,
      currency: 'type4',
      img: 'gift-card1.png',
    },
    {
      id: 5,
      currency: 'type5',
      img: 'gift-card.png',
    },
    {
      id: 6,
      currency: 'type6',
      img: 'gift-card1.png',
    },
    {
      id: 7,
      currency: 'type7',
      img: 'gift-card.png',
    },
    {
      id: 8,
      currency: 'type8',
      img: 'gift-card1.png',
    },
  ];

  amounts = [100, 200, 500, 1000];
  profile: any;
  selectedAmount = 100;
  selectedCrypto: any;
  isloggedIn = false;
  options: any = {
    key: 'rzp_live_FM5EtJ4ekjxFo5',
    currency: 'INR',
    name: 'CryFt',
    description: 'Test Transaction',
    image: '',
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#08133d',
    },
  };

  deliveryForm: any;
  ngOnInit(): void {
    this.selectedCrypto = this.cryptos[0];
    this.deliveryForm = this.formBuilder.group({
      recipeintName: ['', Validators.required],
      recipeintEmail: ['', Validators.required],
      message: [''],
      deliveryDateTime: ['', Validators.required],
      money: [100, Validators.required],
      currency: [this.selectedCrypto.currency, Validators.required],
      contactNo: ['', Validators.required],
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
          contact: this.deliveryForm.controls['contactNo'].value,
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
        console.log(res);
      });
  }

  buyNow() {
    if (this.isloggedIn) {
      console.log(this.deliveryForm?.value);
      this.createOrder();
    } else {
      this.router.navigate(['login']);
    }
  }

  sendByNowRequest() {}
}
