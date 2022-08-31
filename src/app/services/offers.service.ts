import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  
  private myOrphanagePartners = new BehaviorSubject<Offer[]>([]);
  headers: any;
  readonly apiURLPost =`${BASEURL}/partnering/offers/`;
  constructor(private http:HttpClient) {   
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
  }
  MakeOffer(body:string):Observable<any>{

    return this.http.post<any>(this.apiURLPost,body,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       
       },
    ));
      }

       getMyOffer():Observable<any>{

          return this.myOrphanagePartners;
        }
      MyPartners(): void{
        // console.log("Loading partners2");
        // this.http.get<Offer[]>(this.apiURLGetRequest+localStorage.getItem("orphID"),{headers:this.headers}).subscribe(
        //   (myOrphanagePartner)=>{
        //     this.myOrphanagePartners.next(myOrphanagePartner);
        //     console.log(this.myOrphanagePartners);
        //   }
        // );
      }
  
}
