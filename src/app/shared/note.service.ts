import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    new Note('First Note', 'This is the first note'),
    new Note('Second Note', 'This is the second note'),
  ];

  constructor() {}

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updateFields);
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex, 1);
  }
}
