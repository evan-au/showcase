import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { EffectsNgModule } from '@ngneat/effects-ng';
import { CreateStoreEffects } from './client/data/store/client-store.effects';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ECommerceRoutingModule,
    EffectsNgModule.forFeature([CreateStoreEffects]),
  ],
})
export class ECommerceLibModule {}
