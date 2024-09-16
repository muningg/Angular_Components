import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  sumOfOdds: number = 0;

  calculateOddSum(): void {
    if (this.number !== null && this.number > 0) {
      this.sumOfOdds = 0;
      for (let i = 1; i <= this.number; i += 2) {
        this.sumOfOdds += i;
      }
    }
  }
}
