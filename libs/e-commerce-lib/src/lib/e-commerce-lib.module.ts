import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { EffectsNgModule } from '@ngneat/effects-ng';
import { ClientStoreEffects } from './client/data/store/client-store.effects';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ECommerceRoutingModule,
    EffectsNgModule.forFeature([ClientStoreEffects]),
  ],
})
export class ECommerceLibModule {}
