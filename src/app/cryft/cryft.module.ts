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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {
  EditProfile,
  ProfileComponent,
} from '../components/profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { FaqComponent } from './components/faq/faq.component';
import { ForgotPassComponent } from '../components/forgot-pass/forgot-pass.component';
import { ChangeComponent } from '../components/change/change.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    CryftComponent,
    HomeComponent,
    BuyGiftComponent,
    FaqsComponent,
    EditProfile,
    FaqComponent,
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
    MatTableModule,
    SharedModule,
    MatIconModule,
    MatCardModule
  ],
})
export class CryftModule {}
