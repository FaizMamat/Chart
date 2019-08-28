import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import data from "../../dataofdata"

interface tages {
  // tages: string []
}
@Component({
  selector: 'app-imagespertag-pie',
  templateUrl: './imagespertag-pie.component.html',
  styleUrls: ['./imagespertag-pie.component.scss']
})
export class ImagespertagPieComponent implements OnInit {
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
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
    const alldata = data;

    const countTag = {};
    console.log(countTag);

    for (const x of alldata) {
      for (const tagName of x.tags) {
        if (countTag[tagName]) {
          countTag[tagName] += 1;
        } else {
          countTag[tagName] = 1;
        }
      }
    }

    // tslint:disable-next-line: forin
    for (const key in countTag) {
      this.pieChartLabels.push(key);
      const numPics = countTag[key];
      this.pieChartData.push(numPics);
    }



  }

}
  