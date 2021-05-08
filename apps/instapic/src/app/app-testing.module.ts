import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from './shared';
import { entityProviders } from './entities';

@NgModule({
  imports: [BrowserModule, HttpClientTestingModule, SharedModule],
  providers: [...entityProviders],
})
export class AppTestingModule {}
