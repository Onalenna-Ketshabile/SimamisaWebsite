import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrphanagesComponent } from './pages/orphanages/orphanages.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoHubComponent } from './pages/info-hub/info-hub.component';
import { InfohubPostComponent } from './pages/infohub-post/infohub-post.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewsfeedPostComponent } from './pages/newsfeed-post/newsfeed-post.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from './routeguards/auth.guard';
import { SponsorChildComponent } from './pages/sponsor-child/sponsor-child.component';
import { ChildPageComponent } from './pages/child-page/child-page.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'infohub', component: InfoHubComponent },
  { path: 'orphanages', component: OrphanagesComponent },
  { path: 'infohubpost', component: InfohubPostComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'newsfeedpost', component: NewsfeedPostComponent },
  {
    path: 'manager',
   //canActivate:[AuthGuard],
    loadChildren: () => import('./pages/manager/main-layout/main-layout.module').then(m => m.MainLayoutModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sponsor-child', component: SponsorChildComponent},
  { path: 'child-single', component: ChildPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
