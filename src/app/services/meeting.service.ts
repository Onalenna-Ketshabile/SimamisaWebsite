import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { sponsorRequest } from '../models/sponsorRequest';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {



  headers: any;
  readonly apiURLPost = `${BASEURL}/meetings`;

  private sponsorMeetingRequest = new BehaviorSubject<sponsorRequest[]>([]);

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json');
    this.headers.set('Accept', 'application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  makeSponsor(body: string): Observable<any> {
    let url = `${BASEURL}/requests`
    return this.http.post<any>(url, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }

      },
      ));
  }
  //MAKE SPONSOR REQUEST
  readonly reqURL = `${BASEURL}/requests`;
  makeSponsorRequest(body: string): Observable<any> {

    return this.http.post<any>(this.reqURL, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }

      },
      ));
  }
  //Get Zoom Meeting Link
  getZoomLink(body:any) : Observable<any>{
    let url = "https://api.zoom.us/v2/users/omphile05monchwe@gmail.com/meetings"
    let auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6Ik8wcHl5czhsU3FhUTBHSXlGOHptYVEiLCJleHAiOjE2NjcwODA4MDAsImlhdCI6MTY2NDUwMzA1Mn0.P58jlmxP6N-iIT0Jzy_8EZ0TtoZ65btutTZ1P7S3g3g";
    
    let h1 = new HttpHeaders();
    h1.set('Content-Type','application/json');
    h1.set('Authorization',`Bearer ${auth_token}`);
    
    let zoomBody={
      "agenda": "Sponsorship for "+body.childname,
      "default_password": false,
      "duration": 60,
      "password": "123456",
      "pre_schedule": false,    
      "schedule_for": "omphile05monchwe@gmail.com",
      "settings": {
        "additional_data_center_regions": [
          "TY"
        ],
        "allow_multiple_devices": true,
        "approval_type": 2,
        "approved_or_denied_countries_or_regions": {
          "approved_list": [
            "CX"
          ],
          "denied_list": [
            "CA"
          ],
          "enable": true,
          "method": "approve"
        },
        "audio": "telephony",
        "auto_recording": "cloud",
        "meeting_authentication": true,
        "meeting_invitees": [
          {
            "email": body.useremail
          }
        ],
        "mute_upon_entry": true,
        "participant_video": false,
        "private_meeting": false,
        "registrants_confirmation_email": true,
        "registrants_email_notification": true,
        "registration_type": 1,
        "show_share_button": true,
        "use_pmi": false,
        "waiting_room": false,
        "waiting_room_options": {
          "enable": true,
          "admit_type": 1,
          "auto_admit": 1,
          "internal_user_auto_admit": 1
        },
        "watermark": false,
        "host_save_video_order": true,
        "alternative_host_update_polls": true
      },
      "start_time": body.datetime,
      "template_id": "Dv4YdINdTk+Z5RToadh5ug==",
      "timezone": "Johannesburg",
      "topic": "Sponsorship for "+body.childname,
      "type": 2
    }
        return this.http.post<any>(url,JSON.stringify( zoomBody), {'headers':h1}).pipe(map((res)=>{
          return res;
        }))
  }

  //MAKE MEETING
  setupMeeting(body: any): Observable<any> {
    //USE 
    return this.http.put<any>(this.reqURL+"/meeting", body, { headers: this.headers }).pipe(
      map((res) => {
       
          console.log(res);
        return res;
        

      },
      ));
  }

  //GET ALL REQUESTS
  getAllOrphRequests(id: string): Observable<any> {
    let url = this.reqURL + "/?id=" + id;
    console.log(url)
    return this.http.get<any>(url, { headers: this.headers }).pipe(
      map((res) => {
          return res;
        

      },
      ));
  }

  //ACCEPT SPONSOR
  acceptSponsor(ID: number) : Observable<any> {
   
    return this.http.put<any>(`${this.reqURL}/?rid=${ID}`, { headers: this.headers }).pipe(
      map((res) => {

          return res;
        

      },
      ));
  }
  rejectSponsor(ID: number) {
    return this.http.delete<any>(`${this.reqURL}/?id=${ID}`, { headers: this.headers }).pipe(
      map((res) => {

          return res;
        

      },
      ));
  }
  // getSponsorMeetingRequests():Observable<any>{
  //   this._sponsorMeetingRequest();
  //   return this.sponsorMeetingRequest;

  // }

  // _sponsorMeetingRequest(){
  // this.http.get<adminOrphanageNeeds[]>(this.apiURL.slice(0,-11)+'/admin/unfulfilled',{headers:this.headers}).subscribe(
  //   (orphNeed)=>{
  //     this.orphanageNeedsReport.next(orphNeed);
  //     console.log("orphNeed");
  //   }
  // );
}

