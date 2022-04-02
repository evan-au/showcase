import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ui-delete-dialog',
  templateUrl: './ui-delete-dialog.component.html',
  styleUrls: ['./ui-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDeleteDialogComponent {
  constructor(private _dialogRef: MatDialogRef<UiDeleteDialogComponent>) {}

  confirmDeletion() {
    this._dialogRef.close('Confirm');
  }
}
