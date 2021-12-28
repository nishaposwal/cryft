import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}
  profile = {
    email: 'nishaposwal321@gmail.com',
    name: 'Nisha',
    currencies: [
      {
        currencyName: 'bitcoin',
        amount: '1',
      },
      {
        currencyName: 'ether',
        amount: '3',
      },
      {
        currencyName: 'ghonchu',
        amount: '10',
      },
    ],
  };
  data = {
    email: 'nishaposwal321@gamil.com',
    name: 'Nisha',
  };
  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfile, {
      width: '300px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.data = result;
    });
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

  onNoClick(): void {
    this.dialogRef.close();
  }
}
