import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { INote } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesState {
  private activeNote: Subject<INote> = new Subject<INote>();
  public activeNoteState$: Observable<INote> = this.activeNote.asObservable();

  public updateActiveNoteState(value: INote): void {
    this.activeNote.next(value);
  }
}
