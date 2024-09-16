import { Component } from '@angular/core';

@Component({
  selector: 'app-textrumbler',
  templateUrl: './textrumbler.component.html',
  styleUrl: './textrumbler.component.css'
})
export class TextrumblerComponent {
  text = '';
  transformedText = '';
  originalText = '';

  rumbleText() {
    this.originalText = this.text;
    this.transformedText = this.text.split('').sort(() => Math.random() - 0.5).join('');
  }

  unrumbleText() {
    this.transformedText = this.originalText;
  }
}
