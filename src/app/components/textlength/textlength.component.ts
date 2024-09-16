import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputText: string = '';
  length: number = 0;

  calculateLength() {
    this.length = this.inputText.length;
  }
}
