import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  bmiCategory: string = '';

  calculateBMI(): void {
    if (this.height !== null && this.weight !== null && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.bmiCategory = this.getBMICategory(this.bmi);
    }
  }

  private getBMICategory(bmi: number | null): string {
    if (bmi === null) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  }
}
