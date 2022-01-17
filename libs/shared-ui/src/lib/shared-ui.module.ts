import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material modules
import { MatButtonModule } from '@angular/material/button';

const angularMaterialModules = [MatButtonModule];

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, angularMaterialModules],
  exports: [angularMaterialModules],
})
export class SharedUiModule {}
