import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { managerNeedsReport } from 'src/app/models/managerNeedsReports';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-line-chart-needs',
  templateUrl: './line-chart-needs.component.html',
  styleUrls: ['./line-chart-needs.component.css']
})
export class LineChartNeedsComponent implements OnInit {

  needsReport?: managerNeedsReport[];
  needsReportPriorityOne!: managerNeedsReport[];
  needsReportPriorityTwo!: managerNeedsReport[];
  needsReportPriorityThree!: managerNeedsReport[];
  constructor(private managerReports: ManagerReportsService) { }

  ngOnInit(): void {

    var OrphanageID ="6";
    //OrphanageID  = localStorage.getItem('OrphID');


    Chart.register(...registerables); 
    
    this.needsReportPriorityOne = []
    this.needsReportPriorityTwo = [];
    this.needsReportPriorityThree =[];


    this.managerReports.getManagerNeedsReportOne(OrphanageID).subscribe(data=>{
        this.needsReportPriorityOne =data;
        console.log(this.needsReportPriorityOne);
         if(this.needsReportPriorityTwo.length != 0){
           console.log("Data Arrived.");
      
         this.plotLineGraph();
         }
      });

    
    this.managerReports.getManagerNeedsReportTwo(OrphanageID).subscribe(data=>{
        this.needsReportPriorityTwo =data;
        console.log(this.needsReportPriorityTwo);
         if(this.needsReportPriorityTwo.length != 0){
           console.log("Data Arrived.");
      
         this.plotLineGraph();
         }
      });

      this.managerReports.getManagerNeedsReportThree(OrphanageID).subscribe(data=>{
        this.needsReportPriorityThree =data;
        console.log(this.needsReportPriorityThree);
         if(this.needsReportPriorityThree.length != 0){
           console.log("Data Arrived.");

           this.plotLineGraph();
         }
      });

  }
  plotLineGraph(){
    
    console.log(this.needsReportPriorityOne,this.needsReportPriorityTwo,this.needsReportPriorityThree);
    if(this.needsReportPriorityOne.length != 0  && this.needsReportPriorityTwo.length != 0  && this.needsReportPriorityThree.length != 0){
      let needsMetTotal: number[] = [0,0,0,0,0,0,0,0,0,0,0,0]; 
      let needsProposedTotal: number[]= [0,0,0,0,0,0,0,0,0,0,0,0];
      let needsmetPercentage:number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
    for(var i = 0; i < 12; i++){
      needsProposedTotal[i] = this.needsReportPriorityOne[i].needs
                      + this.needsReportPriorityTwo[i].needs
                      + this.needsReportPriorityThree[i].needs

           needsMetTotal[i] = this.needsReportPriorityOne[i].metNeeds
                      + this.needsReportPriorityTwo[i].metNeeds
                      + this.needsReportPriorityThree[i].metNeeds

                     // needsmetPercentage[i] = needsMetTotal/needsProposedTotal;
    }  
   
      console.log();
   const myChart = new Chart('myChart', {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
        datasets: [{
            label: 'Needs Proposed',
            data: needsProposedTotal,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        },
        {
          label: 'Needs Met',
          data: needsMetTotal,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            y:  {
           
              
                beginAtZero: true
            }
        }
    }
});
  }
 }
}
