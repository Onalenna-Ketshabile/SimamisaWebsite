import { Component, OnChanges, OnInit } from '@angular/core';
import { sponsorRequest } from 'src/app/models/sponsorRequest';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { LoaderService } from 'src/app/services/loader.service';
import { MeetingService } from 'src/app/services/meeting.service';
@Component({
  selector: 'app-sponsor-request',
  templateUrl: './sponsor-request.component.html',
  styleUrls: ['./sponsor-request.component.css','bootstrap.min.css','./../../../../assets/css/icons.min.css','../../../../assets/css/bootstrap.min.css','../../../../assets/css/table.css']
})
export class SponsorRequestComponent implements OnInit {

  sponsorRequests!: sponsorRequest[];
  loadingHandler = new LoadingHandler();
  isLoaded=false;
  constructor(private mService : MeetingService, public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  show(){ 

    return !(this.isLoaded && this.sponsorRequests!.length<1) ;
}
  getRequests() {
    this.loadingHandler.start();   
    let id = localStorage.getItem("orphID");
   console.log(id);
    this.mService.getAllOrphRequests(id!).subscribe((data) => {
      console.log(data);
    this.sponsorRequests = data;
      this.loadingHandler.finish();
      this.isLoaded=true;
    });

  }

  onElementUpdated(element: any) {
    this.getRequests();
    

  }


}
