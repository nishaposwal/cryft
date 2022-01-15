import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { RestService } from 'src/app/core/services/rest.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent implements OnInit {
  constructor(
    private restService: RestService,
    private appService: AppService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  email: String = '';
  ngOnInit(): void {}

  send() {
    if (this.email) {
      this.restService
        .post(
          `${this.appService.getEnvVariable('API_HOST')}/users/reset-link-mail`,
          { email: this.email }
        )
        .subscribe((res) => {
          console.log(res);
          this.showDialog({
            msg: 'Please check your mail for reset password link',
            showCancel : false
          });
        });
    }
  }

  showDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result.event === 'ok') {
      }
    });
  }
}
