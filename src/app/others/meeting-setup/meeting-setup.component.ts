import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { MeetingService } from 'src/app/services/meeting.service';
import { LoadingHandler } from '../loading-indicator/loading-handler';

@Component({
  selector: 'app-meeting-setup',
  templateUrl: './meeting-setup.component.html',
  styleUrls: ['./meeting-setup.component.css','../../../assets/css/modal.css']
})
export class MeetingSetupComponent implements OnInit {
  @Output()
  elementUpdated: EventEmitter<any> = new EventEmitter();
  meetingLink: string = "Meeting Link";
  loadingHandler = new LoadingHandler();
  gettingLink: boolean = false;
  gotLink: boolean = false;
  id: any;
  name: any;
  constructor(private mService: MeetingService,
    private dataToModals:DataToModalsService) { }
  
  ngOnInit(): void {
    this.dataToModals._reqDataSource$.subscribe((data)=>{
      console.log("*******************************",data)
      this.id=data.ID
      this.name = data.registeredUser.FirstName;
    })
  }

  setUpMeeting(data: any) {
   
    let date = data.date + "T" + data.time + ":00Z"
    console.log(date)
    let body = {
      id: this.id,
      datetime: date
    }
    console.log(body)
    this.gettingLink = true;
    this.mService.setupMeeting(JSON.stringify(body)).subscribe((data) => {
      console.log(data);
      this.elementUpdated.emit();
      this.meetingLink = data.joinurl;
       this.gettingLink = false;
      this.gotLink=true;
    })
  }



}
