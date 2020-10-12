import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-fitbit-actigraph',
  templateUrl: './fitbit-actigraph.component.html',
  styleUrls: ['./fitbit-actigraph.component.css']
})
export class FitbitActigraphComponent {
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
          name: "Fitbit - 1",
          data:[88,
          94,
          92,
          93]
        },
        {
          name: "Fitbit - 2",
          data: [86,
            92,
            90,
            90]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          data:[2.44,
          4.71,
          2.13,
          1.86]
        },
        {
          name: "Fitbit - 2",
          data: [2.55, 3.13, 1.71, 2]
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          data:[29,
          21,
          29,
          36]
        },
        {
          name: "Fitbit - 2",
          data: [27,
            29,
            28,
            40]
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          data:[457,
            389,
            398,
            464]
        },
        {
          name: "Fitbit - 2",
          data: [451,
            449,
            406,
            448]
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          name: "FitBit - 1",
          data:[71,
            99,
            62,
            67]
        },
        {
          name: "Fitbit - 2",
          data: [69,
            91,
            48,
            80]
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          data:[71,
            99,
            62,
            67]
        },
        {
          name: "Fitbit - 2",
          data: [69,
            91,
            48,
            80]
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
        text: "",
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          name: "Fitbit",
          data: [183, 212, 229 ]
        },
        {
          name: "Actigraph",
          data: [187, 240, 187 ]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
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
        text: "Comparing Sleep Parameters",
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
        categories: ['inBedTime( wrt 10 pm)', 'outBed (wrt 6 am)', 'onSetTime(wrt 10pm)'],
        title: {
          text: "Sleep Atrributes"
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
      // 2020-10-01T09:41:30.000
      // 2020-10-02T10:36:00.000
      // 2020-10-03T09:39:30.000
      // 2020-10-04T09:46:30.000
      series: [
        {
          name: "Fitbit - 1",
          data: [220, 219, 223, 228]
        },
        {
          name: "Fitbit - 2",
          data: [221, 276, 219, 226]
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
        categories: ['10-01', '10-02', '10-03', '10-04'],
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
          name: "Fitbit",
          data: [46, 92, 438, 71 ]
        },
        {
          name: "Actigraph",
          data: [44, 80, 427, 106]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
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
        text: "Comparing Sleep Parameters",
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
        categories: ['Awakening Count', 'Eficiency', 'TimeAsleepInMinutes', 'WakeAfterOnset in Minutes'],
        title: {
          text: "Sleep Atrributes"
        }
      },
      yaxis: {
        labels: {
        formatter: function(val, index) {
          return val.toFixed(2);
        }
        },
        title: {
          text: ""
        },
        min: 0,
        max: 500
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
