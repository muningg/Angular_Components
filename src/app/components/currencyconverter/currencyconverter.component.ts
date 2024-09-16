import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  amount: number = 0;
  convertedAmount: number = 0;
  conversionRate: number = 56; // 1 USD = 56 PHP

  convertCurrency() {
    this.convertedAmount = this.amount * this.conversionRate;
  }
}
