import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class HomeContext {
  selectedUserId$ = new ReplaySubject<number>(1);
}
