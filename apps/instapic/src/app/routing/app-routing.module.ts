import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesModule } from '@app/pages';
import { AuthGuard } from './auth.guard';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
