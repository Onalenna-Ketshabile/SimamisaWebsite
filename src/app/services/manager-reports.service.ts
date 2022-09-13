import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { managerNeedsReport } from '../models/managerNeedsReports';

@Injectable({
  providedIn: 'root'
})
export class ManagerReportsService {
  private managerNeedsReportOne = new BehaviorSubject<managerNeedsReport[]>([]);
  private managerNeedsReportTwo = new BehaviorSubject<managerNeedsReport[]>([]);
  private managerNeedsReportThree = new BehaviorSubject<managerNeedsReport[]>([]);

  headers: any;

  readonly apiURL = `${BASEURL}`;
  
  constructor(private http:HttpClient) {
     
    this.headers = new HttpHeaders()
    .set('content-type', 'application/json');
  this.headers.set('Accept', 'application/json')
  this.headers.set('Access-Control-Allow-Origin', '*');

   }

  
  getManagerNeedsReportOne(orphanageID:string):Observable<any>{
    this._managerNeedsReportOne(orphanageID);
    return this.managerNeedsReportOne;

  }
  getManagerNeedsReportTwo(orphanageID:string):Observable<any>{
    this._managerNeedsReportTwo(orphanageID);
    return this.managerNeedsReportTwo;

  }
  getManagerNeedsReportThree(orphanageID:string):Observable<any>{
    this._managerNeedsReportThree(orphanageID);
    return this.managerNeedsReportThree;

  }
  _managerNeedsReportOne(orphanageID:string){
    this.http.get<managerNeedsReport[]>(this.apiURL+'om/report/needs?id='+orphanageID+'&rating='+1,{headers:this.headers}).subscribe(
      (needsReport)=>{
        this.managerNeedsReportOne.next(needsReport);
      }
    );
  }
  _managerNeedsReportTwo(orphanageID:string){
    this.http.get<managerNeedsReport[]>(this.apiURL+'om/report/needs?id='+orphanageID+'&rating='+2,{headers:this.headers}).subscribe(
      (needsReport)=>{
        this.managerNeedsReportTwo.next(needsReport);
      }
    );
  }
  _managerNeedsReportThree(orphanageID:string){
    this.http.get<managerNeedsReport[]>(this.apiURL+'om/report/needs?id='+orphanageID+'&rating='+3,{headers:this.headers}).subscribe(
      (needsReport)=>{
        this.managerNeedsReportThree.next(needsReport);
      }
    );
  }
}
