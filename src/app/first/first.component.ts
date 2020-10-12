import { Component, OnInit, ViewChild} from '@angular/core';

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
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

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
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Actigraph",
          data:[94, 93, 88, 93, 95, 90, 95, 87, 92, 96]
        },
        {
          name: "Fitbit",
          data: [97, 99, 96, 93, 96, 94, 97, 91, 98, 99]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
          name: "Actigraph",
          data:[1.76, 1.68, 2.15, 1.8, 1.17, 1.8, 1.45, 5.15, 2.05, 1.07]
        },
        {
          name: "Fitbit",
          data: [3.11, 3.66, 6.53, 4.13, 3.39, 2.68, 3.23, 4.3, 2.86, 2.14]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
          name: "Actigraph",
          data:[13, 16, 26, 15, 17, 20, 11, 20, 19, 13]
        },
        {
          name: "Fitbit",
          data: [18, 18, 15, 23, 23, 19, 13, 20, 23, 27]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
        max: 30
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
          name: "Actigraph",
          data:[361, 373, 414, 391, 422, 325, 336, 418, 481, 382]
        },
        {
          name: "Fitbit",
          data: [341, 338, 366, 453, 379, 322, 315, 360, 387, 358]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
        min: 250,
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
          name: "Actigraph",
          data:[23, 27, 56, 27, 20, 36, 16, 52, 39, 14]
        },
        {
          name: "Fitbit",
          data: [56, 66, 98, 95, 78, 51, 42, 86, 66, 58]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
          name: "Actigraph",
          data:[23, 27, 56, 27, 20, 36, 16, 52, 39, 14]
        },
        {
          name: "Fitbit",
          data: [56, 66, 98, 95, 78, 51, 42, 86, 66, 58]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
          name: "Actigraph",
          data: [197, 189, 76, 66, 193, 219, 262, 249, 210, 221 ]
        },
        {
          name: "Fitbit",
          data: [186, 181, 72, 61, 175, 208, 252, 241, 230, 212]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
        min: 50,
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

    this.outBedTime = {
      series: [
        {
          name: "Actigraph",
          data: [101, 109, 66, 4, 155, 100, 134, 255, 250, 137]
        },
        {
          name: "Fitbit",
          data: [103, 105, 56, 0, 153, 101, 129, 207, 203, 149]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
        max: 260
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
      series: [
        {
          name: "Actigraph",
          data: [197, 189, 76, 66, 193, 219, 262, 249, 210, 221 ]
        },
        {
          name: "Fitbit",
          data: [197, 187, 77, 71, 182, 215, 261, 250, 234, 213]
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
        categories: ['07-28', '07-29', '07-30', '07-31', '08-01', '08-04', '08-05', '08-06', '08-07', '08-08'],
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
        min: 50,
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
  }

}
