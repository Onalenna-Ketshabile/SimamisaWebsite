import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-meeting-setup',
  templateUrl: './modal-meeting-setup.component.html',
  styleUrls: ['./modal-meeting-setup.component.css']
})
export class ModalMeetingSetupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  setUpMeeting(details: { date: Date; time: Time; venue: string; motivation: string; }) {
    console.log(details);
  
  }
}
