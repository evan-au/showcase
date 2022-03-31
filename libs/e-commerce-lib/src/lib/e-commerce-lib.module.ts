import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { EffectsNgModule } from '@ngneat/effects-ng';

// Elf effects
import { StoreEffects } from './data/store/store.effects';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ECommerceRoutingModule,
    EffectsNgModule.forFeature([StoreEffects]),
  ],
})
export class ECommerceLibModule {}
