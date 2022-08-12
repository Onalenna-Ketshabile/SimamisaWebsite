import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASEURL } from '../constants/constants';
import { Child } from '../models/child';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  private children = new BehaviorSubject<Child[]>([]); 
  headers: any;
  constructor(private http:HttpClient) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json');
    this.headers.set( 'Accept','application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');
  }
  
  readonly apiURL =`${BASEURL}/children`;
  
  public init():void {
    this.http.get<Child[]>(this.apiURL,{headers:this.headers}).subscribe(
      (child)=>{
        this.children.next(child);
        console.log(this.children);
      }
    )
  }
  getAllChildren():Observable<Child[]>{
    return this.http.get<Child[]>(this.apiURL,{headers:this.headers});
   }
}
