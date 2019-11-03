import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { KcalCounterService } from '../kcal-counter.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  private startDate: Date = new Date(this.kcalService.getFirstRunDate());
  private startDateString: string = this.kcalService.getFirstRunDate();
  private endDate: Date = new Date();
  private endDateString: string = this.kcalService.dateToString(this.endDate);

  private ctx;
  private myChart: Chart;

  private chartData = {
    type: 'bar',
    data: {
      labels: this.makeLabels(this.startDate,this.endDate),
      datasets: [
        {
          label: 'Zjedzone kilokalorie [kcal]',
          data: this.getData(this.startDate, this.endDate),
          backgroundColor: 'rgba(51,102,204,0.2)',
          borderColor: 'rgba(51,102,204,1)',
          borderWidth: 3
        },
        {
          label: 'Ustawiony limit',
          data: this.getData(this.startDate, this.endDate, true),
          type: 'line',
          fill: false,
          borderColor: 'rgba(200, 0, 0, 1)',
          lineTension: 0
          
        }
      ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }

  changeDay(date: Date, x: number): Date {
    let time: number = date.getTime();
    time += x * ( 24 * 60 * 60 * 1000);
    date.setTime(time);
    return date;
  }

  makeLabels (startDate: Date, endDate: Date): Array<string> {
    let labels = [],
        endDateStringLoopStop = '',
        date = new Date();

    date.setTime(endDate.getTime());
    endDateStringLoopStop = this.kcalService.dateToString(date);
    
    for ( date.setTime(startDate.getTime()) ; this.kcalService.dateToString(date) != endDateStringLoopStop ; this.changeDay(date,1) ) {
      labels.push(this.kcalService.dateToString(date));
    }

    console.log(labels);
    return labels;
  }

  getData (startDate: Date, endDate: Date, returnLimit?: boolean): Array<number> {
    let returnData = [],
        endDateStringLoopStop = '',
        date = new Date();

    date.setTime(endDate.getTime());
    endDateStringLoopStop = this.kcalService.dateToString(date);

    for ( date.setTime(startDate.getTime()) ; this.kcalService.dateToString(date) != endDateStringLoopStop ; this.changeDay(date,1) ) {
      let dayRecord = this.kcalService.getDayRecord(date);

      if ( returnLimit ) {
        returnData.push(dayRecord.$kcalLimit);
      } else {
        returnData.push(dayRecord.$kcalConsumed);
      }
    }   

    console.log(returnData);
    return returnData;
  }
  
  
  constructor(private kcalService: KcalCounterService) { }
  
  ngOnInit() {
    this.getData(this.startDate, this.endDate);

    this.ctx = document.getElementById('myChart');
    // this.ctx = document.getElementById('myChart').getContext('2d'); ?? why get context?

    this.myChart = new Chart(this.ctx, this.chartData);
  }

}
