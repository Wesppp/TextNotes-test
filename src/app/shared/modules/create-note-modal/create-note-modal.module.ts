import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateNoteModalComponent } from './components/create-note-modal/create-note-modal.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CreateNoteService } from './services/create-note.service';

@NgModule({
  declarations: [
    CreateNoteModalComponent,
  ],
  exports: [
    CreateNoteModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [
    CreateNoteService
  ]
})
export class CreateNoteModalModule { }
