import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciNumbers: number[] = [];

  generateFibonacci(): void {
    if (this.n !== null && this.n > 0) {
      this.fibonacciNumbers = [0, 1];
      for (let i = 2; i < this.n; i++) {
        this.fibonacciNumbers.push(this.fibonacciNumbers[i - 1] + this.fibonacciNumbers[i - 2]);
      }
    }
  }
}
