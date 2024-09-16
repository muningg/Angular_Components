import { Component } from '@angular/core';

@Component({
  selector: 'app-ipdetailsdisplayer',
  
  templateUrl: './ipdetailsdisplayer.component.html',
  styleUrl: './ipdetailsdisplayer.component.css'
})
export class IpdetailsdisplayerComponent {
  ipDetails = '';

  showIpDetails() {
    this.ipDetails = '192.168.1.1 - Local IP, Windows 10 - OS'; // Mocked IP details.
  }
}
