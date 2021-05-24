import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  showValidationErrors!: boolean;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    const note = new Note(form.value.title, form.value.content);
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }

    this.noteService.addNote(note);
    this.notificationService.show('Note Created');
    this.router.navigateByUrl('/notes');
  }
}
