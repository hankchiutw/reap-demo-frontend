import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

const publicComponents = [LoginFormComponent];

@NgModule({
  declarations: [publicComponents],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [publicComponents],
})
export class UiModule {}
