import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules

// Angular material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';

const angularMaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatBottomSheetModule,
  MatListModule,
  ScrollingModule,
  MatMenuModule,
];

@NgModule({
  imports: [CommonModule, angularMaterialModules],
  exports: [angularMaterialModules],
})
export class SharedUiModule {}
