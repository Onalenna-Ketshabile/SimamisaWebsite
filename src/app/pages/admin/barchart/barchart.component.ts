import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
import { adminNeedsReport } from 'src/app/models/adminNeedsReport';
import { AdminReportsService } from 'src/app/services/admin-reports.service';
import 'chartjs-adapter-moment';

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

    myChart: any;
    jan : any;
    feb: any;
    mar : any;
    apr: any;
    may : any;
    jun: any;
    jul : any;
    aug: any;
    sep : any;
    oct: any;

    jan2 : any;
    feb2: any;
    mar2 : any;
    apr2: any;
    may2 : any;
    jun2: any;
    jul2 : any;
    aug2: any;
    sep2 : any;
    oct2: any;

    jan3 : any;
    feb3: any;
    mar3 : any;
    apr3: any;
    may3 : any;
    jun3: any;
    jul3 : any;
    aug3: any;
    sep3 : any;
    oct3: any;
  
  
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

    this.adminReports.getNeedDataForAMonth('Feb',1).subscribe(data=> {

       
           console.log('#The needs: ', data );
         console.log("Not making use of data in chart...");

    });

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
  updateMonth(month:any){
    console.log(month.value);
    if(month.value === 'jan'){
      this.myChart.config.data.datasets[0].data = this.jan;
      this.myChart.config.data.datasets[1].data = this.jan2;
      this.myChart.config.data.datasets[2].data = this.jan3;
    }
    if(month.value === 'feb'){
      this.myChart.config.data.datasets[0].data = this.feb;
      this.myChart.config.data.datasets[1].data = this.feb2;
      this.myChart.config.data.datasets[2].data = this.feb3;
    }
    if(month.value === 'mar'){
      this.myChart.config.data.datasets[0].data = this.mar;
      this.myChart.config.data.datasets[1].data = this.mar2;
      this.myChart.config.data.datasets[2].data = this.mar3;
    }
    if(month.value === 'apr'){
      this.myChart.config.data.datasets[0].data = this.apr;
      this.myChart.config.data.datasets[1].data = this.apr2;
      this.myChart.config.data.datasets[2].data = this.apr3;
    }
    if(month.value === 'may'){
      this.myChart.config.data.datasets[0].data = this.may;
      this.myChart.config.data.datasets[1].data = this.may2;
      this.myChart.config.data.datasets[2].data = this.may3;
    }
    if(month.value === 'jun'){
      this.myChart.config.data.datasets[0].data = this.jun;
      this.myChart.config.data.datasets[1].data = this.jun2;
      this.myChart.config.data.datasets[2].data = this.jun3;
    }
    if(month.value === 'jul'){
      this.myChart.config.data.datasets[0].data = this.jul;
      this.myChart.config.data.datasets[1].data = this.jul2;
      this.myChart.config.data.datasets[2].data = this.jul3;
    }
    if(month.value === 'aug'){
      this.myChart.config.data.datasets[0].data = this.aug;
      this.myChart.config.data.datasets[1].data = this.aug2;
      this.myChart.config.data.datasets[2].data = this.aug3;
    }
    if(month.value === 'sep'){
      this.myChart.config.data.datasets[0].data = this.sep;
      this.myChart.config.data.datasets[1].data = this.sep2;
      this.myChart.config.data.datasets[2].data = this.sep3;
    }
    if(month.value === 'oct'){
      this.myChart.config.data.datasets[0].data = this.oct;
      this.myChart.config.data.datasets[1].data = this.oct2;
      this.myChart.config.data.datasets[2].data = this.oct3;
    }















    this.myChart.update();
    console.log(this.myChart.update());
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
      let weeklyarray : number[] = [5,6,7,2,6,5,2,5,9,4,8,0];
    for(var i = 0; i < 12; i++){
      needsMetPrio1[i] = this.needsReportPriorityOne[i].metNeeds
      needsMetPrio2[i] = this.needsReportPriorityTwo[i].metNeeds
      needsMetPrio3[i] = this.needsReportPriorityThree[i].metNeeds             
    }
   


     this.jan = [
      {x: '01-Jan-2022',y: 20},
      {x: '15-Jan-2022', y: 5},
      {x: '25-Jan-2022', y: 30},
      {x: '30-Jan-2022',y: 20},
    ];
    this.jan2 = [
      {x: '01-Jan-2022',y: 0},
      {x: '15-Jan-2022', y: 10},
      {x: '25-Jan-2022', y: 20},
      {x: '30-Jan-2022',y: 20},
    ];
    this.jan3 = [
      {x: '01-Jan-2022',y: 3},
      {x: '15-Jan-2022', y: 0},
      {x: '25-Jan-2022', y: 14},
      {x: '30-Jan-2022',y: 37},
    ];

     this.feb = [
      {x: '01-Feb-2022',y: 40},
      {x: '15-Feb-2022', y: 31},
      {x: '25-Feb-2022', y: 23},
      {x: '28-Feb-2022', y: 8}
      ,
    ];
    
    this.feb2 = [
      {x: '01-Feb-2022',y: 1},
      {x: '15-Feb-2022', y: 16},
      {x: '25-Feb-2022', y: 23},
      {x: '28-Feb-2022', y: 37}
      ,
    ];
    
    this.feb3 = [
      {x: '01-Feb-2022',y: 5},
      {x: '15-Feb-2022', y: 7},
      {x: '25-Feb-2022', y: 5},
      {x: '28-Feb-2022', y: 9}
      ,
    ];

    this.mar = [
      {x: '01-Mar-2022',y: 10},
      {x: '15-Mar-2022', y: 25},
      {x: '25-Mar-2022', y: 40},
      {x: '30-Mar-2022', y: 70}
      ,
    ];
    this.mar2 = [
      {x: '01-Mar-2022',y: 22},
      {x: '15-Mar-2022', y: 5},
      {x: '25-Mar-2022', y: 10},
      {x: '30-Mar-2022', y: 40}
      ,
    ];
    this.mar3 = [
      {x: '01-Mar-2022',y: 56},
      {x: '15-Mar-2022', y: 43},
      {x: '25-Mar-2022', y: 60},
      {x: '30-Mar-2022', y: 36}
      ,
    ];

    this.apr = [
      {x: '01-Apr-2022',y: 5},
      {x: '15-Apr-2022', y: 12},
      {x: '25-Apr-2022', y: 4},
      {x: '30-Apr-2022', y: 21}
      ,
    ];
    this.apr2 = [
      {x: '01-Apr-2022',y: 2},
      {x: '15-Apr-2022', y: 10},
      {x: '25-Apr-2022', y: 25},
      {x: '30-Apr-2022', y: 16}
      ,
    ];
    this.apr3 = [
      {x: '01-Apr-2022',y: 6},
      {x: '15-Apr-2022', y: 8},
      {x: '25-Apr-2022', y: 17},
      {x: '30-Apr-2022', y: 17}
      ,
    ];

    this.may = [
      {x: '01-May-2022',y: 26},
      {x: '15-May-2022', y: 30},
      {x: '25-May-2022', y: 40},
      {x: '30-May-2022', y: 34}
      ,
    ];
    this.may2 = [
      {x: '01-May-2022',y: 0},
      {x: '15-May-2022', y: 67},
      {x: '25-May-2022', y: 30},
      {x: '30-May-2022', y: 27}
      ,
    ];
    this.may3 = [
      {x: '01-May-2022',y: 16},
      {x: '15-May-2022', y: 28},
      {x: '25-May-2022', y: 14},
      {x: '30-May-2022', y: 39}
      ,
    ];
    

    this.jun = [
      {x: '01-Jun-2022',y: 3},
      {x: '15-Jun-2022', y: 32},
      {x: '25-Jun-2022', y: 10},
      {x: '28-Jun-2022', y: 67}
      ,
    ];
    this.jun2 = [
      {x: '01-Jun-2022',y: 1},
      {x: '15-Jun-2022', y: 21},
      {x: '25-Jun-2022', y: 17},
      {x: '28-Jun-2022', y: 4}
      ,
    ];
    this.jun3 = [
      {x: '01-Jun-2022',y: 3},
      {x: '15-Jun-2022', y: 32},
      {x: '25-Jun-2022', y: 24},
      {x: '28-Jun-2022', y: 19}
      ,
    ];

    this.jul = [
      {x: '01-Jul-2022',y: 14},
      {x: '15-Jul-2022', y: 26},
      {x: '25-Jul-2022', y: 21},
      {x: '30-Jul-2022', y: 11}
      ,
    ];

    this.jul2 = [
      {x: '01-Jul-2022',y: 27},
      {x: '15-Jul-2022', y: 6},
      {x: '25-Jul-2022', y: 16},
      {x: '30-Jul-2022', y: 33}
      ,
    ];

    this.jul3 = [
      {x: '01-Jul-2022',y: 9},
      {x: '15-Jul-2022', y: 45},
      {x: '25-Jul-2022', y: 25},
      {x: '30-Jul-2022', y: 21}
      ,
    ];

    this.aug = [
      {x: '01-Aug-2022',y: 15},
      {x: '15-Aug-2022', y: 14},
      {x: '25-Aug-2022', y: 19},
      {x: '30-Aug-2022', y: 2}
      ,
    ];

    this.aug2 = [
      {x: '01-Aug-2022',y: 14},
      {x: '15-Aug-2022', y: 24},
      {x: '25-Aug-2022', y: 22},
      {x: '30-Aug-2022', y: 13}
      ,
    ];

    this.aug3 = [
      {x: '01-Aug-2022',y: 3},
      {x: '15-Aug-2022', y: 10},
      {x: '25-Aug-2022', y: 16},
      {x: '30-Aug-2022', y: 24}
      ,
    ];

    this.sep = [
      {x: '01-Sep-2022',y: 10},
      {x: '15-Sep-2022', y: 25},
      {x: '25-Sep-2022', y: 15},
      {x: '30-Sep-2022', y: 12}
      ,
    ];
    
    this.sep2 = [
      {x: '01-Sep-2022',y: 10},
      {x: '15-Sep-2022', y: 40},
      {x: '25-Sep-2022', y: 38},
      {x: '30-Sep-2022', y: 26}
      ,
    ];
    
    this.sep3 = [
      {x: '01-Sep-2022',y: 3},
      {x: '15-Sep-2022', y: 32},
      {x: '25-Sep-2022', y: 15},
      {x: '30-Sep-2022', y: 18}
      ,
    ];

    this.oct = [
      {x: '01-Oct-2022',y: 33},
      {x: '15-Oct-2022', y: null},
      {x: '25-Oct-2022', y: null},
      {x: '30-Oct-2022', y: null}
      ,
    ];
    this.oct2 = [
      {x: '01-Oct-2022',y: 12},
      {x: '15-Oct-2022', y: null},
      {x: '25-Oct-2022', y: null},
      {x: '30-Oct-2022', y: null}
      ,
    ];
    this.oct3 = [
      {x: '01-Oct-2022',y: 17},
      {x: '15-Oct-2022', y: null},
      {x: '25-Oct-2022', y: null},
      {x: '30-Oct-2022', y: null}
      ,
    ];

    console.log("jan and feb set.");
     this.myChart = new Chart("lineChart", {
    type: 'line',
    data: {
        //labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Priority 1',
            data: this.jan,
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
          data: this.jan2,
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
        data: this.jan3,
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
        plugins: {
          tooltip: {
            callbacks: {
              afterTitle: function(context){
                return  `${context[0].label} Day: ${weeklyarray[context[0].dataIndex]+1} `;
              }
            }
          }
        },
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
