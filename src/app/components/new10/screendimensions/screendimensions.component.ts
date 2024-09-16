import { Component } from '@angular/core';

@Component({
  selector: 'app-screendimensions',
  templateUrl: './screendimensions.component.html',
  styleUrl: './screendimensions.component.css'
})
export class ScreendimensionsComponent {
  width = 0;
  height = 0;

  showDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}
