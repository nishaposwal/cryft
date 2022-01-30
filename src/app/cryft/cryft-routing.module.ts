import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/interceptors/gaurds/auth.gaurd';
import { HomeComponent } from './components/home/home.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MetaverseComponent } from './components/metaverse/metaverse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CryftComponent } from './cryft.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'metaverse',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryftRoutingModule {}
