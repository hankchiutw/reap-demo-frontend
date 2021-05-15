import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { entityProviders } from './entities';
import { AppRoutingModule } from './routing';
import { SharedModule } from './shared';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [...entityProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
