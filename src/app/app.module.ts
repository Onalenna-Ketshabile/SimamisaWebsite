import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { QRCodeModule } from 'angularx-qrcode';
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
import { ItemProposalsComponent } from './pages/item-proposals/item-proposals.component';
import { EditNeedComponent } from './pages/manager/edit-need/edit-need.component';
import { EditChildneedComponent } from './pages/manager/edit-childneed/edit-childneed.component';
import { ChildUpdateItemComponent } from './pages/manager/child-update-item/child-update-item.component';
import { EditChildupdateComponent } from './pages/manager/edit-childupdate/edit-childupdate.component';
import { ViewPartneringrequestsComponent } from './others/view-partneringrequests/view-partneringrequests.component';
import { ViewMypartnersComponent } from './others/view-mypartners/view-mypartners.component';
import { ViewMyoffersComponent } from './others/view-myoffers/view-myoffers.component';
import { ChildProfileQueriersComponent } from './others/child-profile-queriers/child-profile-queriers.component';
import { QueryChatComponent } from './others/query-chat/query-chat.component';
import { QuerierItemComponent } from './others/querier-item/querier-item.component';
import { ModalMakeOfferComponent } from './others/modal-make-offer/modal-make-offer.component';
import { ModalAcceptOfferComponent } from './others/modal-accept-offer/modal-accept-offer.component';
import { LoadingIndicatorSpinnerComponent } from './others/loading-indicator-spinner/loading-indicator-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar" ;
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { NetworkInterceptor } from './network.interceptor';
import { DonateComponent } from './pages/donate/donate.component';
import { DashboardAdminComponent } from './pages/admin/dashboard-admin/dashboard-admin.component';
import { BarchartComponent } from './pages/admin/barchart/barchart.component';
import { LineChartComponent } from './pages/admin/line-chart/line-chart.component';
import { OrphanagesResolverService } from './services/resolvers/orphanages-resolver.service';
import { LayoutComponent } from './pages/admin/layout/layout.component';

import { TableOrphanagesNeedsComponent } from './pages/admin/table-orphanages-needs/table-orphanages-needs.component';
import { RowOrphanagesNeedsComponent } from './pages/admin/row-orphanages-needs/row-orphanages-needs.component';
import { SponsorRequestItemComponent } from './pages/manager/sponsor-request-item/sponsor-request-item.component';
import { OrphanageSingleComponent } from './pages/orphanage-single/orphanage-single.component';

import { DropoffItemComponent } from './pages/manager/dropoff-item/dropoff-item.component';
import { PickupItemComponent } from './pages/manager/pickup-item/pickup-item.component';
import { ModalQrcodeComponent } from './others/modal-qrcode/modal-qrcode.component';
import { DashboardManagerComponent } from './pages/manager/dashboard-manager/dashboard-manager.component';
import { DoughnutChartProposalsComponent } from './pages/manager/doughnut-chart-proposals/doughnut-chart-proposals.component';
import { LineChartNeedsComponent } from './pages/manager/line-chart-needs/line-chart-needs.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



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
    ItemProposalsComponent,
    EditNeedComponent,
    EditChildneedComponent,
    ChildUpdateItemComponent,
    EditChildupdateComponent,
    ViewPartneringrequestsComponent,
    ViewMypartnersComponent,
    ViewMyoffersComponent,
    ChildProfileQueriersComponent,
    QueryChatComponent,
    QuerierItemComponent,
    ModalMakeOfferComponent,
    ModalAcceptOfferComponent,
    LoadingIndicatorSpinnerComponent,
    DonateComponent,
    DashboardAdminComponent,
    BarchartComponent,
    LineChartComponent,
    LayoutComponent,
    TableOrphanagesNeedsComponent,
    RowOrphanagesNeedsComponent,
    SponsorRequestItemComponent,
    OrphanageSingleComponent,
    DropoffItemComponent,
    PickupItemComponent,
    ModalQrcodeComponent,
    DashboardManagerComponent,
    DoughnutChartProposalsComponent,
    LineChartNeedsComponent

  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,CommonModule, CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
     BrowserAnimationsModule, MatProgressSpinnerModule,MatToolbarModule,HttpClientModule,NgSelectModule,QRCodeModule,MatProgressBarModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }, 
  OrphanagesResolverService
],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
