import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrphanagesResolverService } from 'src/app/services/resolvers/orphanages-resolver.service';
import { DashboardAdminComponent } from '../../admin/dashboard-admin/dashboard-admin.component';
import { HomeComponent } from '../../home/home.component';
import { LogoutComponent } from '../../logout/logout.component';
import { NewsfeedComponent } from '../../newsfeed/newsfeed.component';
import { ItemProposalsComponent } from '../../item-proposals/item-proposals.component';
import { SponsorChildComponent } from '../../sponsor-child/sponsor-child.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ChildNeedsComponent } from '../child-needs/child-needs.component';
import { ChildUpdatesComponent } from '../child-updates/child-updates.component';
import { ChildrenManagerComponent } from '../children-manager/children-manager.component';
import { EditChildneedComponent } from '../edit-childneed/edit-childneed.component';
import { EditChildupdateComponent } from '../edit-childupdate/edit-childupdate.component';
import { EditNeedComponent } from '../edit-need/edit-need.component';
import { MyOffersComponent } from '../my-offers/my-offers.component';
import { MyPartnersComponent } from '../my-partners/my-partners.component';
import { OrphanagesManagerComponent } from '../orphanages-manager/orphanages-manager.component';
import { PartneringRequestsComponent } from '../partnering-requests/partnering-requests.component';
import { ProfileQueriesComponent } from '../profile-queries/profile-queries.component';
import { SponsorRequestComponent } from '../sponsor-request/sponsor-request.component';
import { MainLayoutComponent } from './main-layout.component';
import { DashboardManagerComponent } from '../dashboard-manager/dashboard-manager.component';


const routes: Routes = [
  {path: '',
   redirectTo: 'home',
   pathMatch: 'full'
  },
  {path: '',
  component: MainLayoutComponent ,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'newsfeed', component: NewsfeedComponent},
    { path: 'item-proposals' , component: ItemProposalsComponent},
    {path:'newsfeed/editneed/:id',component:EditNeedComponent},
    {path:'logout',component:LogoutComponent},
    {path: 'orphanages', component: OrphanagesManagerComponent, resolve: { orphanages: OrphanagesResolverService}},
    {path: 'partners', component: MyPartnersComponent},
    {path: 'partnering-requests', component: PartneringRequestsComponent},
    {path: 'my-offers', component: MyOffersComponent},
    {path: 'sponsor-request', component: SponsorRequestComponent},
    {path: 'children-profile-queries', component: ProfileQueriesComponent},
    {path: 'meeting-calendar', component: CalendarComponent},
    {path: 'children', component: ChildrenManagerComponent},
    {path: 'child-needs/:id', component: ChildNeedsComponent},
    {path: 'child-needs/editchildneed/:id', component: EditChildneedComponent},
    {path: 'child-updates/:id', component: ChildUpdatesComponent},
    {path: 'child-updates/editchildupdate/:id', component: EditChildupdateComponent},
     
    {path: 'dashboard', component: DashboardManagerComponent},
   ]
   }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
