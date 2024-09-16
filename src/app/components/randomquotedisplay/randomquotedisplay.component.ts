import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Ang hindi marunong lumingon sa pinanggalingan ay hindi makararating sa paroroonan. - José Rizal",
    "Sa hinaba-haba ng prusisyon, sa simbahan din ang tuloy. - Filipino Proverb",
    "Walang kapantay ang mag-aral at magtrabaho para sa kinabukasan. - Diosdado Macapagal",
    "七転び八起き (Nanakorobi yaoki) - Fall seven times, stand up eight.",
    "継続は力なり (Keizoku wa chikara nari) - Continuance is power.",
    "努力は必ず報われる (Doryoku wa kanarazu mukuwareru) - Effort will surely be rewarded.",
    "The best revenge is massive success. - Frank Sinatra",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "行動は言葉よりも大きい (Kōdō wa kotoba yori mo ōkii) - Actions are louder than words.",
    "石の上にも三年 (Ishi no ue ni mo sannen) - Three years on a stone.",
    "幸せは自分の心が決める (Shiawase wa jibun no kokoro ga kimeru) - Happiness is determined by your own heart.",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

  randomQuote: string = '';

  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
