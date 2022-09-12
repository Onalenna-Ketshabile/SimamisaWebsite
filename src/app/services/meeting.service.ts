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
  readonly apiURLPost =`${BASEURL}/meetings`;

  private sponsorMeetingRequest = new BehaviorSubject<sponsorRequest[]>([]);
  
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
  }
  setUpMeeting(body:string):Observable<any>{

    return this.http.post<any>(this.apiURLPost,body,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       
       },
    ));
      }
      
  getSponsorMeetingRequests():Observable<any>{
    this._sponsorMeetingRequest();
    return this.sponsorMeetingRequest;

  }
  _sponsorMeetingRequest(){
    // this.http.get<adminOrphanageNeeds[]>(this.apiURL.slice(0,-11)+'/admin/unfulfilled',{headers:this.headers}).subscribe(
    //   (orphNeed)=>{
    //     this.orphanageNeedsReport.next(orphNeed);
    //     console.log("orphNeed");
    //   }
    // );
  }
  
}