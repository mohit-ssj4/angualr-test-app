import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.css'],
})
export class BookmarkTileComponent implements OnInit {
  @Input() bookmark!: Bookmark;
  faviconError!: boolean;
  tileIconSrc!: string;

  constructor() {}

  ngOnInit(): void {
    this.tileIconSrc = this.bookmark.url.origin + '/favicon.ico';
  }
}
