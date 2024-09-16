import { Component } from '@angular/core';

@Component({
  selector: 'app-roasterhover',
  templateUrl: './roasterhover.component.html',
  styleUrl: './roasterhover.component.css'
})
export class RoasterhoverComponent {
  roasts: string[] = [
    "Ang taas ng pangarap mo, sana sumabay ang gising mo sa alarm clock.",
    "Huwag kang mag-alala, kahit hindi ka palaging nasa mood, hindi ka nag-iisa.",
    "Sana maging happy ka, kahit sa pagyakap sa mga hindi kaaya-ayang pagkakamali mo.",
    "Kung gusto mong maging bida, baka kailangan mo ring mag-aral ng script ng buhay.",
    "Ikaw ang patunay na kahit walang talent, pwede kang maging VIP sa sariling mundo mo.",
    "Minsan iniisip ko kung ang utak mo ay nagda-diet, kaya’t laging hungry for ideas.",
    "Sa sobrang liksi mo sa mga biro, baka kailangan mo ng assistant sa pag-deliver.",
    "Patawad kung hindi kita masyadong naiintindihan, baka kasi ibang dialekto ang gamit mo.",
    "Huwag kang mag-alala, kahit hindi ka perfect, ikaw pa rin ang best sa mga imperpekto.",
    "Ang galing mo sa pagpapatawa, sana magamit mo rin yan sa pagpapatawa sa sarili mo."
  ];

  currentRoast: string = '';
  currentIndex: number = 0;

  showRoast() {
    this.currentRoast = this.roasts[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.roasts.length;
  }


  
}
