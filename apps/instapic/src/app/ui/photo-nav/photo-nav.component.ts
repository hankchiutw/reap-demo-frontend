import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-photo-nav',
  templateUrl: './photo-nav.component.html',
  styleUrls: ['./photo-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
