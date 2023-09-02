import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { NoteDetailsModule } from '../shared/modules/note-details/note-details.module';
import { NotesModule } from '../shared/modules/notes/notes.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
    imports: [
        CommonModule,
        NoteDetailsModule,
        NotesModule,
    ],
  exports: [
    MainComponent,
  ],
})
export class MainModule { }
