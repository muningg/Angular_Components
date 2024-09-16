import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | string = '';

  calculate(operation: string) {
    switch (operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Cannot divide by zero';
        break;
    }
  }
}
