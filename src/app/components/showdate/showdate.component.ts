import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  currentDate: string | null = null;

  showDate() {
    this.currentDate = new Date().toLocaleString();
  }
}
