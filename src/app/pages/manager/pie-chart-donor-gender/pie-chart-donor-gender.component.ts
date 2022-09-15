import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { managerDemographicsReport } from 'src/app/models/managerDemographicsReport';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-pie-chart-donor-gender',
  templateUrl: './pie-chart-donor-gender.component.html',
  styleUrls: ['./pie-chart-donor-gender.component.css']
})
export class PieChartDonorGenderComponent implements OnInit {

  
managerDemographicsReport!: managerDemographicsReport;
  constructor(private managerReports: ManagerReportsService) { }
ngOnInit(): void {

Chart.register(...registerables); 

var orphanageID = "";
orphanageID = String(localStorage.getItem('orphID'));
this.managerReports.getManagerDemographicsReport().subscribe(data=>{
  this.managerDemographicsReport = data;
  console.log("DemoData",this.managerDemographicsReport);
  if(data){  
  this.plotGraph();
  }
});

}

plotGraph(){

 
  const myChart = new Chart('myPieChart', {
      type: 'pie',
      data: {
          labels: ['Male', 'Female'],
          datasets: [{
              label: '',
              data: [this.managerDemographicsReport.male, this.managerDemographicsReport.female],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderWidth: 1
          }]
      },
  
  });
 
}

}
