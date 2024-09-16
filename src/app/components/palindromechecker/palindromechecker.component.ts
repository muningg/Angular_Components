import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  word: string = '';
  result: string = '';

  checkPalindrome() {
    const cleanedWord = this.word.replace(/\s+/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    this.result = cleanedWord === reversedWord ? 'Palindrome' : 'Not a palindrome';
  }
}
