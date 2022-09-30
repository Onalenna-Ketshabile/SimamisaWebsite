import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { notification } from '../models/notification';
import { notificationAll } from '../models/notificationAll';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private allManagerNotifications = new BehaviorSubject<notificationAll[]>([]);
  headers: any;
  readonly apiURLGetManagerNotifications =`${BASEURL}/om/notifications/?id=`;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');
 this.ManagerNotificationsNum();
  }
  public init():void {
    
  }
  getManagerNotificationsNum():Observable<any>{
      
    return this.allManagerNotifications;
  }
  ManagerNotificationsNum(): void{
    console.log("Loading my partners");
    this.http.get<notificationAll[]>(this.apiURLGetManagerNotifications+localStorage.getItem("orphID"),{headers:this.headers}).subscribe(
      (notification)=>{
        this.allManagerNotifications.next(notification);
        console.log(this.apiURLGetManagerNotifications+localStorage.getItem("orphID"));
      }
    );
  }
  getAllNotifications():Observable<any>{
    return this.http.put<notification>(this.apiURLGetManagerNotifications+localStorage.getItem("orphID"),{headers:this.headers}).pipe(
      map((res)=>{
        if(res && res.ID){
         console.log(res); 
         return res;
        }else{
          return res;
        }
       
       },
    ));
      
  }

    


}
