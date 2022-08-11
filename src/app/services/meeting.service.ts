import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  headers: any;
  readonly apiURLPost ='https://simamisa.herokuapp.com/simamisa/orphanages/meetings/';
  
  constructor(private http:HttpClient) { }
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
