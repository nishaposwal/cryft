import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore

import transakSDK from '@transak/transak-sdk'


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private router: Router
  ) {

    
   }

  ngOnInit(): void {
  }

  getStarted() {
    this.router.navigate(['/invest'])
  }

}



// {
//   "status": {
//       "id": "13b85df1-8f71-45ac-9552-a091bba695b3",
//       "walletAddress": "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23",
//       "createdAt": "2022-02-26T12:53:22.570Z",
//       "status": "PENDING_DELIVERY_FROM_TRANSAK",
//       "fiatCurrency": "INR",
//       "userId": "3cfb5f69-a28c-4efb-b011-6b41909af087",
//       "cryptoCurrency": "BTC",
//       "isBuyOrSell": "BUY",
//       "fiatAmount": 5000,
//       "amountPaid": 5000,
//       "paymentOptionId": "upi",
//       "walletLink": "https://www.blockchain.com/btc/address/bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23",
//       "bankId": "caa22d5f-c507-4342-898a-1f3b35d6fa60",
//       "addressAdditionalData": false,
//       "network": "mainnet",
//       "conversionPrice": 3.260952028640167e-7,
//       "cryptoAmount": 0.00159787,
//       "totalFeeInFiat": 100,
//       "fiatAmountInUsd": 63.53,
//       "referenceCode": 976275,
//       "paymentOptions": [],
//       "autoExpiresAt": "2022-02-26T13:08:22+00:00",
//       "statusHistories": [
//           {
//               "status": "AWAITING_PAYMENT_FROM_USER",
//               "createdAt": "2022-02-26T12:53:25.063Z",
//               "message": "*📦 New order by Simran Sidhu* \n*Order Id:* 13b85df1-8f71-45ac-9552-a091bba695b3\n*Email:* kaursimransidhu1@gmail.com\n*Crypto Amount:* 0.00159787 BTC\n*Fiat Amount:* 5000 INR\n*Payment Method:*  upi\n*Liquidity Provider*  HYPTO\n*Wallet Address:* bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23\n*Reference Code:* 976275 \n*Partner name:* Kilope",
//               "isEmailSentToUser": false,
//               "partnerEventId": "ORDER_CREATED"
//           },
//           {
//               "status": "PENDING_DELIVERY_FROM_TRANSAK",
//               "createdAt": "2022-02-26T12:54:11.553Z",
//               "message": "*💸 Payment reconciled successfully. Received 5000 INR",
//               "isEmailSentToUser": false,
//               "partnerEventId": "ORDER_PROCESSING"
//           }
//       ]
//   },
//   "eventName": "TRANSAK_ORDER_SUCCESSFUL"
// }



// {
//   "status": {
//       "id": "68255ec9-0c72-4137-bcc9-5f49d604907d",
//       "walletAddress": "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23",
//       "createdAt": "2022-02-26T12:56:25.197Z",
//       "status": "PENDING_DELIVERY_FROM_TRANSAK",
//       "fiatCurrency": "INR",
//       "userId": "3cfb5f69-a28c-4efb-b011-6b41909af087",
//       "cryptoCurrency": "BTC",
//       "isBuyOrSell": "BUY",
//       "fiatAmount": 5000,
//       "amountPaid": 5000,
//       "paymentOptionId": "upi",
//       "walletLink": "https://www.blockchain.com/btc/address/bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23",
//       "bankId": "caa22d5f-c507-4342-898a-1f3b35d6fa60",
//       "addressAdditionalData": false,
//       "network": "mainnet",
//       "conversionPrice": 3.2541876075604743e-7,
//       "cryptoAmount": 0.00159455,
//       "totalFeeInFiat": 100,
//       "fiatAmountInUsd": 63.53,
//       "referenceCode": 976275,
//       "paymentOptions": [],
//       "autoExpiresAt": "2022-02-26T13:11:25+00:00",
//       "statusHistories": [
//           {
//               "status": "AWAITING_PAYMENT_FROM_USER",
//               "createdAt": "2022-02-26T12:56:27.441Z",
//               "message": "*📦 New order by Simran Sidhu* \n*Order Id:* 68255ec9-0c72-4137-bcc9-5f49d604907d\n*Email:* kaursimransidhu1@gmail.com\n*Crypto Amount:* 0.00159455 BTC\n*Fiat Amount:* 5000 INR\n*Payment Method:*  upi\n*Liquidity Provider*  HYPTO\n*Wallet Address:* bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23\n*Reference Code:* 976275 \n*Partner name:* Kilope",
//               "isEmailSentToUser": false,
//               "partnerEventId": "ORDER_CREATED"
//           },
//           {
//               "status": "PENDING_DELIVERY_FROM_TRANSAK",
//               "createdAt": "2022-02-26T12:56:30.047Z",
//               "message": "*💸 Payment reconciled successfully. Received 5000 INR",
//               "isEmailSentToUser": false,
//               "partnerEventId": "ORDER_PROCESSING"
//           },
//           {
//               "status": "PENDING_DELIVERY_FROM_TRANSAK",
//               "createdAt": "2022-02-26T12:56:30.372Z",
//               "message": "*💸 Payment reconciled successfully. Received 5000 INR",
//               "isEmailSentToUser": false,
//               "partnerEventId": "ORDER_PROCESSING"
//           }
//       ]
//   },
//   "eventName": "TRANSAK_ORDER_SUCCESSFUL"
// }