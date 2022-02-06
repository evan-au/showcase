import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ECommerceDataModule } from '@showcase-ws/e-commerce-data';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
// import { SharedUiModule } from '@showcase-ws/shared-ui';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ECommerceDataModule,
    ECommerceRoutingModule,
    SharedModule,
  ],
})
export class ECommerceLibModule {}
