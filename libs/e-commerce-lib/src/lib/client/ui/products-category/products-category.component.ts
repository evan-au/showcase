import { Component, Input } from '@angular/core';
import { ProductInterface } from '@showcase-ws/e-commerce-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent {
  @Input() inputProducts$!: Observable<ProductInterface[] | undefined>;
  @Input() inputCategoryName = 'Category name';
}
