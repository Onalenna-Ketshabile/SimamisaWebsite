import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { timeInterval } from 'rxjs';
import { MeetingService } from 'src/app/services/meeting.service';
import { Router } from '@angular/router';
import { AwsimagesService } from 'src/app/services/awsimages.service';

@Component({
  selector: 'app-modal-meeting-setup',
  templateUrl: './modal-meeting-setup.component.html',
  styleUrls: ['./modal-meeting-setup.component.css', '../../../assets/css/modal.css']
})
export class ModalMeetingSetupComponent implements OnInit {
  myAngularQrCode: any
  show!: boolean;
  uploaded: boolean = false;
  loadingID: boolean = false;
  loadingIncome: boolean = false;
  gotID: boolean = false;
  gotIncome: boolean = false;
  check: string = '../../../assets/images/check.png';
  idURL!: string;
  incomeURL!: string;
  success :boolean = false;
  constructor(private awsS3: AwsimagesService, private mService: MeetingService) { }

  ngOnInit(): void {
    this.success=false;
    this.myAngularQrCode = "Simamisa Mobile App Link"
    if (localStorage.getItem("userRole") == null && localStorage.getItem("userName") == null) {
      this.show = false;
    } else {
      this.show = true;
      //Make person a sponsor
    }

  }

  showQR(): boolean {
    if (localStorage.getItem("userRole") == null && localStorage.getItem("userName") == null) {

      return false;
    } else {
      return true;
    }


  }

  onSubmit = () => {
    console.log("Submitting");
    let body = {
      registeredUserID: localStorage.getItem("userID"),
      url: this.idURL + "split" + this.incomeURL,
      childID: localStorage.getItem("ChildID")
    }
    console.log(body);
    this.mService.makeSponsorRequest(JSON.stringify(body)).subscribe((res) => {
     console.log(res);
     this.success =true;
    })
  }

  uploadIncomeS = async (fileInput: any) => {
    this.loadingIncome = true
    if (fileInput.target.files && fileInput.target.files[0]) {


      this.awsS3.getUploadDocsURL().subscribe(response => {
        this.incomeURL =   response.URL.split('?')[0];
        console.log("Response",this.incomeURL)  
        const file = fileInput.target.files[0];
        this.awsS3.uploadDocument(response.URL, file).subscribe((res: any) => {
          
          console.log(res, "SSS")
          this.loadingIncome = false;
          this.gotIncome = true;
        })
      });


    }
    return true;
  }
  uploadID = async (fileInput: any) => {
    this.loadingID = true;
    if (fileInput.target.files && fileInput.target.files[0]) {


      this.awsS3.getUploadDocsURL().subscribe(response => {
       
         
        this.idURL =   response.URL.split('?')[0];
        console.log("Response",this.idURL)
        console.log(response.URL)
        const file = fileInput.target.files[0];
        this.awsS3.uploadDocument(response.URL, file).subscribe((res: any) => {
         
          this.loadingID = false;
          this.gotID = true;
        })
      });


    }
    return true;
  }









  // constructor(private meetingService: MeetingService,private router: Router)  { }
  //
  //   ngOnInit(): void {
  //   }
  //   setUpMeeting(details: { date: Date; time: Time; venue: string}) {
  //     var datetime = new Date(details.date + ' ' + details.time); 
  //     console.log(details);

  //     let meetingData = {
  //       MeetingDate:  datetime,
  //       MeetingVenue: details.venue,
  //       orphanageManagerID: 1,
  //       registeredUserID: 8

  //     };

  //     const body = JSON.stringify(meetingData);

  //     this.meetingService.setUpMeeting(body).subscribe(data => {
  //       console.log(data);

  //       this.router.navigate(['./home']);


  //   });

  //  }
}
