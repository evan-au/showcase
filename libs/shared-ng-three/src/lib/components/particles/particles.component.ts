import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ThemeService } from '@showcase-ws/utils';
import { map } from 'rxjs';
import * as THREE from 'three';

UntilDestroy({ checkProperties: true });
@Component({
  selector: 'shared-ngt-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent implements OnInit {
  disc = new THREE.TextureLoader().load('assets/intro/snowflake.svg');
  vertices: number[] = [];
  particlesAmount = 10000;

  color = 'hsla(0, 0%, 93%, 1)';

  constructor(private _theme: ThemeService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.particlesAmount; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;

      this.vertices.push(x, y, z);
    }

    this._theme.theme$
      .pipe(
        map(
          (value) =>
            (this.color = value
              ? 'hsla(213, 94%, 68%, 1)'
              : 'hsla(0, 0%, 93%, 1)')
        )
      )
      .subscribe();
  }
}
