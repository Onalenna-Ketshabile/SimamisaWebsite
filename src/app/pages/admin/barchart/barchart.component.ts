import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
import { adminNeedsReport } from 'src/app/models/adminNeedsReport';
import { AdminReportsService } from 'src/app/services/admin-reports.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

    needsReport?: adminNeedsReport[];
    needsReportPriorityOne!: adminNeedsReport[];
    needsReportPriorityTwo!: adminNeedsReport[];
    needsReportPriorityThree!: adminNeedsReport[];


  
    currentMonth: number  = 0;
  constructor(private adminReports : AdminReportsService) { }

  ngOnInit(): void {
    this.currentMonth  = new Date().getMonth() + 1;

    Chart.register(...registerables); 
    this.needsReportPriorityOne = []
    this.needsReportPriorityTwo = [];
    this.needsReportPriorityThree =[];

    console.log(this.needsReportPriorityOne.length!=0 && this.needsReportPriorityTwo.length!=0);

    if(this.needsReportPriorityOne.length!=0 && this.needsReportPriorityTwo.length!=0 && this.needsReportPriorityThree.length!=0 ){
        console.log("Inside the IF");
    }
    this.adminReports.getAdminNeedsReportOne().subscribe(data=>{
      this.needsReportPriorityOne =data;
      
      console.log(this.needsReportPriorityOne);
       if(this.needsReportPriorityOne.length != 0){
         console.log("Data Arrived.");
         this.plotBarGraph();
         this.plotLineGraph();
       }
    });

    
    this.adminReports.getAdminNeedsReportTwo().subscribe(data=>{
        this.needsReportPriorityTwo =data;
        console.log(this.needsReportPriorityTwo);
         if(this.needsReportPriorityTwo.length != 0){
           console.log("Data Arrived.");
         this.plotBarGraph();
         this.plotLineGraph();
         }
      });

      this.adminReports.getAdminNeedsReportThree().subscribe(data=>{
        this.needsReportPriorityThree =data;
        console.log(this.needsReportPriorityThree);
         if(this.needsReportPriorityThree.length != 0){
           console.log("Data Arrived.");
           this.plotBarGraph();
           this.plotLineGraph();
         }
      });

      
      

    

  }

  plotBarGraph(){
   
    if(this.needsReportPriorityOne.length != 0  && this.needsReportPriorityTwo.length != 0  && this.needsReportPriorityThree.length != 0){
        let needsProposed: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
        let needsMet: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
      for(var i = 0; i < 12; i++){
        needsProposed[i] = this.needsReportPriorityOne[i].needs
                        + this.needsReportPriorityTwo[i].needs
                        + this.needsReportPriorityThree[i].needs

             needsMet[i] = this.needsReportPriorityOne[i].metNeeds
                        + this.needsReportPriorityTwo[i].metNeeds
                        + this.needsReportPriorityThree[i].metNeeds
      }
      console.log("NewArray: "+ needsProposed);
    const myChart = new Chart("barChart", {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Needs Proposed',
                data: needsProposed.slice(0,this.currentMonth),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
                order: 2,
            },
            {
                label: 'Needs Met',
                data: needsMet.slice(0,this.currentMonth),

                backgroundColor: [
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
                    'rgba(255, 159, 64, 1)'
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
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                type: 'line',
                order: 1,
            }
         ]
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

  }
  plotLineGraph(){

    if(this.needsReportPriorityOne.length != 0  && this.needsReportPriorityTwo.length != 0  && this.needsReportPriorityThree.length != 0){ 
   
      let needsMetPrio1: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
      let needsMetPrio2: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
      let needsMetPrio3: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

    for(var i = 0; i < 12; i++){
      needsMetPrio1[i] = this.needsReportPriorityOne[i].metNeeds
      needsMetPrio2[i] = this.needsReportPriorityTwo[i].metNeeds
      needsMetPrio3[i] = this.needsReportPriorityThree[i].metNeeds             
    }
   
      const myChart = new Chart("lineChart", {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Priority 1',
            data: needsMetPrio1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
      
        {
          label: 'Priority 2',
          data: needsMetPrio2,
          backgroundColor: [
          
              'rgba(54, 162, 235, 0.2)',
            
          ],
          borderColor: [
             
              'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
      },

      {
        label: 'Priority 3',
        data: needsMetPrio3,
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
    }
      ]
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
 }

}