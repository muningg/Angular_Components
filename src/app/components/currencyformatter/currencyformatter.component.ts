import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  formattedAmount: string = '';

  formatCurrency(): void {
    if (this.amount !== null) {
      this.formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(this.amount);
    }
  }
}
