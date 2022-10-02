import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASEURL } from '../constants/constants';
import { adminNeedsReport } from '../models/adminNeedsReport';
import { adminOrphanageNeeds } from '../models/adminOrphanageNeeds';

@Injectable({
  providedIn: 'root'
})
export class AdminReportsService {

  private adminNeedsReportOne = new BehaviorSubject<adminNeedsReport[]>([]);
  private adminNeedsReportTwo = new BehaviorSubject<adminNeedsReport[]>([]);
  private adminNeedsReportThree = new BehaviorSubject<adminNeedsReport[]>([]);
  private orphanageNeedsReport = new BehaviorSubject<adminOrphanageNeeds[]>([]);

  private numberOfOrphanages = new BehaviorSubject<number[]>([]);
  private numberOfUsers = new BehaviorSubject<number[]>([]);
  private numberOfChildren = new BehaviorSubject<number[]>([]);
  private numberOfSponsors = new BehaviorSubject<number[]>([]);
  private donationAmount = new BehaviorSubject<number[]>([]);

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
    getNumberOfOrphanages():Observable<any>{
    this._numberOfOrphanages();
    return this.numberOfOrphanages;

  }
  getNumberOfUsers():Observable<any>{
    this._numberOfUsers();
    return this.numberOfUsers;

  }
  getNumberOfChildren():Observable<any>{
    this._numberOfChildren();
    return this.numberOfChildren;

  }
  getNumberOfSponsors():Observable<any>{
    this._numberOfSponsors();
    return this.numberOfSponsors;

  }
  _numberOfOrphanages(){
    this.http.get<number[]>(this.apiURL.slice(0,-11)+'/admin/orphanages',{headers:this.headers}).subscribe(
      (num)=>{
        this.numberOfOrphanages.next(num);
      }
    );

  }
  _numberOfUsers(){
    this.http.get<number[]>(this.apiURL.slice(0,-11)+'/admin/users',{headers:this.headers}).subscribe(
      (num)=>{
        this.numberOfUsers.next(num);
      }
    );

  }
  _numberOfChildren(){
    this.http.get<number[]>(this.apiURL.slice(0,-11)+'/admin/children',{headers:this.headers}).subscribe(
      (num)=>{
        this.numberOfChildren.next(num);
      }
    );

  }
  _numberOfSponsors(){
    this.http.get<number[]>(this.apiURL.slice(0,-11)+'/admin/sponsors',{headers:this.headers}).subscribe(
      (num)=>{
        this.numberOfSponsors.next(num);
      }
    );

  }

  getOrphanageNeedsReports():Observable<any>{
    console.log('Inside getOrphanageNeedsReports');
    this._orphanageNeedsReports();
    console.log("About to return");
    return this.orphanageNeedsReport;

  }
  _orphanageNeedsReports(){
    this.http.get<adminOrphanageNeeds[]>(this.apiURL.slice(0,-11)+'/admin/unfulfilled',{headers:this.headers}).subscribe(
      (orphNeed)=>{
        this.orphanageNeedsReport.next(orphNeed);
        console.log("orphNeed");
      }
    );
  }

  getTotalDonationAmount():Observable<any>{
    this._totalDonationAmount();
    return this.donationAmount;

  }
  _totalDonationAmount(){
    this.http.get<any[]>(this.apiURL.slice(0,-11)+'/admin/donations',{headers:this.headers}).subscribe(
      (donatiom)=>{
        this.donationAmount.next(donatiom);
        console.log("donation amount");
      }
    );
  }

      

}
