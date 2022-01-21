import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RestService } from 'src/app/core/services/rest.service';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('bankDetails', { static: false })
  bankDetails: ElementRef<HTMLElement> = {} as ElementRef;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private restService: RestService,
    private appervice: AppService
  ) {}
  bankAccountDetailsForm!: FormGroup;
  profile: any;
  bankDetailsEditingMode = false;
  withdrawEditingMode = false;
  withdrawAmount: Number | undefined;

  ELEMENT_DATA = [
    {
      position: 1,
      currency: 'Bitcoin',
      amount: 1.0079,
      crrentPrize: 100,
      symbol: 'BTC',
      action: 'Sell',
    },
    {
      position: 2,
      currency: 'Ethereum',
      amount: 4.0026,
      crrentPrize: 100,
      symbol: 'ETH',
      action: 'Sell',
    },
    {
      position: 3,
      currency: 'Tether',
      amount: 6.941,
      crrentPrize: 100,
      symbol: 'USDT',
      action: 'Sell',
    },
    {
      position: 4,
      currency: 'BNB',
      amount: 9.0122,
      crrentPrize: 100,
      symbol: 'BNB',
      action: 'Sell',
    },
    {
      position: 5,
      currency: 'Solana',
      amount: 10.811,
      crrentPrize: 100,
      symbol: 'SOL',
      action: 'Sell',
    },
    {
      position: 6,
      currency: 'USD Coin',
      amount: 12.0107,
      crrentPrize: 100,
      symbol: 'USDC',
      action: 'Sell',
    },
    {
      position: 7,
      currency: 'Cardano',
      amount: 14.0067,
      crrentPrize: 100,
      symbol: 'ADA',
      action: 'Sell',
    },
    {
      position: 8,
      currency: 'XRP',
      amount: 15.9994,
      crrentPrize: 100,
      symbol: 'XRP',
      action: 'Sell',
    },
    {
      position: 9,
      currency: 'Terra',
      amount: 18.9984,
      crrentPrize: 100,
      symbol: 'LUNA',
      action: 'Sell',
    },
    {
      position: 10,
      currency: 'Polkadot',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'DOT',
      action: 'Sell',
    },
    {
      position: 11,
      currency: 'Cardano',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'AVAX',
      action: 'Sell',
    },
    {
      position: 12,
      currency: 'Dogecoin',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'DOGE',
      action: 'Sell',
    },
    {
      position: 13,
      currency: 'Shiba Inu',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'SHIB',
      action: 'Sell',
    },
    {
      position: 14,
      currency: 'Polygon',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'MATIC',
      action: 'Sell',
    },
    {
      position: 15,
      currency: 'Binance USD',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'BUSD',
      action: 'Sell',
    },
  ];
  displayedColumns: string[] = [
    'position',
    'currency',
    'amount',
    'crrentPrize',
    'symbol',
    'action',
  ];
  dataSource = this.ELEMENT_DATA;
  ngOnInit(): void {
    this, this.initializebankAccountDetailsForm();
    this.restService
      .get(`${this.appervice.getEnvVariable('API_HOST')}/users/profile`)
      .subscribe((res: any) => {
        this.profile = res;
        if (this.profile.bankDetails) {
          this.autofillBankDetails(this.profile?.bankDetails);
        } else {
          this.bankDetailsEditingMode = true;
        }
      });

    this.fetchCryptoPrizes();
    this.profile['balance'] = 20;
  }

  chooseClicked = false;
  ngAfterViewInit() {}

  fetchCryptoPrizes() {
    this.restService
      .get(`${this.appervice.getEnvVariable('API_HOST')}/ticker/wrxinr`)
      .subscribe((res) => {
        console.log(JSON.parse(res.body));
      });
  }

  choose() {
    console.log(this.chooseClicked)
    this.chooseClicked = !this.chooseClicked;
  }

  selectImg(i: any) {
    let payload = {
      'img': i + '',
    };
    
    console.log(payload)
    this.restService
      .post(
        `${this.appervice.getEnvVariable('API_HOST')}/users/edit-profile`,
        payload
      )
      .subscribe((res) => {
        console.log('hi')
        this.chooseClicked = !this.chooseClicked;
        console.log(res);
      });
  }

  initializebankAccountDetailsForm() {
    this.bankAccountDetailsForm = this.formBuilder.group({
      ifscCode: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      branch: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      confirmAccountNumber: ['', Validators.required],
      accountHolderName: ['', Validators.required],
    });
  }

  saveBankDetails() {
    let payload = {
      bankDetails: { ...this.bankAccountDetailsForm.value },
    };
    delete payload['bankDetails'].confirmAccountNumber;
    this.restService
      .post(
        `${this.appervice.getEnvVariable('API_HOST')}/users/edit-profile`,
        payload
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  autofillBankDetails(bankDetails: any) {
    let formElements = [
      'ifscCode',
      'city',
      'address',
      'branch',
      'bankName',
      'accountNumber',
      'accountHolderName',
    ];

    formElements.forEach((element) => {
      this.bankAccountDetailsForm.controls[element].setValue(
        bankDetails[element]
      );
    });
  }

  fetchBankDetailsByIfsc(event: any) {
    let ifsc = event.target.value;
    if (ifsc.length == 11) {
      this.restService
        .get(`${this.appervice.getEnvVariable('API_HOST')}/ifsc/${ifsc}`)
        .subscribe((res: any) => {
          // console.log(JSON.parse(res.body));
          let response = JSON.parse(res.body);
          this.bankAccountDetailsForm.controls['city'].setValue(
            response['CITY']
          );
          this.bankAccountDetailsForm.controls['address'].setValue(
            response['ADDRESS']
          );
          this.bankAccountDetailsForm.controls['bankName'].setValue(
            response['BANK']
          );
          this.bankAccountDetailsForm.controls['branch'].setValue(
            response['BRANCH']
          );
        });
    }
  }
  openDialog(): void {
    console.log(this.profile);
    const dialogRef = this.dialog.open(EditProfile, {
      width: '300px',
      data: this.profile,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result.event === 'save') {
        this.profile = result.data;
        let payload = {
          'name': result.data.name,
          'contactNo': result.data.contactNo,
        };
        this.restService
          .post(
            `${this.appervice.getEnvVariable('API_HOST')}/users/edit-profile`,
            payload
          )
          .subscribe((res) => {
            console.log(res);
          });
      }
    });
  }

  showDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result.event === 'ok') {
        this.scrollToTheBankDetails();
      }
    });
  }
  sell(element: any) {
    if (this.profile.bankDetails) {
      // sell api call
    } else {
      this.showDialog({
        msg: 'Please Fill Bank details In order to sell',
      });
    }
  }

  scrollToTheBankDetails() {
    this.bankDetails.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  editBankDetails() {
    this.bankDetailsEditingMode = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/cryft']);
  }

  withdraw() {
    if (this.withdrawEditingMode) {
      // withdraw api
    } else {
      this.withdrawEditingMode = true;
    }
  }
}

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfile {
  constructor(
    public dialogRef: MatDialogRef<EditProfile>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('pop', this.data);
  }

  onNoClick(event?: String): void {
    this.dialogRef.close({ event: event, data: this.data });
  }
}
