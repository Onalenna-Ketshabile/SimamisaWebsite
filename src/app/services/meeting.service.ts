import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  headers: any;
  readonly apiURLPost =`${BASEURL}/meetings`;
  
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
  
}
