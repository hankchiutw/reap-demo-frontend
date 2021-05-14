import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const publicComponents = [LoginFormComponent, SidebarComponent];

@NgModule({
  declarations: [publicComponents],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [publicComponents],
})
export class UiModule {}
