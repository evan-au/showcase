import { Component, EventEmitter, Input, Output } from '@angular/core';
import { generateRandomNumbers } from '@showcase-ws/utils';
import * as THREE from 'three';
import { Object3D } from 'three';

@Component({
  selector: 'intro-snowflake-canvas',
  templateUrl: './intro-snowflake-canvas.component.html',
  styleUrls: ['./intro-snowflake-canvas.component.scss'],
})
export class IntroSnowflakeCanvasComponent {
  @Input() inputCameraPositionX!: number;
  @Input() inputCameraPositionY!: number;

  @Output() outputMoveCamera: EventEmitter<Object3D> = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  configControls(controls: any) {
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = generateRandomNumbers(0, 1);

    controls.object.up = new THREE.Vector3(
      generateRandomNumbers(-1, 0),
      generateRandomNumbers(-1, 1),
      0
    );
  }

  moveCamera(object: Object3D) {
    this.outputMoveCamera.emit(object);
  }
}
