import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { Orphanage } from '../models/orphanage';
import { PartneringRequest } from '../models/PartneringRequest';

@Injectable({
  providedIn: 'root'
})
export class PartneringService {

  private partneringRequests = new BehaviorSubject<PartneringRequest[]>([]);
  private myOrphanagePartners = new BehaviorSubject<Orphanage[]>([]);
  
  headers: any;
  readonly apiURLPostRequest =`${BASEURL}/partnering/?`;
  readonly apiURLGetRequest =`${BASEURL}/partnering/requests/?id=`;
  readonly apiURLGetPartner = `${BASEURL}/partnering/?id=`;
  
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
  this.MyPartners();
  }
  public init():void {
    console.log("Loading requests1");
    this.http.get<PartneringRequest[]>(this.apiURLGetRequest+localStorage.getItem("orphID"),{headers:this.headers}).subscribe(
      (partneringRequest)=>{
        this.partneringRequests.next(partneringRequest);
        console.log(this.partneringRequests);
      }
    );
   
  }
  sendRequest(fromID:string|null,toID: string):Observable<any>{

    return this.http.post<any>(this.apiURLPostRequest+"from="+fromID+"&to="+toID,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       
       },
    ));
      }
  ViewRequests():Observable<any>{
    return this.partneringRequests;

  }
  AcceptRequest(fromID:string,toID:string|null):Observable<any>{
    return this.http.put<any>(this.apiURLPostRequest+"from="+fromID+"&to="+toID,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       
       },
    ));
      
  }
  
  GetMyPartners():Observable<any>{

      return this.myOrphanagePartners;
    }
  MyPartners(): void{
    console.log("Loading partners2");
    this.http.get<Orphanage[]>(this.apiURLGetRequest+localStorage.getItem("orphID"),{headers:this.headers}).subscribe(
      (myOrphanagePartner)=>{
        this.myOrphanagePartners.next(myOrphanagePartner);
        console.log(this.myOrphanagePartners);
      }
    );
  }
      

}
