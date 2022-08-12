import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, map, from, Observable, shareReplay } from 'rxjs';
import { ObservableStore } from '@codewithdan/observable-store';
import { StoreState } from '../interfaces/store-state';
import { BASEURL } from '../constants/constants';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ObservableStore<StoreState>{


  private loginStatus = new BehaviorSubject<boolean>(this.checkLogin());//Anyone logged in at all?
  private userRole = new BehaviorSubject<String>(this.checkUserRole());//Default's to unregistered user
  private name = new BehaviorSubject<String>("");
  headers : any;

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
    });

     this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
  }


  get currentuserName() {
    return this.name.asObservable();
  }

  get getUserRole() {
    return this.userRole.getValue();
  }
  get getLoggedIn() {
    return this.loginStatus.getValue();
  }

  set setLoggedIn(isLoggedIn: boolean) {
    this.loginStatus.next(isLoggedIn);
  };
  set setUserRole(userRole: String) {
    this.userRole.next(userRole);
  }

  readonly loginURL = `${BASEURL}/users/login`;
  readonly registerURL = `${BASEURL}/users/register`;
  register(body: any) :Observable<any>{
    return this.http.post<any>(this.registerURL,body,{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }
       },
    ));
  }

  login(details: string): Observable<any> {
    /*  if (details.includes("eren")) {
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
        //Local Storage
        localStorage.setItem('loggedIn','true');
        localStorage.setItem('userRole','R');
        localStorage.setItem('userName','Eren');
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
          //Local Storage
          localStorage.setItem('loggedIn','true');
          localStorage.setItem('userRole','M');
          localStorage.setItem('userName','Chris');
        
        return user;
      }
      else {
        return new Observable();
      }*/
   
    return this.http.post<any>(this.loginURL, details, { 'headers': this.headers }).pipe(
      //shareReplay(),//cache the user data
      map((res) => {
        if (res && res.ID) {
          console.log(res);
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('userRole', res.UserRole);
          localStorage.setItem('userName', 'Chris');
          localStorage.setItem('userID', res.ID)
          this.loginStatus.next(true);
          this.userRole.next(localStorage.getItem('userRole')!);
          this.name.next("Chris");
          return res;
        }

      },
      )
    );
  }

  logout(): Observable<any> {
    this.setState({ loggedInStatus: false }, "LOGGED_IN_STATUS");
    this.setState({ userRole: "" }, "USER_ROLE");

    let empty: any = {
      ID: 0,
      isDonor: false,
      isFlagged: false,
      isSponsor: false,
      isVolunteer: false,
      Status: ""
    }
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('userRole', '');
    localStorage.setItem('userName', '');
    let user = from([empty]);
    return user;
  }
  checkLogin() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === 'true') {
      return true;
    } else {
      return false;
    }
  }
  checkUserRole() {
    var role = localStorage.getItem("userRole");
    if (role?.length != 0) {
      return role!;
    } else {
      return "U";
    }
  }


}
