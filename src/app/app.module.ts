import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

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
import { ModalAddNeedComponent } from './others/modal-add-need/modal-add-need.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SponsorChildComponent } from './pages/sponsor-child/sponsor-child.component';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { ModalMeetingSetupComponent } from './others/modal-meeting-setup/modal-meeting-setup.component';
import { OrphanagesManagerComponent } from './pages/manager/orphanages-manager/orphanages-manager.component';
import { MyPartnersComponent } from './pages/manager/my-partners/my-partners.component';
import { ModalMakeItemproposalComponent } from './others/modal-make-itemproposal/modal-make-itemproposal.component';
import { LoadingIndicatorComponent } from './others/loading-indicator/loading-indicator.component';
import { ModalPaypalNeedComponent } from './others/modal-paypal-need/modal-paypal-need.component';
import { PartneringRequestsComponent } from './pages/manager/partnering-requests/partnering-requests.component';
import { MyOffersComponent } from './pages/manager/my-offers/my-offers.component';
import { VieworphanagesManagerComponent } from './others/vieworphanages-manager/vieworphanages-manager.component';
import { SponsorRequestComponent } from './pages/manager/sponsor-request/sponsor-request.component';
import { ProfileQueriesComponent } from './pages/manager/profile-queries/profile-queries.component';
import { CalendarComponent } from './pages/manager/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OrphanageItemComponent } from './others/orphanage-item/orphanage-item.component';
import { ChilditemComponent } from './others/childitem/childitem.component';
import { ChildrenManagerComponent } from './pages/manager/children-manager/children-manager.component';
import { ChildNeedsComponent } from './pages/manager/child-needs/child-needs.component';
import { ChildItemManagerComponent } from './pages/manager/child-item-manager/child-item-manager.component';
import { ChildNeedItemComponent } from './pages/manager/child-need-item/child-need-item.component';
import { ChildUpdatesComponent } from './pages/manager/child-updates/child-updates.component';
import { ModalAddChildUpdateComponent } from './others/modal-add-child-update/modal-add-child-update.component';
import { ModalAddChildNeedComponent } from './others/modal-add-child-need/modal-add-child-need.component';
import { EditNeedComponent } from './pages/manager/edit-need/edit-need.component';
import { EditChildneedComponent } from './pages/manager/edit-childneed/edit-childneed.component';
import { ChildUpdateItemComponent } from './pages/manager/child-update-item/child-update-item.component';
import { EditChildupdateComponent } from './pages/manager/edit-childupdate/edit-childupdate.component';

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
    ModalAddNeedComponent,
    LogoutComponent,
    SponsorChildComponent,
    ChildPageComponent,
    ModalMeetingSetupComponent,
    OrphanagesManagerComponent,
    MyPartnersComponent,

    ModalMakeItemproposalComponent,
    LoadingIndicatorComponent,
    ModalPaypalNeedComponent,
    PartneringRequestsComponent,
    MyOffersComponent,
    VieworphanagesManagerComponent,
    SponsorRequestComponent,
    ProfileQueriesComponent,
    CalendarComponent,
    ChilditemComponent,
    ChildrenManagerComponent,
    ChildNeedsComponent,
    OrphanageItemComponent,
    ChildItemManagerComponent,
    ChildNeedItemComponent,
    ChildUpdatesComponent,
    ModalAddChildUpdateComponent,
    ModalAddChildNeedComponent,
    EditNeedComponent,
    EditChildneedComponent,
    ChildUpdateItemComponent,
    EditChildupdateComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,CommonModule, CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AvatarComponent,
    FooterComponent
  ]
})
export class AppModule { }
