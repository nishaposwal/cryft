import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule,MatButtonModule,],
  exports: [DialogComponent],
})
export class SharedModule {}
