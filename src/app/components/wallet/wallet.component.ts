import { Component, OnInit } from '@angular/core';
//@ts-ignore
import transakSDK from '@transak/transak-sdk'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

transak: any;
  constructor() { }

  ngOnInit(): void {

   this.transak = new transakSDK({
      apiKey: '6cdf8379-a8ce-4161-9c5e-6caed32f4119',  // Your API Key
      environment: 'STAGING', // STAGING/PRODUCTION
      hostURL: window.location.origin,
      widgetHeight: '625px',
      widgetWidth: '500px',
      cryptoCurrencyCode: 'usdt', // for now keepng only usdt 
      walletAddress: '0xc46f6bd8e56d749579900718739b3d8fb33bb1da', // Give wallet address data for more crypto currencies 
      disableWalletAddressForm: true,
      themeColor: '#4B6CFF', // App theme color
      exchangeScreenTitle: "Recharge USDT for investment",
      email: 'rainav277@gmail.com', // Your customer's email address
      redirectURL: '',
      userData: {
        "firstName": "Simran",
        "lastName": "Sidhu",
        "email": "rainav277@gmail.com",
        "mobileNumber": "+19692154942",
        "dob": "1990-11-26",
        "address": {
            "addressLine1": "24/172",
            "addressLine2": "mansarovaar",
            "city": "Jaipur",
            "state": "Rajasthan",
            "postCode": "302020",
            "countryCode": "IN"
        }
    }, 
  });
  
  
  //
  
  // To get all the events
  this.transak.on(this.transak.ALL_EVENTS, (data:any ) => {
      console.log(data)
  });
  
  // This will trigger when the user marks payment is made.
  this.transak.on(this.transak.EVENTS.transak_ORDER_SUCCESSFUL, (orderData: any) => {
      console.log(orderData);
      this.transak.close();
  });
  }

  
  eventWallet (event: any) {
    if (event.index == 1) {
      this.transak.init();
    }
  }
}
