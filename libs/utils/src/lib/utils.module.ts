import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from './directives/back-button.directive';
import { BreakpointCheckDirective } from './directives/breakpoint-check.directive';
import { TouchLongPressDirective } from './directives/touch-long-press.directive';
import { MouseLongPressDirective } from './directives/mouse-long-press.directive';
import { CharacterSlicerPipe } from './pipes/character-slicer.pipe';

@NgModule({
  declarations: [
    BackButtonDirective,
    BreakpointCheckDirective,
    TouchLongPressDirective,
    MouseLongPressDirective,
    CharacterSlicerPipe,
  ],
  imports: [CommonModule],
  exports: [
    BackButtonDirective,
    BreakpointCheckDirective,
    TouchLongPressDirective,
    MouseLongPressDirective,
    CharacterSlicerPipe,
  ],
})
export class UtilsModule {}
