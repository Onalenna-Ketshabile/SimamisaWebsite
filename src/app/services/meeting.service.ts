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

