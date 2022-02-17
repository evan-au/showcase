import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'shared-ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() inputLoaderStyle: 'progress' | 'spinner' = 'progress';
  @Input() inputIsLoading$!: Observable<boolean | null>;
  @Input() inputBgColor = '';

  bgColor: string[] = [];

  ngOnInit(): void {
    this.changeBgColor();
  }

  changeBgColor() {
    this.bgColor.push(this.inputBgColor);
  }
}
