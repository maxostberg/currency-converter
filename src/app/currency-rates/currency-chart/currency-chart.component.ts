import { Component, Input, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from 'src/app/services/chart-service/chart.service';
import * as moment from 'moment';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss']
})
export class CurrencyChartComponent implements OnInit {
  /* State variables */
  rateArray: number[] = []
  currency!: string;
  showChart = false;

  /* Date-variables */
  dateNow = moment().format('YYYY-MM-DD'); 
  oneMonthBack = moment().subtract(1, 'month').format('YYYY-MM-DD');
  twoMonthBack = moment().subtract(2, 'month').format('YYYY-MM-DD');
  threeMonthBack = moment().subtract(3, 'month').format('YYYY-MM-DD');
  fourMonthBack = moment().subtract(4, 'month').format('YYYY-MM-DD');
  fiveMonthBack = moment().subtract(5, 'month').format('YYYY-MM-DD');


  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [this.fiveMonthBack, this.fourMonthBack, this.threeMonthBack, this.twoMonthBack, this.oneMonthBack, this.dateNow];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }

  initializeChart(event: Event){
    if(this.lineChartData[0].data!.length > 0){
      this.lineChartData[0].data = [];
    }

    if((event.target as HTMLElement).classList.contains('SEK')){
      this.chartService.fiveMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['SEK'])
      })

      this.chartService.fourMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['SEK'])
      })

      this.chartService.threeMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['SEK'])
      })

      this.chartService.twoMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['SEK'])
      })

      this.chartService.oneMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['SEK'])
      })

      this.chartService.thisDateData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['SEK'])
      })

      this.showChart = true;
    }

    if((event.target as HTMLElement).classList.contains('DKK')){
      this.chartService.fiveMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['DKK'])
      })

      this.chartService.fourMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['DKK'])
      })

      this.chartService.threeMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['DKK'])
      })

      this.chartService.twoMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['DKK'])
      })

      this.chartService.oneMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['DKK'])
      })

      this.chartService.thisDateData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['DKK'])
      })

      this.showChart = true;
    }

    if((event.target as HTMLElement).classList.contains('USD')){
      this.chartService.fiveMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['USD'])
      })

      this.chartService.fourMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['USD'])
      })

      this.chartService.threeMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['USD'])
      })

      this.chartService.twoMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['USD'])
      })

      this.chartService.oneMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['USD'])
      })

      this.chartService.thisDateData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['USD'])
      })

      this.showChart = true;
    }

    if((event.target as HTMLElement).classList.contains('NOK')){
      this.chartService.fiveMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['NOK'])
      })

      this.chartService.fourMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['NOK'])
      })

      this.chartService.threeMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['NOK'])
      })

      this.chartService.twoMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['NOK'])
      })

      this.chartService.oneMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['NOK'])
      })

      this.chartService.thisDateData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['NOK'])
      })

      this.showChart = true;
    }

    if((event.target as HTMLElement).classList.contains('GBP')){
      this.chartService.fiveMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['GBP'])
      })

      this.chartService.fourMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['GBP'])
      })

      this.chartService.threeMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['GBP'])
      })

      this.chartService.twoMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['GBP'])
      })

      this.chartService.oneMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['GBP'])
      })

      this.chartService.thisDateData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['GBP'])
      })

      this.showChart = true;
    }

    if((event.target as HTMLElement).classList.contains('CHF')){
      this.chartService.fiveMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['CHF'])
      })

      this.chartService.fourMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['CHF'])
      })

      this.chartService.threeMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['CHF'])
      })

      this.chartService.twoMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['CHF'])
      })

      this.chartService.oneMonthData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['CHF'])
      })

      this.chartService.thisDateData().subscribe((data) => {
        this.lineChartData[0].data?.push(data.rates['CHF'])
      })

      this.showChart = true;
    }
  }

  reset(){
    this.showChart = false;
    this.lineChartData[0].data = []
    console.log(this.lineChartData[0].data)
  }

}
