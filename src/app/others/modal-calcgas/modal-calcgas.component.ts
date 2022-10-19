import { Component, OnInit } from '@angular/core';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-modal-calcgas',
  templateUrl: './modal-calcgas.component.html',
  styleUrls: ['./modal-calcgas.component.css','../../../assets/css/modal.css']
})
export class ModalCalcgasComponent implements OnInit {

  constructor(private managerReport: ManagerReportsService) { }

  ngOnInit(): void {
  }
  calculate(form: any){

    let price =  form.unitCost;//what?
    let orphanageID = localStorage.getItem("orphID")!;
    
    this.managerReport.getGasNeeded(orphanageID,price).subscribe((data)=>{
      localStorage.setItem("gas",data);
      window.location.reload();
    })
    

  }
}
