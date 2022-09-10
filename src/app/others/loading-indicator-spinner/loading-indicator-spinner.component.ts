import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { SpinnerIndicatorService } from 'src/app/services/spinner-indicator.service';

@Component({
  selector: 'app-loading-indicator-spinner',
  templateUrl: './loading-indicator-spinner.component.html',
  styleUrls: ['./loading-indicator-spinner.component.css']
})
export class LoadingIndicatorSpinnerComponent implements OnInit {
  loading = false;
  //constructor(private loader :SpinnerIndicatorService) { }
  constructor(public router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
        this.loading = false;
      }
    });

  }
  ngOnInit(): void {
  }
   
}
