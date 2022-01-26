import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangeComponent } from './components/change/change.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: CreateAccountComponent,
  },
  {
    path: '',
    redirectTo: 'cryft',
    pathMatch: 'full',
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent,
  },
  {
    path: 'reset-password',
    component: ChangeComponent,
  },

  {
    path: 'cryft',
    loadChildren: () =>
      import('./cryft/cryft.module').then((m) => m.CryftModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
