import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import data from "../../dataofdata"
@Component({
  selector: 'app-likepertag-bar',
  templateUrl: './likepertag-bar.component.html',
  styleUrls: ['./likepertag-bar.component.scss']
})
export class LikepertagBarComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  constructor() { }
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


  ngOnInit() {
    const sourceData = data;
    const tempDataStore = {};

    for (const allrecord of sourceData) {
      const getmonth = new Date(allrecord.dateAdded).getMonth() + 1;
      for (const tagrecord of allrecord.tags) {
        if (tempDataStore[getmonth]) {
          if (tempDataStore[getmonth][tagrecord]) {
          tempDataStore[getmonth][tagrecord] += allrecord.likes;
          } else {
          tempDataStore[getmonth][tagrecord] = allrecord.likes;
          }
      } else {
          tempDataStore[getmonth] = {};
          tempDataStore[getmonth][tagrecord] = allrecord.likes;
      }
      }
    }

    const tagCount = {};

    // tslint:disable-next-line: forin
    for (const month in tempDataStore) {
      console.log(month);
      this.barChartLabels.push(month);
      for (const tag in tempDataStore[month]) {
        if (tagCount[tag]) {
          tagCount[tag].push(tempDataStore[month][tag]);
        } else {
          tagCount[tag] = [tempDataStore[month][tag]];
        }
      }
    }

    // tslint:disable-next-line: forin
    for (const tag in tagCount) {
      this.barChartData.push(
        {data: tagCount[tag], label: tag}
      );
    }


  }

}
