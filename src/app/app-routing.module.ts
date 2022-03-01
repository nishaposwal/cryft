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
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SagDetailComponent } from './components/sag-detail/sag-detail.component';
import { TncComponent } from './components/tnc/tnc.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { HomeComponent } from './cryft/components/home/home.component';
import { MetaverseSagComponent } from './cryft/components/Metaversesag/metaverse-sag.component';
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
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'invest',
    component: SagsComponent
  },
  {
    path: 'invest/sag',
    component: SagDetailComponent
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
    component: TncComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'invest/metaverse',
    component: MetaverseSagComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./cryft/cryft.module').then((m) => m.CryftModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Restore the last scroll position
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled",
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
