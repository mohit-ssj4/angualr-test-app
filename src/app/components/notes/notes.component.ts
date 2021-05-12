import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes!: Note[];

  constructor(private notesService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }
}
