import { Component, OnChanges, OnInit } from '@angular/core';
import { sponsorRequest } from 'src/app/models/sponsorRequest';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { MeetingService } from 'src/app/services/meeting.service';
@Component({
  selector: 'app-sponsor-request',
  templateUrl: './sponsor-request.component.html',
  styleUrls: ['./sponsor-request.component.css','bootstrap.min.css','./../../../../assets/css/icons.min.css','../../../../assets/css/bootstrap.min.css','../../../../assets/css/table.css']
})
export class SponsorRequestComponent implements OnInit {

  sponsorRequests!: sponsorRequest[];
  loadingHandler = new LoadingHandler();
  constructor(private mService : MeetingService) { }

  ngOnInit(): void {
    this.getRequests();
  }


  getRequests() {
    this.loadingHandler.start();   
    let id = localStorage.getItem("orphID");
   console.log(id);
    this.mService.getAllOrphRequests(id!).subscribe((data) => {
      console.log(data);
    this.sponsorRequests = data;
      this.loadingHandler.finish();
    });

  }

  onElementUpdated(element: any) {
    this.getRequests();
    

  }


}
