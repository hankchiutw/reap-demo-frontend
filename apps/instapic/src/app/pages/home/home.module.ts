import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './routing';
import { HomeUiModule } from './ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeUiModule, HomeRoutingModule],
})
export class HomeModule {}
