import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { managerProposalReport } from 'src/app/models/managerProposalReport';
import { AdminReportsService } from 'src/app/services/admin-reports.service';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-doughnut-chart-proposals',
  templateUrl: './doughnut-chart-proposals.component.html',
  styleUrls: ['./doughnut-chart-proposals.component.css']
})
export class DoughnutChartProposalsComponent implements OnInit {

  managerProposalReport!: managerProposalReport;
  constructor(private managerReports: ManagerReportsService) { }

  ngOnInit(): void {

  Chart.register(...registerables); 

  var orphanageID = "";
  orphanageID = String(localStorage.getItem('orphID'));
  this.managerReports.getManagerProposalsReport(orphanageID).subscribe(data=>{
    this.managerProposalReport = data;
    console.log("PropData",this.managerProposalReport);
    if(data){
      
    this.plotGraph();
    }
  });


  

  }

  plotGraph(){
    const myChart = new Chart('mydoughnutChart', {
      type: 'doughnut',
      data: {
          labels: ['Need Met', 'Need Unmet', 'Needs Pending'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
  
  });
  }

}
