import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASEURL } from '../constants/constants';
import { Child } from '../models/child';
import { ChildUpdate } from '../models/childupdate';

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
  readonly getChildURL = `${BASEURL}/children/child/?id=`;
  readonly getChildrenOrph = `${BASEURL}/children/orphanage/child?id=`;
  public init():void {
    this.http.get<Child[]>(this.apiURL,{headers:this.headers}).subscribe(
      (child)=>{
        this.children.next(child);
        console.log(this.children);
      }
    )
  }
readonly getSpURL= `${BASEURL}/children/sponsorship/?childID=`
  getSponsorShipID(id:string):Observable<any>{
    return this.http.get<string>(this.getSpURL+id,{headers:this.headers});
  }

  getAllChildren():Observable<Child[]>{
    return this.http.get<Child[]>(this.apiURL,{headers:this.headers});
   }
  
   getChildrenByOrphanage(id:string):Observable<Child[]>{
    return this.http.get<Child[]>(this.getChildrenOrph+id,{headers:this.headers});
   }
   getChildByID(id:string):Observable<Child>{
    return this.http.get<Child>(this.getChildURL+id,{headers:this.headers});
   }
   //Child's update posts  ********************************************
    readonly childUpdatesUrl = `${BASEURL}/children/sponsorship/?childID=`//May be incorrect
   getChildUpdatesByID(id:string):Observable<ChildUpdate[]>{
    console.log("OrphID :" + localStorage.getItem("orphID"));
    return this.http.get<ChildUpdate[]>(this.childUpdatesUrl + id, { headers: this.headers });
   }
   readonly createUpdateURL = `${BASEURL}/childneed/`;//Incorrect url
  createChildUpdate(body: string): Observable<any> {
    return this.http.post<any>(this.createUpdateURL, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }

      },
      ));
  }
  //Edit child updte to be updated
  readonly editCUurl = `${BASEURL}/childneed/` //This url is be incorrect
  editChildUpdate(body: string) : Observable<any>{
    return this.http.put<any>(this.editCUurl, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }

      },
      ));
  }
//Delete child updaye to be updated
  readonly deleteCUurl = `${BASEURL}/childneed/?id=`;//Note this url is incorrect
  deleteChildUpdate(ID: number): Observable<any> {
    console.log(ID);
    return this.http.delete<any>(this.deleteCUurl + ID, { headers: this.headers }).pipe(
      map((res) => {

        console.log(res);
        return res;


      },
      ));
  }

}
