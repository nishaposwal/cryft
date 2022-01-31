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
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { currencies } from '../../constants/constant';

import { ToastrService } from 'ngx-toastr';

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
    private appervice: AppService,
    private toastr: ToastrService
  ) {}
  bankAccountDetailsForm!: FormGroup;
  profile: any;
  bankDetailsEditingMode = false;
  withdrawEditingMode = false;
  withdrawAmount: Number | undefined;
  displayedColumns: string[] = [
    'currency',
    'amount',
    'worth',
    'action'
  ];
  dataSource: any;
  ngOnInit(): void {
    this.initializebankAccountDetailsForm();
    this.authService.getServerProfile().subscribe(
      (res: any) => {
        this.profile = res;
        if (this.profile?.bankDetails) {
          this.autofillBankDetails(this.profile?.bankDetails);
        }
        console.log(this.profile)
        if (this.profile.bankDetails) {
          this.autofillBankDetails(this.profile?.bankDetails);
        } else {
          this.bankDetailsEditingMode = true;
        }
        for (var i = 0; i < this.profile?.currencies?.length; i++) {
          this.profile.currencies[i]['id'] = i + '';
        }
        console.log(this.profile)
      },
      (error) => this.toastr.error(error.error)
    );
  }

  chooseClicked = false;
  ngAfterViewInit() {}

  fetchCryptoPrizes(currency: string, id: number) {
    console.log(id)
    this.restService
      .get(`${this.appervice.getEnvVariable('API_HOST')}/ticker/` + currency)
      .subscribe((res) => {
        console.log(this.profile?.currencies);
        console.log(JSON.parse(res.body))
        this.profile.currencies[id].worth =
          JSON.parse(res.body).lastPrice *
          this.profile?.currencies[id].quantity;
      });
  }

  choose() {
    console.log(this.chooseClicked);
    this.chooseClicked = !this.chooseClicked;
  }

  selectImg(i: any) {
    let payload = {
      img: i + '',
    };

    console.log(payload);
    this.restService
      .post(
        `${this.appervice.getEnvVariable('API_HOST')}/users/edit-profile`,
        payload
      )
      .subscribe(
        (res) => {
          this.chooseClicked = !this.chooseClicked;
          this.toastr.success('Profile picture saved');
          this.profile.img = payload.img;
          this.authService.setProfile(this.profile);
          console.log(res);
        },
        (error) => this.toastr.error(error.error)
      );
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
      .subscribe(
        (res) => {
          this.toastr.success('Bank details saved');
          console.log(res);
        },
        (error) => this.toastr.error(error.error)
      );
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

  openDialog(label: any): void {
    let data = {
      label: 'Name',
      field: this.profile?.name,
    };
    if (label === 'Contact No') {
      data = {
        label: 'Contact No',
        field: this.profile?.contactNo,
      };
    }
    const dialogRef = this.dialog.open(EditProfile, {
      width: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result.event === 'save') {
        let payload: any;
        if (label === 'Name') {
          payload = {
            name: result.data.field,
          };
        } else {
          payload = {
            contactNo: result.data.field,
          };
        }
        this.restService
          .post(
            `${this.appervice.getEnvVariable('API_HOST')}/users/edit-profile`,
            payload
          )
          .subscribe((res) => {
            this.toastr.success('Profile details saved');
           if(label === 'Name'){
             this.profile.name = result.data.field;
           } else {
            this.profile.contactNo = result.data.field;
           }
           this.authService.setProfile(this.profile);
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
      var payload = {
        quantity: element.quantity,
        currency: element.currency,
      };
      this.restService
        .post(
          `${this.appervice.getEnvVariable('API_HOST')}/gifts/sell-gift`,
          payload
        )
        .subscribe(
          ({ currencies }: any) => {
            this.toastr.success('Sold successfully');
            this.profile.currencies = currencies;
            // console.log(res);
          },
          (error) => this.toastr.error(JSON.stringify(error.error))
        );
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

  withdraw(amount: any) {
    if (!amount)
        this.toastr.error('Zero balance')
    if (this.withdrawEditingMode) {
      var payload = {
        amount: amount
      }
      this.restService
          .post(
            `${this.appervice.getEnvVariable('API_HOST')}/users/withdraw`,
            payload
          )
          .subscribe(({balance}: any) => {
            this.toastr.success('Success! You will be paid in 4-5 business days.')
            this.profile.balance = balance;
          }, error => this.toastr.error(JSON.stringify(error.error)));
    } else {
      this.withdrawEditingMode = true;
    }
  }
  close() {
    this.chooseClicked = false;
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
