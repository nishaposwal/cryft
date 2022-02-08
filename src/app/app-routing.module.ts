import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ChangeComponent } from './components/change/change.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { HelpAndSupportComponent } from './components/help-and-support/help-and-support.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TncComponent } from './components/tnc/tnc.component';
import { HomeComponent } from './cryft/components/home/home.component';
import { SagsComponent } from './cryft/components/sags/sags.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'gifts',
    component: HomeComponent
  },
  {
    path: 'invest',
    component: SagsComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'help-and-support',
    component: HelpAndSupportComponent,
  },
  {
    path: 'sign-up',
    component: CreateAccountComponent,
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'tnc',
    component : TncComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./cryft/cryft.module').then((m) => m.CryftModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
