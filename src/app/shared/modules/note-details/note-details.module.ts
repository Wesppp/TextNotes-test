import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    NoteDetailsComponent,
  ],
  exports: [
    NoteDetailsComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
})
export class NoteDetailsModule { }
