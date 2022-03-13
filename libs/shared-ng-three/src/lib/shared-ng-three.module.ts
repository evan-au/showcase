import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngt Modules
import {
  NgtCoreModule,
  NgtFogPipeModule,
  NgtColorPipeModule,
} from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtMeshStandardMaterialModule,
  NgtPointsMaterialModule,
} from '@angular-three/core/materials';
import {
  NgtBoxGeometryModule,
  NgtBufferGeometryModule,
} from '@angular-three/core/geometries';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
} from '@angular-three/core/lights';

import {
  NgtSpotLightHelperModule,
  NgtGridHelperModule,
} from '@angular-three/core/helpers';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtPointsModule } from '@angular-three/core/points';
import { NgtFloat32BufferAttributeModule } from '@angular-three/core/attributes';
import { NgtGroupModule } from '@angular-three/core/group';

// Components
import { ParticlesComponent } from './components/particles/particles.component';

const ngtModules = [
  NgtCoreModule,
  NgtMeshModule,
  NgtBoxGeometryModule,
  NgtMeshStandardMaterialModule,
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtSobaOrbitControlsModule,
  NgtBufferGeometryModule,
  NgtPointsMaterialModule,
  NgtPrimitiveModule,
  NgtFogPipeModule,
  NgtPointsModule,
  NgtFloat32BufferAttributeModule,
  NgtColorPipeModule,
];
const ngtExportModules = [
  NgtCoreModule,
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtSobaOrbitControlsModule,
  NgtSpotLightHelperModule,
  NgtGridHelperModule,
  NgtStatsModule,
  NgtFogPipeModule,
  NgtFloat32BufferAttributeModule,
  NgtColorPipeModule,
  NgtGroupModule,
];

@NgModule({
  declarations: [ParticlesComponent],
  imports: [CommonModule, ngtModules],
  exports: [ParticlesComponent, ngtExportModules],
})
export class SharedNgThreeModule {}
