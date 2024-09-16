import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  number: number = 0;
  result: string = '';

  checkEvenOdd() {
    this.result = this.number % 2 === 0 ? 'Even' : 'Odd';
  }
}
