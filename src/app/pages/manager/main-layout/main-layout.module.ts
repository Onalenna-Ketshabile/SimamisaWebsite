import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
