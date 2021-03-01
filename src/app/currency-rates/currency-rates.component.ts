import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryCard } from '../models/countrycard.model';
import { CardService } from '../services/countrycardservice/card.service';
import {CurrencyChartComponent} from './currency-chart/currency-chart.component'

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.scss'],
})
export class CurrencyRatesComponent implements OnInit {

  currencyChoice!: string;


  countryCards: CountryCard[] = [
    {
      img: 'assets/images/sweden.png',
      name: 'SEK',
      rate: 0,
      date: '',
    },

    {
      img: 'assets/images/den.png',
      name: 'DKK',
      rate: 0,
      date: '',
    },

    {
      img: 'assets/images/usa.png',
      name: 'USD',
      rate: 0,
      date: '',
    },

    {
      img: 'assets/images/nor.png',
      name: 'NOK',
      rate: 0,
      date: '',
    },

    {
      img: 'assets/images/gbp.png',
      name: 'GBP',
      rate: 0,
      date: '',
    },

    {
      img: 'assets/images/swi.png',
      name: 'CHF',
      rate: 0,
      date: '',
    },

  ];

  constructor(private cardRateApi: CardService) { }

  ngOnInit(): void {
    this.cardRateApi.getData().subscribe((data) => {
      /* SEK */
      this.countryCards[0].rate = data.rates.SEK;

      /* DKK */
      this.countryCards[1].rate = data.rates.DKK;
      /* DKK */
      /* DKK */
      this.countryCards[2].rate = data.rates.USD;
      /* DKK */
      this.countryCards[3].rate = data.rates.NOK;
      /* DKK */
      this.countryCards[4].rate = data.rates.GBP;
      /* DKK */
      this.countryCards[5].rate = data.rates.CHF;

      for(let i = 0; i < this.countryCards.length; i++){
        this.countryCards[i].date = data.date;
      }
    });
  }
}
