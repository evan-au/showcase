import { Component } from '@angular/core';
import { DateTimeService } from '@showcase-ws/utils';

@Component({
  selector: 'showcase-app-digital-clock',
  template: `
    <div
      class="digital-clock w-full flex items-center justify-between px-4 absolute bottom-2 lg:w-auto lg:flex-col lg:items-end lg:px-4 lg:py-2 lg:right-0 text-dark dark:text-light transition-colors duration-1000"
    >
      <div class="digital-clock__clock text-3xl">
        {{ time$ | async | date: 'HH:mm' }}
        <span class="digital-clock__seconds-only text-sm p-0 -ml-4">{{
          time$ | async | date: 'ss'
        }}</span>
      </div>
      <div class="digital-clock__full-date">
        {{ date$ | async | date: 'EE, dd MMM yyy' }}
      </div>
    </div>
  `,
})
export class DigitalClockComponent {
  public time$ = this._dateTimeService.time$;
  public date$ = this._dateTimeService.date$;

  constructor(public _dateTimeService: DateTimeService) {}
}
