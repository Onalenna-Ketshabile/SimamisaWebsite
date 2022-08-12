import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Need } from '../models/need';
import { Observable,map } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { Childneed } from '../models/childneed';
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

   readonly apiURL=`${BASEURL}/needs`;
   
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
      readonly createNeedURL = `${BASEURL}/childneed/`
    createChildNeed(body:string):Observable<any>{
      return this.http.post<any>(this.createNeedURL,body,{headers:this.headers}).pipe(
        map((res)=>{
          if(res && res.ID){
           console.log(res); 
           return res;
          }
         
         },
      ));
    }

    readonly getChildNeeds =  `${BASEURL}/childneed/child?childID=`;
    getChildNeedsById=(id:string)=>{
      console.log("OrphID :"+localStorage.getItem("orphID"));
      return this.http.get<Childneed[]>(this.getChildNeeds+id,{headers:this.headers});
     }
     readonly deleteURL=`${BASEURL}/needs/?id=`;
     deleteNeed(ID: number):Observable<any>{
      console.log(ID);
      return this.http.delete<any>(this.deleteURL+ID,{headers:this.headers}).pipe(
        map((res)=>{
          if(res ){
           console.log(res); 
           return res;
          }
         
         },
      ));
    }

  readonly updateUrl=`${BASEURL}/needs/`;
  updateNeed(ID: string,body:string):Observable<any>{
    console.log(body);
    return this.http.put<any>(this.deleteURL+ID,body,{headers:this.headers}).pipe(
      map((res)=>{
        if(res ){
         console.log(res); 
         return res;
        }
       
       },
    ));
  }
    
}
