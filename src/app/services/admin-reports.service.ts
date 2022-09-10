import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { adminNeedsReport } from '../models/adminNeedsReport';

@Injectable({
  providedIn: 'root'
})
export class AdminReportsService {

  private adminNeedsReportOne = new BehaviorSubject<adminNeedsReport[]>([]);
  private adminNeedsReportTwo = new BehaviorSubject<adminNeedsReport[]>([]);
  private adminNeedsReportThree = new BehaviorSubject<adminNeedsReport[]>([]);
  headers: any;

  readonly apiURL = `${BASEURL}`;
  
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');

  }
  public init():void {

   
  }

  getAdminNeedsReportOne():Observable<any>{
    this._adminNeedsReportOne();
    return this.adminNeedsReportOne;

  }
  getAdminNeedsReportTwo():Observable<any>{
    this._adminNeedsReportTwo();
    return this.adminNeedsReportTwo;

  }
  getAdminNeedsReportThree():Observable<any>{
    this._adminNeedsReportThree();
    return this.adminNeedsReportThree;

  }
  _adminNeedsReportOne(){
    this.http.get<adminNeedsReport[]>(this.apiURL.slice(0,-11)+'/admin/needs?rating='+1,{headers:this.headers}).subscribe(
      (needsReport)=>{
        this.adminNeedsReportOne.next(needsReport);
        console.log(this.adminNeedsReportOne);
      }
    );
  }
  _adminNeedsReportTwo(){
    this.http.get<adminNeedsReport[]>(this.apiURL.slice(0,-11)+'/admin/needs?rating='+2,{headers:this.headers}).subscribe(
      (needsReport)=>{
        this.adminNeedsReportTwo.next(needsReport);
        console.log(this.adminNeedsReportTwo);
      }
    );
  }
  _adminNeedsReportThree(){
    this.http.get<adminNeedsReport[]>(this.apiURL.slice(0,-11)+'/admin/needs?rating='+3,{headers:this.headers}).subscribe(
      (needsReport)=>{
        this.adminNeedsReportThree.next(needsReport);
        console.log(this.adminNeedsReportThree);
      }
    );
  }
      

}
