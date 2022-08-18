import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-children-manager',
  templateUrl: './children-manager.component.html',
  styleUrls: ['./children-manager.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class ChildrenManagerComponent implements OnInit {
  children?: Child[];
  loadingHandler = new LoadingHandler();
  constructor(private cService:ChildrenService) { }

  ngOnInit(): void {
    this.loadingHandler.start();
    this.cService.getAllChildren().subscribe(data=>{
      this.loadingHandler.finish();
      this.children =data;
    });
    localStorage.setItem("childID", "");
  }

}
