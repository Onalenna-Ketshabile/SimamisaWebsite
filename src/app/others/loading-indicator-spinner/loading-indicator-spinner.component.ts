import { Component, OnInit } from '@angular/core';
import { SpinnerIndicatorService } from 'src/app/services/spinner-indicator.service';

@Component({
  selector: 'app-loading-indicator-spinner',
  templateUrl: './loading-indicator-spinner.component.html',
  styleUrls: ['./loading-indicator-spinner.component.css']
})
export class LoadingIndicatorSpinnerComponent implements OnInit {
  loading$ = this.loader.loading$;
  constructor(private loader :SpinnerIndicatorService) { }

  ngOnInit(): void {
  }
   
}
