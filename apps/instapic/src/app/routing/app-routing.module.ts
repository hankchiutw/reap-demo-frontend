import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PagesModule } from '@app/pages';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
