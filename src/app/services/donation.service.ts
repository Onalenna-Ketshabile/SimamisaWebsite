import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonationService {
  headers: any;
  constructor(private http: HttpClient) {


    this.headers = new HttpHeaders()
      .set('content-type', 'application/json');
    this.headers.set('Accept', 'application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');

  }

  readonly apiURL = `https://simamisa.herokuapp.com/simamisa/donations`;
  readonly apiURLDist = "https://simamisa.herokuapp.com/simamisa/admin/?amt="


  generalDonation(body: any): Observable<any> {
    return this.http.post<any>(this.apiURL, body, { headers: this.headers });
  }
  randToUSD(amt:any) {
    var myHeaders = new HttpHeaders();
    myHeaders.append("Authorization", "0lczlMCnXZHpDVzV63rZRe5P8TrL3KsN");
  
   

     return this.http.get(`https://api.apilayer.com/exchangerates_data/convert?to=usd&from=zar&amount=${amt}`,{headers: myHeaders});
    
}

distribute(id:number,amount:number):Observable<any>{

  return this.http.post<any>(this.apiURLDist+amount+"&id="+id,{headers:this.headers}).pipe(
    
    map((res)=>{
      if(res && res.ID){
       console.log(res); 
       console.log('distribute URL:',this.apiURLDist+amount+"&id="+id );
       return res;
      }else{
        console.log(res); 
        console.log('distribute URL:',this.apiURLDist+amount+"&id="+id );
        return res;
      }
     
     },
  ));
    }

}