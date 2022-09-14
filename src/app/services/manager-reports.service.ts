import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { managerNeedsReport } from '../models/managerNeedsReports';
import { managerProposalReport } from '../models/managerProposalReport';

@Injectable({
  providedIn: 'root'
})
export class ManagerReportsService {
  private managerNeedsReportOne = new BehaviorSubject<managerNeedsReport[]>([]);
  private managerNeedsReportTwo = new BehaviorSubject<managerNeedsReport[]>([]);
  private managerNeedsReportThree = new BehaviorSubject<managerNeedsReport[]>([]);

  private managerProposalReport = new BehaviorSubject<managerProposalReport[]>([]);

  headers: any;

  readonly apiURL = `${BASEURL}/`;
  
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




  getManagerProposalsReport(orphanageID:string):Observable<any>{
    this._managerProposalsReport(orphanageID);
    return this.managerProposalReport;

  } 
   _managerProposalsReport(orphanageID:string){
    this.http.get<managerProposalReport[]>(this.apiURL+'om/report/proposal?id='+orphanageID,{headers:this.headers}).subscribe(
      (proposalReport)=>{
        this.managerProposalReport.next(proposalReport);
      }
    );
  }
}
