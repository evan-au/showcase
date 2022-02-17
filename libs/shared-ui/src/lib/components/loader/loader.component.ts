import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'shared-ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() inputLoaderStyle: 'progress' | 'spinner' = 'progress';
  @Input() inputIsLoading$!: Observable<boolean | null>;
}
