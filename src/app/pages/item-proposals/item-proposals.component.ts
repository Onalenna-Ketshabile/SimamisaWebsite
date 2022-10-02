import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proposal } from 'src/app/models/proposal';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { LoaderService } from 'src/app/services/loader.service';
import { ProposalServiceService } from 'src/app/services/proposal-service.service';

interface Filter {
  id: number,
  name: string
}
@Component({
  selector: 'app-item-proposals',
  templateUrl: './item-proposals.component.html',
  styleUrls: ['./item-proposals.component.css', '../manager/child-needs/bootstrap.min.css','../../../assets/css/bootstrap.min.css','../../../assets/css/table.css']
})

export class ItemProposalsComponent implements OnInit, OnChanges {
  @ViewChild('editFilter') editFilter!: NgForm;
  public activeLayout = "pickups"
  proposals?: Proposal[];
  allProps?:Proposal[];
  loadingHandler = new LoadingHandler();

  bsPickUp = 'inset 1px 2px 5px #777';
  bsDropOff = 'unset'
  btnPickUp = '#ed7226';
  btnDropOff = '#FF7B29';


  filters: Filter[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Pending' },
    { id: 3, name: 'Fulfilled' },
    { id: 4, name: 'Rejected' },
  ];
  filterval: number = 1;
  isLoaded=false;
  constructor(private proposalService: ProposalServiceService,public loaderService:LoaderService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['filterval']);
  }

  ngOnInit(): void {
    this.getProposals();
  }
  getProposals() {
    this.loadingHandler.start();   
    this.proposalService.getOrphanageProposals().subscribe((data) => {
      this.allProps= data;
      this.updateFilter();
      this.loadingHandler.finish();
      this.isLoaded=true;
    });

  }
  show(){ 

      return !(this.isLoaded && this.proposals!.length<1) ;
  }

  updateFilter(): void {
    
    if (this.activeLayout == 'pickups') {
      this.proposals = this.allProps!.filter(prop => (prop.PickUpPlace != 'Orphanage' && prop.ProposalType=='ITEM'))
    }
    if (this.activeLayout == 'dropoffs') {
      this.proposals = this.allProps!.filter(prop => (prop.PickUpPlace == 'Orphanage' && prop.ProposalType=='ITEM'))
    }
    console.log(this.proposals);

    let selected = this.filters.find(prop => (prop.id == this.filterval))!;
    
    if (selected.name == 'All') {//Get rejected
      this.proposals = this.proposals?.filter(prop => (
      !(  !prop.isAccepted && prop.isFulfilled)//All except the rejected ones
      ));
     
    }
    if (selected.name == 'Pending') {//Get all accepted but not yet delivered or picked up
    this.proposals = this.proposals?.filter(prop => (
      prop.isAccepted && !prop.isFulfilled
    ));
  
  }
  if (selected.name == 'Fulfilled') {//Get all accepted and delivered
    this.proposals = this.proposals?.filter(prop => (
      prop.isAccepted ==true && prop.isFulfilled==true
    ));
   this.isLoaded=true;
  }
 
  if (selected.name == 'Rejected') {//Get rejected
    this.proposals = this.proposals?.filter(prop => (
      !prop.isAccepted && prop.isFulfilled//All  the rejected ones
    ));
    
  }
    this.loadingHandler.finish();
    
  }
  onElementUpdated(element: any) {
    this.getProposals();
    

  }
  showPickUps(): void {
    this.pickUpFocused();
    this.activeLayout = "pickups";//Get the pickups
    this.updateFilter();
   

  }
  showDropOff(): void {
    this.loadingHandler.start();
    this.dropOffFocused();
    this.activeLayout = "dropoffs";//Get the dropoffs
    this.updateFilter();
  }
  pickUpFocused(){
   this.btnPickUp = '#ed7226';
  this.bsPickUp = 'inset 1px 2px 5px #777';
   this.btnDropOff = '#FF7B29';
   this.bsDropOff = 'unset';
  }
  dropOffFocused(){
    this.btnDropOff  = '#ed7226';
    this.bsDropOff = 'inset 1px 2px 5px #777';
     this.btnPickUp = '#FF7B29';
     this.bsPickUp = 'unset';
  }

}
