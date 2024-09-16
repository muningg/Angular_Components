import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = '';
  greeting: string = '';

  generateUppercaseGreeting(): void {
    this.greeting = `Hello, ${this.name.toUpperCase()}!`;
  }
}
