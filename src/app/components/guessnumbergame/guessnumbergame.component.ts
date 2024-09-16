import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  numberToGuess: number = Math.floor(Math.random() * 100) + 1;
  userGuess: number | null = null;
  message: string = '';

  checkGuess(): void {
    if (this.userGuess === this.numberToGuess) {
      this.message = 'Congratulations! You guessed the number!';
    } else if (this.userGuess !== null && this.userGuess < this.numberToGuess) {
      this.message = 'Try higher!';
    } else {
      this.message = 'Try lower!';
    }
  }
}
