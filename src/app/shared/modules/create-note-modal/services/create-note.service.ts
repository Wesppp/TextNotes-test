import { Injectable } from '@angular/core';

import { INote } from '../../../interfaces/note.interface';
import { notes } from '../../../../../mock-data/notes.mock';

@Injectable()
export class CreateNoteService {
  public createNote(note: INote): void {
    notes.unshift(note);
  }
}
