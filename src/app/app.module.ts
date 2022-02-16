import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent, RedeemDialog } from './components/header/header.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, TokenInterceptor } from './core/interceptors';
import {MatIconModule} from '@angular/material/icon';
import { ChangeComponent } from './components/change/change.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './core/interceptors/gaurds/auth.gaurd';
import { TncComponent } from './components/tnc/tnc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { SagsComponent } from '../app/cryft/components/sags/sags.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpAndSupportComponent } from './components/help-and-support/help-and-support.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SagDetailComponent } from './components/sag-detail/sag-detail.component';
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HeaderComponent,
    RedeemDialog,
    ChangeComponent,
    ForgotPassComponent,
    TncComponent,
    ProfileComponent,
    SagsComponent, 
    FooterComponent, BlogsComponent, AboutUsComponent, HelpAndSupportComponent, PrivacyComponent, SagDetailComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    ClipboardModule,
    MatTableModule,
    MatCardModule,
    ToastrModule.forRoot()  
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
    },
    AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
