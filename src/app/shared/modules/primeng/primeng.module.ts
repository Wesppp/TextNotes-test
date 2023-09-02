import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports: [
    SidebarModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class PrimengModule { }
