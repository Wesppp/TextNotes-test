import { Component } from '@angular/core';

import { notes } from '../../../../../../mock-data/notes.mock';
import { INote } from '../../../../interfaces/note.interface';
import { NotesState } from '../../../../state/notes.state';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  protected readonly notes: INote[] = notes;
  public activeNoteIndex!: number;
  public visible: boolean = false;

  constructor(private notesState: NotesState) {
  }

  public onSelect(note: INote, i: number): void {
    this.activeNoteIndex = i;

    this.notesState.updateActiveNoteState(note);
  }

  public onShowModal(): void {
    this.visible = true;
  }

  public onModalHide(): void {
    this.visible = false
  }
}
