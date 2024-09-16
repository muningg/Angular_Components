import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',

  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  inputData: string = '';
  result: string = '';
  submitted: boolean = false;

  submitForm() {
    this.result = this.inputData;
    this.submitted = true;
  }
}
