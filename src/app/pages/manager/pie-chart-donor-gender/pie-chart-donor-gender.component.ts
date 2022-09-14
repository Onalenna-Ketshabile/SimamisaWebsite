import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart-donor-gender',
  templateUrl: './pie-chart-donor-gender.component.html',
  styleUrls: ['./pie-chart-donor-gender.component.css']
})
export class PieChartDonorGenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables); 
    const myChart = new Chart('myPieChart', {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                label: '# of Votess',
                data: [12, 19],
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
