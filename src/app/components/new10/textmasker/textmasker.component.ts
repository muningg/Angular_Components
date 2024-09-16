import { Component } from '@angular/core';

@Component({
  selector: 'app-textmasker',
  templateUrl: './textmasker.component.html',
  styleUrl: './textmasker.component.css'
})
export class TextmaskerComponent {
  text = '';
  maskedText = '';

  toggleMask(event: any) {
    this.maskedText = event.target.checked ? this.text : '***'.repeat(this.text.length);
  }
}
