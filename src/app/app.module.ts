import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { OurteamComponent } from './others/ourteam/ourteam.component';
import { AvatarComponent } from './others/avatar/avatar.component';
import { InfoHubComponent } from './pages/info-hub/info-hub.component';
import { OrphanagesComponent } from './pages/orphanages/orphanages.component';
import { InfohubPostComponent } from './pages/infohub-post/infohub-post.component';
import { VieworphanagesComponent } from './others/vieworphanages/vieworphanages.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { AllneedsComponent } from './others/allneeds/allneeds.component';
import { NewsfeedPostComponent } from './pages/newsfeed-post/newsfeed-post.component';
import { MainLayoutComponent } from './pages/manager/main-layout/main-layout.component';
import { NeeditemComponent } from './others/needitem/needitem.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    OurteamComponent,
    AvatarComponent,
    InfoHubComponent,
    OrphanagesComponent,
    InfohubPostComponent,
    VieworphanagesComponent,
    NewsfeedComponent,
    AllneedsComponent,
    NewsfeedPostComponent,
    MainLayoutComponent,
    NeeditemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AvatarComponent,
    FooterComponent
  ]
})
export class AppModule { }
