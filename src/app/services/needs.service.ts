import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Need } from '../models/need';
import { Observable,map } from 'rxjs';
import { BASEURL } from '../constants/constants';
@Injectable({
  providedIn: 'root'
})
export class NeedsService {

headers: any;
  constructor(private http:HttpClient) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json');
    this.headers.set( 'Accept','application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');
   }

   readonly apiURL=`https://simamisa.herokuapp.com/simamisa/orphanages/needs`;
   
   getAllNeeds():Observable<Need[]>{
    return this.http.get<Need[]>(this.apiURL+"/active",{headers:this.headers});
   }
   getOrphanageNeeds=()=>{
    console.log("OrphID :"+localStorage.getItem("orphID"));
    return this.http.get<Need[]>(this.apiURL+"/orphanage/"+localStorage.getItem("orphID"),{headers:this.headers});
   }
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
