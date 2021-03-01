import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Importing route-components */
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyRatesComponent } from './currency-rates/currency-rates.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'currencyConv', component: CurrencyConverterComponent},
  { path: 'currencyRates', component: CurrencyRatesComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
