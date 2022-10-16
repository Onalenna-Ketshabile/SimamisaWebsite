import { Component, OnChanges, OnInit } from '@angular/core';
import { sponsorRequest } from 'src/app/models/sponsorRequest';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { LoaderService } from 'src/app/services/loader.service';
import { MeetingService } from 'src/app/services/meeting.service';
interface Filter {
  id: number,
  name: string
}
@Component({
  selector: 'app-sponsor-request',
  templateUrl: './sponsor-request.component.html',
  styleUrls: ['./sponsor-request.component.css','bootstrap.min.css','./../../../../assets/css/icons.min.css','../../../../assets/css/bootstrap.min.css','../../../../assets/css/table.css']
})
export class SponsorRequestComponent implements OnInit {

  sponsorRequests!: sponsorRequest[];
  AllsponsorRequests!: sponsorRequest[];
  loadingHandler = new LoadingHandler();
  isLoaded=false;
  filters: Filter[] = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Pending' },
    { id: 2, name: 'Meeting Pending' },
    { id: 3, name: 'Accepted' },
    { id: 4, name: 'Rejected' },
  ];
  filterval: number = 0;
  totalLength:any;
  page:number=1;
  constructor(private mService : MeetingService, public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  show(){ 

    return !(this.isLoaded && this.sponsorRequests!.length<1) ;
}
  getRequests() {
    
    let id = localStorage.getItem("orphID");
   console.log(id);
    this.mService.getAllOrphRequests(id!).subscribe((data) => {
      console.log(data);
      this.AllsponsorRequests = data;
      this.updateFilter();
     this.totalLength = this.sponsorRequests.length;

      this.isLoaded=true;
    });

  }
  getStatus(sponsorRequest:any) {
    if(!sponsorRequest.isAccepted && !sponsorRequest.isRejected){
    return"Pending";
    }
    if(sponsorRequest.isAccepted && sponsorRequest.isRejected){
      return "Meeting Pending";
    }
    if(sponsorRequest.isAccepted && !sponsorRequest.isRejected){
      return "Accepted";     
    }
    if(!sponsorRequest.isAccepted && sponsorRequest.isRejected){  
          return "Rejected";    
    }
     return "All";
  }
  updateFilter(): void {
    
    let selected = this.filters.find(prop => (prop.id == this.filterval))!;
    console.log("SDFGHJ",selected)
    if (selected.name == 'All') {//Get rejected
      this.sponsorRequests =this.AllsponsorRequests;
      this.isLoaded=true;
    }
    if (selected.name == 'Pending') {//Get rejected
      this.sponsorRequests = this.AllsponsorRequests?.filter(prop => {return this.getStatus(prop)=="Pending"} );
      this.isLoaded=true;
    }
    if (selected.name == 'Meeting Pending') {//Get rejected
      this.sponsorRequests = this.AllsponsorRequests?.filter(prop => {return this.getStatus(prop)=="Meeting Pending"} );
      this.isLoaded=true;
    }
    if (selected.name == 'Accepted') {//Get rejected
      this.sponsorRequests = this.AllsponsorRequests?.filter(prop => {return this.getStatus(prop)=="Accepted"} );
      this.isLoaded=true;
    }
    if (selected.name == 'Rejected') {//Get rejected
      this.sponsorRequests = this.AllsponsorRequests?.filter(prop => {return this.getStatus(prop)=="Rejected"} );
      this.isLoaded=true;
    }
    this.totalLength = this.sponsorRequests.length;
    this.page=1;
    this.loadingHandler.finish();
    
  }
  onElementUpdated(element: any) {
    this.getRequests();
    

  }


}
