import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeContext } from '../../entities';

@Component({
  selector: 'app-photo-nav',
  templateUrl: './photo-nav.component.html',
  styleUrls: ['./photo-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoNavComponent implements OnInit {
  public get userId() {
    return this.context.selectedUserId;
  }

  constructor(private context: HomeContext) {}

  ngOnInit(): void {}
}
