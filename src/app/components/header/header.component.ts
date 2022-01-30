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
import { NavigationExtras, Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { RestService } from 'src/app/core/services/rest.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  logo: ElementRef<HTMLElement> = {} as ElementRef;
  isLoggedIn = false;
  profile: any;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private eventEmitterService: EventEmitterService,
    private restService: RestService,
    private apppService: AppService,
    private toastr: ToastrService
  ) {}

  redeemCode: String = '';
  navs = [
    { id: 1, name: 'Redeem Gift Card' },
    {
      id: 2,
      name: 'Buy Gift Card',
    },
    {
      id: 3,
      name: 'FAQ',
    },
    {
      id: 4,
      name: 'login',
    },
    {
      id: 5,
      name: 'sign up',
    },
  ];

  showNavigationbar = false;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getAuthToken() ? true : false;
    this.authService.loggedIn$.subscribe((res: any) => {
      this.isLoggedIn = res;
    });
    this.authService.profile$.subscribe((res) => {
      this.profile = res;
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
          this.redeemCode = result.data.redeemCode;
          this.redeem(this.redeemCode);
        }
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  redeem(code: String) {
    let payload = {
      reedemCode: code,
    };

    this.restService
      .post(
        `${this.apppService.getEnvVariable('API_HOST')}/gifts/redeem-gift`,
        payload
      ) //CRYFT78131
      .subscribe(
        (res) => {
          this.toastr.success("Gift redeemed");
        },
        (error) => this.toastr.error(JSON.stringify(error.error))
      );
  }

  navigate(nav: any) {
    if (nav.id < 3) {
      if (this.isLoggedIn) {
        if (nav.name === 'Redeem Gift Card') {
          this.openDialog();
        } else if (nav.name === 'Buy Gift Card') {
          this.buyGift();
        }
      } else {
        this.toastr.error('Please login first');
        this.router.navigate(['login']);
      }
    } else if (nav.id === 3) {
      this.scrollToFaq();
    } else if (nav.id === 4) {
      this.router.navigate(['login']);
    } else if (nav.id === 5) {
      this.router.navigate(['sign-up']);
    } else {
      this.navigayeToProfile();
    }
    this.showNavigationbar = false;
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
      let extras: NavigationExtras = {
        state: {
          scrollTo: 'buy_gift',
        },
      };
      this.router.navigate(['/'], extras);
    }
    this.eventEmitterService.emit({ type: 'BUY_GIFT', data: {} });
  }

  scrollToFaq() {
    if (this.router.url.includes('profile')) {
      let extras: NavigationExtras = {
        state: {
          scrollTo: 'faq',
        },
      };
      this.router.navigate(['/'], extras);
    } else {
      this.eventEmitterService.emit({ type: 'FAQ', data: {} });
    }
  }

  navigayeToProfile() {
    this.router.navigate(['cryft/profile']);
  }

  toggleNavigatonBar() {
    this.showNavigationbar = !this.showNavigationbar;
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
