import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoNavComponent } from './photo-nav/photo-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const publicComponents = [
  SidebarComponent,
  ToolbarComponent,
  PhotoNavComponent,
];

@NgModule({
  declarations: [...publicComponents],
  imports: [CommonModule],
  exports: [...publicComponents],
})
export class HomeUiModule {}
