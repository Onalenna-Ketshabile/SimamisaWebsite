import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { accountability } from '../models/accountability';
import { managerDemographicsReport } from '../models/managerDemographicsReport';
import { managerInventoryReport } from '../models/managerInventoryReport';
import { managerNeedsReport } from '../models/managerNeedsReports';
import { managerProposalReport } from '../models/managerProposalReport';
import { unreliableUser } from '../models/unreliableUser';

@Injectable({
  providedIn: 'root'
})
export class ManagerReportsService {
  private managerNeedsReportOne = new BehaviorSubject<managerNeedsReport[]>([]);
  private managerNeedsReportTwo = new BehaviorSubject<managerNeedsReport[]>([]);
  private managerNeedsReportThree = new BehaviorSubject<managerNeedsReport[]>([]);

  private managerProposalReport = new BehaviorSubject<managerProposalReport[]>([]);
  private managerInventoryReport = new BehaviorSubject<managerInventoryReport[]>([]);
  private managerDemographicsReport = new BehaviorSubject<managerDemographicsReport[]>([]);
  private managerFlaggedUsersReport = new BehaviorSubject<unreliableUser[]>([]);

  private sponsorAccountability = new BehaviorSubject<accountability[]>([]);
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
        console.log(this.apiURL+'om/report/needs?id='+orphanageID+'&rating='+1);
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


  getManagerInventoryReport():Observable<any>{
    this._managerInventoryReport();
    return this.managerInventoryReport;

  } 
   _managerInventoryReport(){
    this.http.get<managerInventoryReport[]>(this.apiURL+'om/report/inventory?id='+localStorage.getItem('orphID'),{headers:this.headers}).subscribe(
      (inventoryReport)=>{
        this.managerInventoryReport.next(inventoryReport);
      }
    );
  }

  getManagerDemographicsReport():Observable<any>{
    this._managerDemographicsReport();
    return this.managerDemographicsReport;

  } 
   _managerDemographicsReport(){
    this.http.get<managerDemographicsReport[]>(this.apiURL+'om/report/demographics?id='+localStorage.getItem('orphID'),{headers:this.headers}).subscribe(
      (demographicsReport)=>{
        this.managerDemographicsReport.next(demographicsReport);
      }
    );
  }

  getManagerUnreliableUsers():Observable<any>{
    this._managerUnreliableUsers();
    return this.managerFlaggedUsersReport;

  } 
   _managerUnreliableUsers(){
    this.http.get<unreliableUser[]>(this.apiURL+'om/flags?id='+localStorage.getItem('orphID'),{headers:this.headers}).subscribe(
      (inventoryReport)=>{
        this.managerFlaggedUsersReport.next(inventoryReport);
      }
    );
    console.log('url',this.apiURL+'om/flags?id='+localStorage.getItem('orphID'))
  }

  getSponsorAccountability():Observable<any>{
    this._sponsorAccountability();
    return this.sponsorAccountability;

  } 
   _sponsorAccountability(){
    this.http.get<any[]>(this.apiURL+'om/accountability?id='+localStorage.getItem('orphID'),{headers:this.headers}).subscribe(
      (acc)=>{
        this.sponsorAccountability.next(acc);
      }
    );
    console.log('route',this.apiURL+'om/accountability?id='+localStorage.getItem('orphID'));
  }


}
