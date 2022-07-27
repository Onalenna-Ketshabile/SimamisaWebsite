import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, map, from, Observable, shareReplay } from 'rxjs';
import { ObservableStore } from '@codewithdan/observable-store';
import { StoreState } from '../interfaces/store-state';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ObservableStore<StoreState>{

  private loginStatus = new BehaviorSubject<boolean>(false);//Anyone logged in at all?
  private userRole = new BehaviorSubject<String>("U");//Default's to unregistered user
  private name = new BehaviorSubject<String>("");


  constructor(private http: HttpClient) {
    super({
      logStateChanges: true,//Change to true if you wanna see state in console
      trackStateHistory: true,
    });//settings needed for state management

    //bind loginstatus in store to the behavior subject
    this.loginStatus.subscribe((res) => {
      this.setState({ loggedInStatus: res }, 'LOGGED_IN_STATUS');//second param is message to reference what the state is for
    });
    this.userRole.subscribe((res) => {
      this.setState({ userRole: res }, 'USER_ROLE');
    })
  }
  readonly apiURL = "http://simamisaapiv1.azurewebsites.net/simamisa/orphanages/users/login";

  login(details: string): Observable<any> {
    if (details.includes("eren")) {
      let tempUser: any = {
        ID: 1,
        isDonor: false,
        isFlagged: false,
        isSponsor: false,
        isVolunteer: false,
        Status: "new"
      }

      let user = from([tempUser]);
      this.loginStatus.next(true);  
      this.userRole.next("R");
      this.name.next("Eren");
      return user;
    }
    if (details.includes("manager")) {
      let tempUser: any = {
        ID: 1,
        isDonor: false,
        isFlagged: false,
        isSponsor: false,
        isVolunteer: false,
        Status: "new"
      }

      let user = from([tempUser]);
      this.loginStatus.next(true);  
      this.userRole.next("M");
      this.name.next("Chris");
      return user;
    }
     else {
      return new Observable();
    }

    /*return  this.http.post<any>(this.apiURL,details).pipe(
     //shareReplay(),//cache the user data
     map((res)=>{
      if(res && res.ID){
       console.log(res);
      
       return res;
      }
     
     },
   )
    );*/
  }

  get currentuserName(){
    return this.name.asObservable();
  }
  logout(): Observable<any>{
  this.setState({loggedInStatus:false},"LOGGED_IN_STATUS");
  this.setState({userRole:""},"USER_ROLE");
 
  let empty: any = {
    ID: 0,
    isDonor: false,
    isFlagged: false,
    isSponsor: false,
    isVolunteer: false,
    Status: ""
  }

  let user = from([empty]);
  return user;
}
}
