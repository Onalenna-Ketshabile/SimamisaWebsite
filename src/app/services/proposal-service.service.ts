import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { Proposal } from '../models/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalServiceService {

  headers: any;
  constructor(private http:HttpClient) { 

    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
  }

  readonly apiURL = `${BASEURL}/needs/proposals`;

  getOrphanageProposals = () => {//Get Proposals by OrphID; Fix URL;
   let id= localStorage.getItem("orphID");
    return this.http.get<Proposal[]>(this.apiURL + "/orphanage/?id="+id , { headers: this.headers });
  }
  
  getAcceptedProposals = () => {
    
    return this.getOrphanageProposals().pipe(
      map(props => props.filter(prop => prop.isAccepted == true))
  );
  }

  getRejectedProposals = () => {
    
    return this.getOrphanageProposals().pipe(
      map(props => props.filter(prop => (prop.isAccepted == false && prop.isFulfilled==true)))
  );
  }
  acceptProposal =(id: any)=>{
    let body = JSON.stringify({name:"Accept the proposal"});
    console.log("Accept:"+id)
    return this.http.put<any>(`${BASEURL}/om/accept?proposalID=${id}`,body);
  }
 
  confirmProposal =(id:any)=>{
    let body = JSON.stringify({name:"Confirm the proposal Fulfilled"})
    return this.http.put<any>(`${BASEURL}/om/confirm?proposalID=${id}`,body);
  }
  editProposal(body: string): Observable<any>  {//Url is correct
    return this.http.put<any>(this.apiURL+"/", body, { headers: this.headers }).pipe(
      map((res) => {
        if (res) {
          console.log(res);
          return res;
        }
      },
      ));
  }

  flagUser(body:string):Observable<any>{
    return this.http.put(`${BASEURL}/om/flag`,body, { headers: this.headers }).pipe(
      map((res) => {
     
          console.log(res);
          return res;
        
      },
      ));
  }
  unflagUser(body: string) :Observable<any>{
    return this.http.put(`${BASEURL}/om/unflag`,body, { headers: this.headers }).pipe(
      map((res) => {
     
          console.log(res);
          return res;
        
      },
      ));
  }
}
