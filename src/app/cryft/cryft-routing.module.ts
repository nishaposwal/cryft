import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryftComponent } from './cryft.component';

const routes: Routes = [{ path: '', component: CryftComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryftRoutingModule { }
