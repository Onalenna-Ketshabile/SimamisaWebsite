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
import { MainLayoutComponent } from './pages/manager/main-layout/main-layout.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
 {path: 'home', component: HomeComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'infohub', component: InfoHubComponent},
 {path: 'orphanages', component: OrphanagesComponent},
 {path: 'infohubpost', component: InfohubPostComponent},
 {path: 'newsfeed', component: NewsfeedComponent},
 {path: 'newsfeedpost', component: NewsfeedPostComponent},
 {path: 'hometwo', component: MainLayoutComponent},
 {path: 'm',
  loadChildren: () =>  import('./pages/manager/main-layout/main-layout.module').then(m => m.MainLayoutModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
