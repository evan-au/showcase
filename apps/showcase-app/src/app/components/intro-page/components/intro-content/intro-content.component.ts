import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { gsap } from 'gsap';

import TextPlugin from 'gsap/TextPlugin';
import { EasePack } from 'gsap/all';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroContentComponent implements OnInit {
  @ViewChild('intro', { static: true }) intro!: ElementRef<HTMLElement>;
  @ViewChild('greet', { static: true }) greet!: ElementRef<HTMLElement>;
  @ViewChild('description', { static: true })
  description!: ElementRef<HTMLElement>;
  @ViewChild('action', { static: true }) action!: ElementRef<HTMLElement>;
  @ViewChild('footer', { static: true }) footer!: ElementRef<HTMLElement>;

  greetings = 'Hello,';
  words$: Observable<string[]> = of([
    'my name is Evan.',
    'I am a Frontend Developer.',
    'I code in Angular.',
    'I enjoy creating apps.',
  ]);

  greetingsTimeline = gsap.timeline().pause();
  textTimeline = gsap.timeline({ repeat: -1 }).pause();
  cursorTimeline = gsap.timeline().pause();

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin, EasePack);
    this.animateContent();
  }

  animateContent() {
    this.greetingsTimeline
      .to('.flicker', {
        duration: 2,
        autoAlpha: 0.1,
        yoyo: true,
        repeat: -1,
        ease: EasePack.RoughEase.config({
          template: 'none.out',
          strength: 1,
          points: 20,
          taper: 'none',
          randomize: true,
          clamp: false,
        }),
      })
      .from(this.greet.nativeElement, {
        duration: 1,
        x: -300,
        ease: 'sine.in',
        onComplete: () => {
          this.cursorTimeline.play();
        },
      });

    // Cursor;
    this.cursorTimeline
      .from('.cursor', {
        delay: 0.5,
        opacity: 0,
        ease: 'sine.in',
        onComplete: () => {
          this.textTimeline.play();
        },
      })
      .to('.cursor', {
        opacity: 0,
        ease: 'power2.inOut',
        duration: 1,
        repeat: -1,
      });

    this.words$
      .pipe(
        map((words) =>
          words.map((word) => {
            const timeline = gsap.timeline({
              repeat: 1,
              yoyo: true,
              repeatDelay: 1,
              delay: 1,
            });
            timeline.to('.text', {
              duration: 2,
              text: word,
            });
            this.textTimeline.add(timeline);
          })
        )
      )
      .subscribe();

    gsap.from(this.intro.nativeElement, {
      duration: 1.5,
      delay: 0.2,
      y: -100,
      opacity: 0,
      ease: 'sine.in',
      onComplete: () => {
        this.greetingsTimeline.play();
      },
    });

    gsap.from(this.description.nativeElement, {
      delay: 1,
      duration: 2,
      opacity: 0,
      x: '-120%',
      ease: 'sine.in',
    });

    gsap.from(this.action.nativeElement, {
      delay: 2,
      duration: 1,
      opacity: 0,
      ease: 'sine.in',
      y: 300,
    });

    gsap.from(this.footer.nativeElement, {
      delay: 3,
      duration: 0.5,
      opacity: 0,
      ease: 'sine.in',
      x: -300,
    });
  }
}
