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
  readonly apiURL_singleChild = `${BASEURL}/children/child?id=`;
  
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
   getChildByID(id: number): Observable<Child>{
   // return this.getAllChildren().pipe(
  //      map(child => child.find(child => child.ID === id))
  //  );
  return this.http.get<Child>(this.apiURL_singleChild + id,{headers:this.headers});
   }
   
}
