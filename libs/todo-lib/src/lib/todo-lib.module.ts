import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoLibRoutingModule } from './todo-lib-routing.module';

import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodoLibRoutingModule, SharedUiModule],
})
export class TodoLibModule {}
