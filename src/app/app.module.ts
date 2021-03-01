import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* project Imports */
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyRatesComponent } from './currency-rates/currency-rates.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyChartComponent } from './currency-rates/currency-chart/currency-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrencyConverterComponent,
    CurrencyRatesComponent,
    HomeComponent,
    ContactComponent,
    CurrencyChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
