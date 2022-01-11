import {
  AfterViewInit,
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
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  logo: ElementRef<HTMLElement> = {} as ElementRef;
  isLoggedIn = false;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private eventEmitterService: EventEmitterService,
    private restService: RestService,
    private apppService: AppService
  ) {}

  redeemCode: String = '';
  navs = [
    {
      name: 'Redeem Gift Card',
    },
    {
      name: 'Buy Gift Card',
    },
    {
      name: 'FAQ',
    },
  ];

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getAuthToken() ? true : false;
    this.authService.loggedIn$.subscribe((res: any) => {
      this.isLoggedIn = res;
    });
  }

  ngAfterViewInit() {}

  openDialog(): void {
    if (this.isLoggedIn) {
      const dialogRef = this.dialog.open(RedeemDialog, {
        width: '250px',
        data: { redeemCode: this.redeemCode },
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        if (result.event === 'save') {
          this.redeemCode = result;
          this.redeem(result);
        }
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  redeem(code: String) {
    this.restService.post(
      `${this.apppService.getEnvVariable('API_HOST')}//api/gifts/redeem-gift`,
      { redeemCode: code }
    );
  }

  navigate(nav: any) {
    if (this.isLoggedIn) {
      if (nav.name === 'Redeem Gift Card') {
        this.openDialog();
      } else if (nav.name === 'Buy Gift Card') {
        this.buyGift();
      } else {
        this.eventEmitterService.emit({ type: 'FAQ', data: {} });
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  sign() {
    this.router.navigate(['sign-up']);
  }

  home() {
    this.eventEmitterService.emit({ type: 'SROLL_TO_THE_TOP', data: {} });
    if (
      this.router.url.includes('profile') ||
      !this.router.url.includes('cryft')
    ) {
      this.router.navigate(['/']);
    }
  }

  buyGift() {
    if (this.router.url.includes('profile')) {
      this.router.navigate(['/']).then(() => {
        this.eventEmitterService.emit({ type: 'BUY_GIFT', data: {} });
      });
    }
    this.eventEmitterService.emit({ type: 'BUY_GIFT', data: {} });
  }

  navigayeToProfile() {
    this.router.navigate(['cryft/profile']);
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

  onNoClick(event?: String): void {
    this.dialogRef.close({ data: this.data, event: event });
  }
}