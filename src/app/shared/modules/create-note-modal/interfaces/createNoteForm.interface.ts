import { FormControl } from '@angular/forms';

export interface ICreateNoteForm {
  title: FormControl<string | null>;
  text: FormControl<string | null>;
}

export interface ICreateNoteFormValue {
  title: string;
  text: string;
}
