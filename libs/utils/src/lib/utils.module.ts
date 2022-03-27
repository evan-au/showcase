import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from './directives/back-button.directive';
import { BreakpointCheckMobileDirective } from './directives/breakpoint-check-mobile.directive';
import { TouchLongPressDirective } from './directives/touch-long-press.directive';
import { MouseLongPressDirective } from './directives/mouse-long-press.directive';
import { CharacterSlicerPipe } from './pipes/character-slicer.pipe';

@NgModule({
  declarations: [
    BackButtonDirective,
    BreakpointCheckMobileDirective,
    TouchLongPressDirective,
    MouseLongPressDirective,
    CharacterSlicerPipe,
  ],
  imports: [CommonModule],
  exports: [
    BackButtonDirective,
    BreakpointCheckMobileDirective,
    TouchLongPressDirective,
    MouseLongPressDirective,
    CharacterSlicerPipe,
  ],
})
export class UtilsModule {}
