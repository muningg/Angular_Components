import { Component } from '@angular/core';

@Component({
  selector: 'app-texttonumberconverter',
  templateUrl: './texttonumberconverter.component.html',
  styleUrl: './texttonumberconverter.component.css'
})
export class TexttonumberconverterComponent {
  text = '';
  transformedText = '';
  originalText = '';

  convertToNumbers() {
    this.originalText = this.text;
    this.transformedText = this.text.split('').map(char => char.charCodeAt(0)).join(' ');
  }

  restoreOriginal() {
    this.transformedText = this.originalText;
  }
}
