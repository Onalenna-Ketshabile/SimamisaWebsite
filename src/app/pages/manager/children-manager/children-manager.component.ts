import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { ChildrenService } from 'src/app/services/children.service';
import { LoaderService } from 'src/app/services/loader.service';


interface Filter {
  id: number,
  name: string
}
@Component({
  selector: 'app-children-manager',
  templateUrl: './children-manager.component.html',
  styleUrls: ['./children-manager.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class ChildrenManagerComponent implements OnInit {
  children?: Child[];
  loadingHandler = new LoadingHandler();
  allChildren?:Child[];

  filters: Filter[] = [
    {id:0,name:'All'},
    { id: 1, name: 'Sponsored' },
    { id: 2, name: 'Unsponsored' },
   
  ];
  filterval: number = 0;
  isLoaded=false;
  constructor(private cService:ChildrenService, public loaderService:LoaderService) { }

  ngOnInit(): void {
   
  this.getChildren();
  }
  getChildren() {
    this.loadingHandler.start();   
    let  id = localStorage.getItem("orphID")!;
    this.cService.getChildrenByOrphanage(id).subscribe((data) => {
      this.allChildren= data;
      this.updateFilter();
      this.loadingHandler.finish();
      this.isLoaded=true;
    });


  }
  updateFilter(): void {
    
    let selected = this.filters.find(prop => (prop.id == this.filterval))!;
    console.log("SDFGHJ",selected)
    if (selected.name == 'All') {//Get rejected
      this.children =this.allChildren;
      this.isLoaded=true;
    }
    if (selected.name == 'Sponsored') {//Get rejected
      this.children = this.allChildren?.filter(prop => (prop.isSponsored) );
      this.isLoaded=true;
    }
    if (selected.name == 'Unsponsored') {//Get rejected
      this.children = this.allChildren?.filter(prop => (!prop.isSponsored) );
      this.isLoaded=true;
    }
    
    this.loadingHandler.finish();
    
  }
}
