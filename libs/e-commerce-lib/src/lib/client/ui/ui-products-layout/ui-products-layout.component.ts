import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

// Components - Angular material sidenav
import { MatDrawer } from '@angular/material/sidenav';

// Interfaces
import { BrandInterface } from '../../../data/interfaces/brand.interface';
import { CategoryInterface } from '../../../data/interfaces/category.interface';

@Component({
  selector: 'ui-products-layout',
  templateUrl: './ui-products-layout.component.html',
  styleUrls: ['./ui-products-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiProductsLayoutComponent {
  @Input() inputCategories!: CategoryInterface[] | null;
  @Input() inputBrands!: BrandInterface[] | null;
  @Output() outputUpdateFilterBrands: EventEmitter<BrandInterface['name']> =
    new EventEmitter();
  @Output() outputUpdateFilterCategories: EventEmitter<
    CategoryInterface['name']
  > = new EventEmitter();
  @Output() outputUpdateFilterAll = new EventEmitter();

  @ViewChild('drawer') private _drawer!: MatDrawer;

  isViewOnMobile!: boolean;
  content = 'All Products';

  isBreakpointMatching(payload: boolean) {
    this.isViewOnMobile = payload;
  }

  updateFilterBrands(payload: BrandInterface['name']) {
    this.outputUpdateFilterBrands.emit(payload);
    this.content = payload as string;

    if (this.isViewOnMobile) this._drawer.close();
  }

  updateFilterCategories(payload: CategoryInterface['name']) {
    this.outputUpdateFilterCategories.emit(payload);
    this.content = payload as string;

    if (this.isViewOnMobile) this._drawer.close();
  }

  updateFilterAll() {
    this.outputUpdateFilterAll.emit();
    this.content = 'All Products';

    if (this.isViewOnMobile) this._drawer.close();
  }
}
