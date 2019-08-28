import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import data from "../../dataofdata"
@Component({
  selector: 'app-imagespermonth-line',
  templateUrl: './imagespermonth-line.component.html',
  styleUrls: ['./imagespermonth-line.component.scss']
})
export class ImagespermonthLineComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [];
  public chartOption = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  constructor() { }

  ngOnInit() {
    const sourceData = data;
    const tempDataStore = {};

    for (const allrecord of sourceData) {
      const getmonth = new Date(allrecord.dateAdded).getMonth() + 1;
      if (tempDataStore[getmonth]) {
            tempDataStore[getmonth] += 1;
            } else {
              tempDataStore[getmonth] = 0;
              tempDataStore[getmonth] += 1;
              }
    }

    console.log(tempDataStore);

    this.lineChartLabels = Object.keys(tempDataStore);

    console.log(this.lineChartLabels);

    // tslint:disable-next-line: forin
    for (const num in tempDataStore) {
      this.lineChartData.push(
        {data: tempDataStore[num], label: 'Number Of Pic'}
      );
    }
    console.log(this.lineChartData)
  }

}
