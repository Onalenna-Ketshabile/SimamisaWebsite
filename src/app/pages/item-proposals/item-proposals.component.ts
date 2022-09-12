import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proposal } from 'src/app/models/proposal';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { ProposalServiceService } from 'src/app/services/proposal-service.service';


interface Filter {
  id: number,
  name: string
}
@Component({
  selector: 'app-item-proposals',
  templateUrl: './item-proposals.component.html',
  styleUrls: ['./item-proposals.component.css', '../manager/child-needs/bootstrap.min.css', './../../../assets/css/icons.min.css', '../../../assets/css/bootstrap.min.css']
})

export class ItemProposalsComponent implements OnInit, OnChanges {
  @ViewChild('editFilter') editFilter!: NgForm;
  public activeLayout = "pickups"
  proposals?: Proposal[];
  loadingHandler = new LoadingHandler();

  filters: Filter[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Pending' },
    { id: 3, name: 'Fulfilled' },
    { id: 4, name: 'Rejected' },
  ];
  filterval: number = 1;
  constructor(private proposalService: ProposalServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['filterval']);
  }

  ngOnInit(): void {
    this.getProposals();
  }
  getProposals() {
    this.loadingHandler.start();

    this.proposalService.getOrphanageProposals().subscribe(data => {
      
      if (this.activeLayout == 'pickups') {
        this.proposals = data.filter(prop => (prop.PickUpPlace !== 'Orphanage' && prop.ProposalType=='ITEM'))
      }
      if (this.activeLayout == 'dropoffs') {
        this.proposals = data.filter(prop => (prop.PickUpPlace === 'Orphanage' && prop.ProposalType=='ITEM'))
      }
      console.log(this.proposals);

      let selected = this.filters.find(prop => (prop.id == this.filterval))!;
  
      if (selected.name == 'All') {//Get rejected
        this.proposals = this.proposals?.filter(prop => (
        !(  !prop.isAccepted && prop.isFulfilled)//All except the rejected ones
        ));
        console.log('All')
      }
      if (selected.name == 'Pending') {//Get all accepted but not yet delivered or picked up
      this.proposals = this.proposals?.filter(prop => (
        prop.isAccepted && !prop.isFulfilled
      ));
      console.log('Pending')
    }
    if (selected.name == 'Fulfilled') {//Get all accepted and delivered
      this.proposals = this.proposals?.filter(prop => (
        prop.isAccepted ==true && prop.isFulfilled==true
      ));
      console.log('Fulfiled');
    }
   
    if (selected.name == 'Rejected') {//Get rejected
      this.proposals = this.proposals?.filter(prop => (
        !prop.isAccepted && prop.isFulfilled//All  the rejected ones
      ));
      console.log('Rejected')
    }
      this.loadingHandler.finish();
    });

  }
  updateFilter(): void {
    
    this.getProposals();//Get all proposals again
    
  }
  onElementUpdated(element: any) {

    this.updateFilter();

  }
  showPickUps(): void {
    this.activeLayout = "pickups";//Get the pickups
    this.updateFilter()

  }
  showDropOff(): void {
    this.activeLayout = "dropoffs";//Get the dropoffs
    this.updateFilter();
  }

}
