import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ClientRoutingModule } from './client-routing.module';
import { ContainersModule } from './containers/containers.module';

@NgModule({
  imports: [CommonModule, ClientRoutingModule, ContainersModule],
})
export class ClientModule {}
