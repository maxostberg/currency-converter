import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyconvService } from '../services/currencyconvservice/currencyconv.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  currWasSelected = false;
  submitted = false;

  /* array with selections */
  selections = ['SEK', 'DKK', 'NOK', 'USD', 'GBP', 'EUR', 'CHF'];

  /* array with the rates from the api */
  rateArray: any[] = [];

  /* second currency selector, */
  selectedSecondRate!: number;
  selectedCurrencyName: any;

  /* Form-group for calculating on submit */
  calcForm = new FormGroup({
    currencyAmount: new FormControl(),
    selectList: new FormControl()
  });

  /* Value from the calculation */
  exchangeEndVal!: number;

  constructor(private currencyService: CurrencyconvService) { }

  ngOnInit(): void {
  }

  onBaseCurrencySelect(event: any){
    this.currencyService.getCurrency(event.target.value).subscribe((data) => {
      /* Checking if array is empty, if not, empty it. */
      if(this.rateArray.length > 0){
        this.rateArray = []
      }
      /* Here i push the rates to the rateArray. */
      this.rateArray.push(data.rates);
      this.currWasSelected = true
      console.log(this.rateArray)
    })
  }

  onSecondCurrencySelect(event: any){
    this.selectedSecondRate = this.rateArray[0][event.target.value];
    this.selectedCurrencyName = event.target.value;
    console.log(this.selectedSecondRate);
  }

  calculateExchange(){
    this.exchangeEndVal = Math.floor(this.calcForm.get('currencyAmount')?.value * this.selectedSecondRate);

    this.submitted = true;

    this.calcForm.reset()
    console.log(this.exchangeEndVal)
  }

  reset(){
    this.submitted = false;
    this.selectedCurrencyName = '';
  }

}
