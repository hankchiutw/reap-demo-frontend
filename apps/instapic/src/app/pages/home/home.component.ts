import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthStatus } from '@app/entities';
import { HomeContext } from './entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private context: HomeContext, private authStatus: AuthStatus) {}

  ngOnInit(): void {
    this.context.selectedUserId = this.authStatus.user.id;
  }
}
