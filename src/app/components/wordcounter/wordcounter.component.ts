import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputText: string = '';
  wordCount: number = 0;

  countWords(): void {
    this.wordCount = this.inputText.trim() ? this.inputText.trim().split(/\s+/).length : 0;
  }
}
