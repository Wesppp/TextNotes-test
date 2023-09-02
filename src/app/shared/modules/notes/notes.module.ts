import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './components/notes/notes.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CreateNoteModalModule } from '../create-note-modal/create-note-modal.module';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    CreateNoteModalModule,
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
