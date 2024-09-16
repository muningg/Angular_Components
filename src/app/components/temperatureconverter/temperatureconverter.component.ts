import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  temperature: number = 0;
  scale: string = 'Celsius';
  convertedTemperature: number | null = null;

  convertTemperature() {
    if (this.scale === 'Celsius') {
      this.convertedTemperature = (this.temperature * 9 / 5) + 32;
    } else {
      this.convertedTemperature = (this.temperature - 32) * 5 / 9;
    }
  }
}
