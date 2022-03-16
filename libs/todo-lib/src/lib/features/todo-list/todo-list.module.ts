import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';

// Directives
import { TodoGsapRTLDirective } from '../../utils/directives/todo-gsap-rtl.directive';

// Components
import { TodoListComponent } from './todo-list.component';
import { TodoViewComponent } from '../../ui/todo-view/todo-view.component';
import { TodoUserInfoComponent } from '../../ui/todo-user-info/todo-user-info.component';
import { TodoAddComponent } from '../../ui/todo-add/todo-add.component';
import { TodoFilterComponent } from '../../ui/todo-filter/todo-filter.component';
import { TodoCountComponent } from '../../ui/todo-count/todo-count.component';

@NgModule({
  declarations: [
    TodoUserInfoComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoFilterComponent,
    TodoCountComponent,
    TodoGsapRTLDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoListRoutingModule,
    SharedUiModule,
  ],
})
export class TodoListModule {}
