import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  
  private myOffers = new BehaviorSubject<Offer[]>([]);
  headers: any;
  readonly apiURL =`${BASEURL}/partnering/offers/`;
  constructor(private http:HttpClient) {   
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
 this.MyOffer();
  }


  
  MakeOffer(body:string):Observable<any>{

    return this.http.post<any>(this.apiURL,body,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       
       },
    ));
      }

       getMyOffer():Observable<any>{
         
          return this.myOffers;
        }
      MyOffer(): void{
         console.log(this.apiURL+"?id="+localStorage.getItem("orphID"));
        this.http.get<Offer[]>(this.apiURL+"?id="+localStorage.getItem("orphID"),{headers:this.headers}).subscribe(
          (myOffer)=>{
            console.log("Obj",myOffer);
            this.myOffers.next(myOffer);
          }
        );
      }
      AcceptOffer(body:any):Observable<any>{
        console.log("Accept Offer: Service");
        return this.http.put<any>(this.apiURL,body,{headers:this.headers}).pipe(
          map((res)=>{
            if(res && res.ID){
             console.log(res); 
             return res;
            }
           
           },
        ));
          
      }
  
}
