import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from './shared';

@NgModule({
  imports: [BrowserModule, HttpClientTestingModule, SharedModule],
})
export class AppTestingModule {}
