import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { fromEvent, map } from 'rxjs';

import { gsap } from 'gsap';
import { Object3D } from 'three';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'showcase-app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  @ViewChild('main', { static: true }) main!: ElementRef<HTMLElement>;

  cameraPositionX = 0;
  cameraPositionY = 0;

  ngOnInit(): void {
    fromEvent(this.main.nativeElement, 'mousemove')
      .pipe(
        map((event) => {
          const windowHalfX = window.innerWidth / 2;
          const windowHalfY = window.innerHeight / 2;

          const { clientX, clientY } = event as MouseEvent;

          const mouseX = (clientX / windowHalfX) * 2 - 1;
          const mouseY = (clientY / windowHalfY) * 2 - 1;

          this.cameraPositionX = mouseY / 2;
          this.cameraPositionY = -mouseX / 2;
        })
      )
      .subscribe();
  }

  moveCamera(object: Object3D) {
    gsap.to(object.rotation, {
      x: this.cameraPositionX,
      y: this.cameraPositionY,
      duration: 0.8,
    });
  }
}
