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

    var OrphanageID ="";
    //OrphanageID  = localStorage.getItem('OrphID');

    this.managerReports.getManagerNeedsReportOne(OrphanageID).subscribe(data=>{
        this.needsReportPriorityTwo =data;
        console.log(this.needsReportPriorityTwo);
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

           
         }
      });

    
    Chart.register(...registerables); 
const myChart = new Chart('myChart', {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
            y: {
                beginAtZero: true
            }
        }
    }
});
  }
  plotLineGraph(){

  }

}
