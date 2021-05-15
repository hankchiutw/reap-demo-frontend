import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoutUsecase } from './logout.usecase';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LogoutUsecase],
})
export class SidebarComponent {
  constructor(private logoutUsecase: LogoutUsecase) {}

  logout() {
    this.logoutUsecase.logout().subscribe();
  }
}
