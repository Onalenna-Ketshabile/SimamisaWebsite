import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { LogoutComponent } from '../../logout/logout.component';
import { NewsfeedComponent } from '../../newsfeed/newsfeed.component';
import { MainLayoutComponent } from './main-layout.component';

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
      {path:'logout',component:LogoutComponent}
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
