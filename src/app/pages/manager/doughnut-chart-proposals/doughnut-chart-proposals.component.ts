import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart-proposals',
  templateUrl: './doughnut-chart-proposals.component.html',
  styleUrls: ['./doughnut-chart-proposals.component.css']
})
export class DoughnutChartProposalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables); 
const myChart = new Chart('mydoughnutChart', {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
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
