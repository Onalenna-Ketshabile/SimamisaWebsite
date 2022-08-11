import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  headers: any;
  
  constructor() { }
  postNeed(body:string):Observable<any>{

    return this.http.post<any>(this.apiURL,body,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       
       },
    ));
      }
  
}
