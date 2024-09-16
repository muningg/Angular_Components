import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;

  calculateCompoundInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      const interestRate = this.rate / 100;
      this.compoundInterest = this.principal * Math.pow(1 + (interestRate / this.frequency), this.frequency * this.time) - this.principal;
    }
  }
}
