import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import Swiper, { Pagination, SwiperOptions } from 'swiper';

@Component({
  selector: 'ui-welcome',
  templateUrl: './ui-welcome.component.html',
  styleUrls: ['./ui-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UiWelcomeComponent implements OnInit {
  @Output() outputSkipWelcomeIntro = new EventEmitter();

  config: SwiperOptions = {
    pagination: { type: 'fraction' },
  };

  ngOnInit(): void {
    Swiper.use([Pagination]);
  }

  skipWelcomeIntro() {
    this.outputSkipWelcomeIntro.emit();
  }
}
