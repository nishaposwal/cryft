import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryftRoutingModule } from './cryft-routing.module';
import { CryftComponent } from './cryft.component';
import { HomeComponent } from './components/home/home.component';
import { BuyGiftComponent } from './components/buy-gift/buy-gift.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {
  HeaderComponent,
  RedeemDialog,
} from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    CryftComponent,
    HomeComponent,
    BuyGiftComponent,
    FaqsComponent,
    HeaderComponent,
    RedeemDialog,
  ],
  imports: [
    CommonModule,
    CryftRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    ClipboardModule,
  ],
})
export class CryftModule {}
