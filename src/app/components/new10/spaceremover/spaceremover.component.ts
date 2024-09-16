import { Component } from '@angular/core';

@Component({
  selector: 'app-spaceremover',
  templateUrl: './spaceremover.component.html',
  styleUrl: './spaceremover.component.css'
})
export class SpaceremoverComponent {
  text = '';
  transformedText = '';

  removeSpaces() {
    this.transformedText = this.text.replace(/\s/g, '');
  }
}
