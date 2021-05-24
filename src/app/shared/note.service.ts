import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes!: Note[];

  constructor() {
    this.loadState();
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updateFields);
    this.saveState();
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex, 1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadState() {
    const notesInStorage = JSON.parse(localStorage.getItem('notes') || '[]');
    this.notes = notesInStorage;
  }
}
