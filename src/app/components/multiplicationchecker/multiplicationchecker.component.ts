import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: string = '';

  checkMultiplication(): void {
    if (this.number1 !== null && this.number2 !== null) {
      this.result = this.number1 % this.number2 === 0 ? 
        `${this.number1} is a multiple of ${this.number2}` :
        `${this.number1} is not a multiple of ${this.number2}`;
    }
  }
}
