import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing';
import { SharedModule } from './shared';
import { entityProviders } from './entities';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [...entityProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
