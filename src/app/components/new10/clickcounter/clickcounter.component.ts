import { Component } from '@angular/core';

@Component({
  selector: 'app-clickcounter',
  templateUrl: './clickcounter.component.html',
  styleUrl: './clickcounter.component.css'
})
export class ClickcounterComponent {
  count = 0;
  message = '';

  increment() {
    this.count++;
    this.generateMessage();
  }

  generateMessage() {
    if (this.count <= 10) {
      this.message = 'Nice!';
    } else if (this.count <= 50) {
      this.message = 'Very good!';
    } else {
      this.message = this.randomMessage();
    }
  }

  randomMessage() {
    const messages = ['Amazing!', 'Incredible!', 'Outstanding!', 'Unbelievable!'];
    return messages[Math.floor(Math.random() * messages.length)];
  }
}
