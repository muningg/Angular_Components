import { Component } from '@angular/core';

@Component({
  selector: 'app-textreverser',
  templateUrl: './textreverser.component.html',
  styleUrl: './textreverser.component.css'
})
export class TextreverserComponent {
  text = '';
  transformedText = '';

  reverseText() {
    this.transformedText = this.text.split('').reverse().join('');
  }

  unreverseText() {
    this.transformedText = this.text;
  }
}
