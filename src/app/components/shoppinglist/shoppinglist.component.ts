import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  item: string = '';
  items: string[] = [];

  addItem() {
    if (this.item) {
      this.items.push(this.item);
      this.item = '';
    }
  }

  removeItem(item: string) {
    this.items = this.items.filter(i => i !== item);
  }
}
