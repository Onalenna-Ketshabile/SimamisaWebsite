import { Injectable } from '@angular/core';
import * as e from 'express';
import { Subject } from 'rxjs';
import { adminOrphanageNeeds } from '../models/adminOrphanageNeeds';
import { Childneed } from '../models/childneed';
import { ChildUpdate } from '../models/childupdate';
import { Need } from '../models/need';
import { Offer } from '../models/offer';
import { sponsorRequest } from '../models/sponsorRequest';

@Injectable({
  providedIn: 'root'
})
export class DataToModalsService {

  private _offerDataSource = new Subject<Offer>();
  offerDatasent$ = this._offerDataSource.asObservable();

  private _needDataSource = new Subject<Need>();
  needDatasent$ = this._needDataSource.asObservable();

  private _childNeedDataSource = new Subject<Childneed>();
  childNeedDatasent$ = this._childNeedDataSource.asObservable();

  private _childUpdateDataSource = new Subject<ChildUpdate>();
  childUpdateDatasent$ = this._childUpdateDataSource.asObservable();

  private _makeOfferDataSource = new Subject<Number>();
  makeOfferDatasent$ = this._makeOfferDataSource.asObservable();

  private _pdfURLDataSource = new Subject<string>();
  pdfUrlDataSent$ = this._pdfURLDataSource.asObservable();


  private _reqDataSource = new Subject<sponsorRequest>();
  _reqDataSource$ = this._reqDataSource.asObservable();


  private _idDistributeSource = new Subject<adminOrphanageNeeds>();
  idDistributeSent$ = this._idDistributeSource.asObservable();
 
  private _childChangingSource = new Subject<boolean>();
  childChangingSent$ = this._childChangingSource.asObservable();
  constructor() { }

  setOfferDetails(offer: Offer) {
    this._offerDataSource.next(offer);
  }

  setNeedDetails(need: Need) {
    this._needDataSource.next(need);
  }
  setChildNeedDetails(childNeed: Childneed) {
    this._childNeedDataSource.next(childNeed);
  }
  setChildUpdateDetails(childUpdate: ChildUpdate) {
    this._childUpdateDataSource.next(childUpdate);
  }
  setToOrphanageID(ID: number) {
    console.log("Orphanaged clicked has ID " + ID);
    this._makeOfferDataSource.next(ID);
  }

  setpdfURL(url: string) {
    console.log("URL TO PDF", url);
    this._pdfURLDataSource.next(url);
  }

  setRequest(body: any) {
    console.log(body)
    this._reqDataSource.next(body);
  }
  setIDDetails(adminOrphanageNeeds: adminOrphanageNeeds) {
    this._idDistributeSource.next(adminOrphanageNeeds);
  }

  sendChildIsChanging(bool:boolean){
    this._childChangingSource.next(bool);
  }
}
