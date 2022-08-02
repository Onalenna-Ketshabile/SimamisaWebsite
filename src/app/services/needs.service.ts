import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Need } from '../models/need';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NeedsService {

  constructor(private http:HttpClient) {
    
   }

   readonly apiURL="https://simamisaapiv3.azurewebsites.net/simamisa/orphanages/needs";
   
   getAllNeeds():Observable<Need[]>{
    return this.http.get<Need[]>(this.apiURL);
   }
}
