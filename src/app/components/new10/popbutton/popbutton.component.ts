import { Component } from '@angular/core';

@Component({
  selector: 'app-popbutton',
  
  templateUrl: './popbutton.component.html',
  styleUrl: './popbutton.component.css'
})
export class PopbuttonComponent {
  count = 0;
  buttons = new Array(5).fill(null);

  popButton() {
    this.count++;
    this.buttons.push(null);
  }
}
