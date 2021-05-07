import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UiModule } from '@app/ui';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, UiModule],
})
export class PagesModule {}
