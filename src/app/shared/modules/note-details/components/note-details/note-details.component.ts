import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { INote } from '../../../../interfaces/note.interface';
import { NotesState } from '../../../../state/notes.state';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit, OnDestroy {
  public activeNote!: INote;

  private unsubscribe$ = new Subject<void>();

  constructor(private notesState: NotesState) {
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public ngOnInit(): void {
    this.notesState.activeNoteState$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((note: INote) => {
      this.activeNote = note;
    });
  }
}
