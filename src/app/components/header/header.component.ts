import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}

  redeemCode: String = '';
  navs = [
    {
      name: 'Redeem Gift Card',
    },
    {
      name: 'Buy Gift Card',
    },
  ];

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RedeemDialog, {
      width: '250px',
      data: { redeemCode: this.redeemCode },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.redeemCode = result;
    });
  }

  navigate(nav: any) {
    if (nav.name === 'Redeem Gift Card') {
      this.openDialog();
    } else {
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  sign() {
    this.router.navigate(['sign-up']);
  }

  home() {
    this.router.navigate(['/']);
  }
}

@Component({
  selector: 'redeem-dialog',
  templateUrl: 'redeem-dialog.html',
})
export class RedeemDialog {
  constructor(
    public dialogRef: MatDialogRef<RedeemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
