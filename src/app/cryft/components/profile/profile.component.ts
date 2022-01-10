import { Component, Inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private restService: RestService,
    private appervice: AppService
  ) {}
  bankAccountDetailsForm!: FormGroup;
  profile = {
    email: 'nishaposwal321@gmail.com',
    name: 'Nisha',
  };
  data = {
    email: 'nishaposwal321@gamil.com',
    name: 'Nisha',
  };
  ELEMENT_DATA = [
    {
      position: 1,
      currency: 'Hydrogen',
      amount: 1.0079,
      crrentPrize: 100,
      symbol: 'H',
      action: 'Sell',
    },
    {
      position: 2,
      currency: 'Helium',
      amount: 4.0026,
      crrentPrize: 100,
      symbol: 'He',
      action: 'Sell',
    },
    {
      position: 3,
      currency: 'Lithium',
      amount: 6.941,
      crrentPrize: 100,
      symbol: 'Li',
      action: 'Sell',
    },
    {
      position: 4,
      currency: 'Beryllium',
      amount: 9.0122,
      crrentPrize: 100,
      symbol: 'Be',
      action: 'Sell',
    },
    {
      position: 5,
      currency: 'Boron',
      amount: 10.811,
      crrentPrize: 100,
      symbol: 'B',
      action: 'Sell',
    },
    {
      position: 6,
      currency: 'Carbon',
      amount: 12.0107,
      crrentPrize: 100,
      symbol: 'C',
      action: 'Sell',
    },
    {
      position: 7,
      currency: 'Nitrogen',
      amount: 14.0067,
      crrentPrize: 100,
      symbol: 'N',
      action: 'Sell',
    },
    {
      position: 8,
      currency: 'Oxygen',
      amount: 15.9994,
      crrentPrize: 100,
      symbol: 'O',
      action: 'Sell',
    },
    {
      position: 9,
      currency: 'Fluorine',
      amount: 18.9984,
      crrentPrize: 100,
      symbol: 'F',
      action: 'Sell',
    },
    {
      position: 10,
      currency: 'Neon',
      amount: 20.1797,
      crrentPrize: 100,
      symbol: 'Ne',
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

  save() {
    console.log(this.bankAccountDetailsForm.value);
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
    const dialogRef = this.dialog.open(EditProfile, {
      width: '300px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result.event === 'save') {
        this.data = result.data;
      }
    });
  }

  sell(element: any) {
    console.log(element);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/cryft']);
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
  ) {}

  onNoClick(event?: String): void {
    this.dialogRef.close({ event: event, data: this.data });
  }
}
