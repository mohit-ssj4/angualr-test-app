import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks!: Bookmark[];

  constructor() {
    this.loadState();
  }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((n) => n.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  updateBookmark(id: string, updateFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updateFields);
    this.saveState();
  }

  deleteBookmark(id: string) {
    const toIndex = this.bookmarks.findIndex((n) => n.id === id);
    if (toIndex == -1) return;
    this.bookmarks.splice(toIndex, 1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  loadState() {
    const bookmarksInStorage = JSON.parse(
      localStorage.getItem('bookmarks') || '[]',
      (key, value) => {
        if (key == 'url') return new URL(value);
        return value;
      }
    );
    this.bookmarks = bookmarksInStorage;
  }
}
