import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthStatus } from '@app/entities';
import { UploadFormComponent } from '../upload-form/upload-form.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  get me() {
    return this.authStatus.user;
  }

  constructor(private dialog: MatDialog, private authStatus: AuthStatus) {}

  openUploadForm() {
    this.dialog.open(UploadFormComponent);
  }
}
