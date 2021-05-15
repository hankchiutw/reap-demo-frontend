import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from './api';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [ApiService],
})
export class SharedModule {}
