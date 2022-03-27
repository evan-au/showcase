import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';



@NgModule({
  declarations: [
    UiLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiLayoutComponent
  ]
})
export class UiModule { }
