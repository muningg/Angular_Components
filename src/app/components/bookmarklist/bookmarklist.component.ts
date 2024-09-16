import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  url: string = '';
  bookmarks: string[] = [];

  addBookmark() {
    if (this.url) {
      this.bookmarks.push(this.url);
      this.url = '';
    }
  }
}
