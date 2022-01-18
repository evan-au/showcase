import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'showcase-app-bottom-sheet-menu',
  templateUrl: './bottom-sheet-menu.component.html',
  styleUrls: ['./bottom-sheet-menu.component.scss'],
})
export class BottomSheetMenuComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef) {}

  dismissBottomSheet() {
    this._bottomSheetRef.dismiss();
  }
}
