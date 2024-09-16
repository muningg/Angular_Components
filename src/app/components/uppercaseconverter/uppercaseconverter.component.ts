import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputText: string = '';
  convertedText: string = '';

  convertToUppercase(): void {
    this.convertedText = this.inputText.toUpperCase();
  }
}
