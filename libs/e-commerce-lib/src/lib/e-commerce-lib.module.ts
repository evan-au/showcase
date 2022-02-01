import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ECommerceDataModule } from '@showcase-ws/e-commerce-data';
// import { ClientModule } from './client/client.module';
// import { AdminModule } from './admin/admin.module';
import { ECommerceRoutingModule } from './e-commerce-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ECommerceDataModule,
    ECommerceRoutingModule,
    // ClientModule,
    // AdminModule,
  ],
})
export class ECommerceLibModule {}
