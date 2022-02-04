import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { SearchComponent } from './components/search/search.component';

// Angular material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

const angularMaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatBottomSheetModule,
  MatListModule,
  ScrollingModule,
  MatMenuModule,
  MatSliderModule,
  MatProgressBarModule,
  MatInputModule,
  MatDialogModule,
];

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule, angularMaterialModules],
  exports: [angularMaterialModules, SearchComponent],
})
export class SharedUiModule {}
