import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@app/ui';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, UiModule],
})
export class PagesModule {}
