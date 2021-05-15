import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-photo-nav',
  templateUrl: './photo-nav.component.html',
  styleUrls: ['./photo-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoNavComponent implements OnInit {
  @Input()
  private userId: number;

  constructor() {}

  ngOnInit(): void {}
}
