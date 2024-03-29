import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Child } from 'src/app/models/child';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-childitem',
  templateUrl: './childitem.component.html',
  styleUrls: ['./../../pages/sponsor-child/sponsor-child.component.css']
})
export class ChilditemComponent implements OnInit {

  @Input()
  child!: Child;
  @Output()
  imClicked: EventEmitter<any> = new EventEmitter();
  orphanage!: Orphanage;
 orphName!: string;
  constructor(private router:Router,private orphanage_service: OrphanageService) { }

  ngOnInit(): void {
    // console.log("block",this.child);
    // this.orphName = this.child.orphanage.OrphanageName;
    console.log(this.child.orphanageID);
    this.orphanage_service.getOrphanageByID(this.child.orphanageID).subscribe(data => {
      this.orphanage = data; 
      if(data){
     console.log("orphanage",this.orphanage.OrphanageName," set!");
       this.orphName = this.orphanage.OrphanageName;
      }
    });
  }

  show():boolean{
    if(localStorage.getItem("userRole")==null &&localStorage.getItem("userName")==null ){
      return false;
    }else{
      return true;
    }
  }
  onSelected(_child: Child): void{

    if(this.show()){
      console.log(_child);
      this.router.navigate(['/orphanage/'+_child.orphanageID+'/child/'+_child.ID]);
    }else{
      this.imClicked.emit();
    }
    
  }

}
