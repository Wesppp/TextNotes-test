import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ICreateNoteForm, ICreateNoteFormValue } from '../../interfaces/createNoteForm.interface';
import { CreateNoteService } from '../../services/create-note.service';

@Component({
  selector: 'app-create-note-modal',
  templateUrl: './create-note-modal.component.html',
  styleUrls: ['./create-note-modal.component.scss']
})
export class CreateNoteModalComponent implements OnInit {
  @Input() public visible: boolean = false;
  @Output() public modalHideEvent = new EventEmitter<void>();

  public form!: FormGroup;

  constructor(private fb: FormBuilder,
              private createNoteService: CreateNoteService) {
  }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group<ICreateNoteForm>({
      title: this.fb.control('', [
        Validators.required
      ]),
      text: this.fb.control('', [
        Validators.required
      ])
    });
  }

  public onSubmit(formValue: ICreateNoteFormValue): void {
    this.createNoteService.createNote(formValue);

    this.form.reset();
  }

  public onHide(): void {
    this.modalHideEvent.emit();
  }
}
