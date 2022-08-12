import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { timeInterval } from 'rxjs';
import { MeetingService } from 'src/app/services/meeting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-meeting-setup',
  templateUrl: './modal-meeting-setup.component.html',
  styleUrls: ['./modal-meeting-setup.component.css']
})
export class ModalMeetingSetupComponent implements OnInit {

  constructor(private meetingService: MeetingService,private router: Router)  { }

  ngOnInit(): void {
  }
  setUpMeeting(details: { date: Date; time: Time; venue: string}) {
    var datetime = new Date(details.date + ' ' + details.time); 
    console.log(details);

    let meetingData = {
      MeetingDate:  datetime,
      MeetingVenue: details.venue,
      orphanageManagerID: 1,
      registeredUserID: 8

    };

    const body = JSON.stringify(meetingData);

    this.meetingService.setUpMeeting(body).subscribe(data => {
      console.log(data);
        
      this.router.navigate(['./home']);


  });

 }
}
