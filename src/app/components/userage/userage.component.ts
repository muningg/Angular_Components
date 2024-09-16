import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthYear: number = 0;
  age: number | null = null;

  calculateAge() {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
  }
}
