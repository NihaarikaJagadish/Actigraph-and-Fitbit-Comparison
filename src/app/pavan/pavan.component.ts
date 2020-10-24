import { Component, OnInit, ViewChild} from '@angular/core';
import { FetchService } from 'src/services/fetchData.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
export type avgAwakeningInMinutes = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type timeAsleep = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
export type awakeningCount = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type timeAwake = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type wakeAfterOnset = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type inBedTime = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type outBedTime = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type onSetTime = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-pavan',
  templateUrl: './pavan.component.html',
  styleUrls: ['./pavan.component.css']
})
export class PavanComponent   {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public avgAwakeningInMinutes: Partial<ChartOptions>;
  public awakeningCount: Partial<ChartOptions>;
  public timeAsleep: Partial<ChartOptions>;
  public timeAwake: Partial<ChartOptions>;
  public wakeAfterOnset: Partial<ChartOptions>;
  public inBedTime: Partial<ChartOptions>;
  public outBedTime: Partial<ChartOptions>;
  public onSetTime: Partial<ChartOptions>;
  public details;
  public dataLoaded = false;
  public email_1 = 'agitationtrial005@gmail.com';
  public email_2 = "agitationtrial006@gmail.com";
  constructor(private fetchData: FetchService) {
    this.fetchData.fetchArrayData({ email1: this.email_1, email2: this.email_2 }).subscribe((res) => {
      console.log(res);
      this.details = res;
    
    this.chartOptions = {
      series: [
        {
          name: "Fitbit - 1",
          data: this.details[this.email_1]["efficiency"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["efficiency"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Sleep Efficiency",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Efficiency"
        },
        min: 75,
        max: 100
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };


    this.avgAwakeningInMinutes = {
      series: [
        {
          name: "Fitbit - 1",
          data:this.details[this.email_1]["avgMinutes"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["avgMinutes"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#06d6a0", "#118ab2"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Average awakening In Minutes",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 0,
        max: 7
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.awakeningCount = {
      series: [
        {
          name: "Fitbit - 1",
          data:this.details[this.email_1]["awakeningCount"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["awakeningCount"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#e36414", "#0f4c5c"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Awakening Count",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Count"
        },
        min: 0,
        max: 50
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.timeAsleep = {
      series: [
        {
          name: "Fitbit - 1",
          data:this.details[this.email_1]["timeAsleep"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["timeAsleep"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#6d597a", "#065a60"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Time Asleep In Minutes",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 100,
        max: 600
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.timeAwake = {
      series: [
        {
          name: "FitBit - 1",
          data:this.details[this.email_1]["timeAwake"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["timeAwake"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#219ebc", "#fb8500"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Time Awake In Minutes",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 10,
        max: 110
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    this.wakeAfterOnset = {
      series: [
        {
          name: "Fitbit - 1",
          data:this.details[this.email_1]["wakeAfterOnset"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["wakeAfterOnset"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#0db39e", "#245501"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Wake After Sleep Onset",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 10,
        max: 110
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    this.inBedTime = {
      series: [
        {
          name: "Fitbit - 1",
          data: this.details[this.email_1]["inbed"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["inbed"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#9e0059", "#57cc99"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "In Bed Time (The Minutes Past 10 p.m. is Displayed)",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 120,
        max: 600
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.outBedTime = {
      // 2020-10-01T09:41:30.000
      // 2020-10-02T10:36:00.000
      // 2020-10-03T09:39:30.000
      // 2020-10-04T09:46:30.000
      series: [
        {
          name: "Fitbit - 1",
          data: this.details[this.email_1]["outbed"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["outbed"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Out Bed Time (The Minutes Past 6 a.m is Displayed)",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 0,
        max: 300
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.onSetTime = {
      // 2020-10-01T00:57:30.000
      // 2020-10-02T01:43:00.000
      // 2020-10-03T02:08:00.000
      // 2020-10-04T00:57:30.000
      series: [
        {
          name: "Fitbit - 1",
          data: this.details[this.email_1]["onset"]
        },
        {
          name: "Fitbit - 2",
          data: this.details[this.email_2]["onset"]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#f86624", "#22577a"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Sleep OnSet Time (The Minutes Past 10 p.m. is Displayed)",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.details[this.email_1]["dates"],
        title: {
          text: "Dates"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: "Minutes"
        },
        min: 120,
        max: 600
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    this.dataLoaded = true
  });
  }

}
