import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Need } from '../models/need';
import { Observable, map } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { Childneed } from '../models/childneed';
@Injectable({
  providedIn: 'root'
})
export class NeedsService {



  headers: any;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json');
    this.headers.set('Accept', 'application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  readonly apiURL = `${BASEURL}/needs`;

  getAllNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(this.apiURL + "/active", { headers: this.headers });
  }
  getAllHNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(this.apiURL + "/", { headers: this.headers });
  }
  getNeedByID(id: string): Observable<Need> {
    return this.http.get<any>(this.apiURL+"/active", { headers: this.headers }).pipe(
      map(res => res.find((need:any) => need.ID == id)));
  }
  getOrphanageNeeds = () => {
    console.log("OrphID :" + localStorage.getItem("orphID"));
    return this.http.get<Need[]>(this.apiURL + "/orphanage/" + localStorage.getItem("orphID"), { headers: this.headers });
  }

  postNeed(body: string): Observable<any> {
    return this.http.post<any>(this.apiURL, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }
      },
      ));
  }
  editNeed(body: string): Observable<any>  {
    return this.http.put<any>(this.apiURL, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }
      },
      ));
  }


  readonly deleteURL = `${BASEURL}/needs/?id=`;
  deleteNeed(ID: number): Observable<any> {
    console.log(ID);
    return this.http.delete<any>(this.deleteURL + ID, { headers: this.headers }).pipe(
      map((res) => {

        console.log(res);
        return res;


      },
      ));
  }

  readonly donateurl= `${BASEURL}/needs/proposals/donation`;
  donate(body: string): Observable<any> {
    return this.http.post<any>(this.donateurl, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }
      },
      ));
  }

  
  //Child Neeeds*******************************************************8

  readonly getChildNeeds = `${BASEURL}/childneed/child?childID=`;
  getChildNeedsById = (id: string) => {
    console.log("OrphID :" + localStorage.getItem("orphID"));
    return this.http.get<Childneed[]>(this.getChildNeeds + id, { headers: this.headers });
  }
 

  readonly createNeedURL = `${BASEURL}/childneed/`
  createChildNeed(body: string): Observable<any> {
    return this.http.post<any>(this.createNeedURL, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }

      },
      ));
  }

//Delete child need to be updated
  readonly deleteCNurl = `${BASEURL}/childneed/?id=`;
  deleteChildNeed(ID: number): Observable<any> {
    console.log(ID);
    return this.http.delete<any>(this.deleteCNurl + ID, { headers: this.headers }).pipe(
      map((res) => {

        console.log(res);
        return res;


      },
      ));
  }

  readonly getNeedIDurl = `${BASEURL}/childneed/need?id=`;

  getChildNeedByID(id:string):Observable<any>{
    return this.http.get<any>(this.getNeedIDurl + id, { headers: this.headers }).pipe(
      map((res) => {

        console.log(res);
        return res;


      },
      ));
  }
  //Edit child needs to be updates
  readonly editCNurl = `${BASEURL}/childneed/`; //This url may be incorrect
  editChildNeed(body: string) : Observable<any>{
    return this.http.put<any>(this.editCNurl, body, { headers: this.headers }).pipe(
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          return res;
        }

      },
      ));
  }


}
