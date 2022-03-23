import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../../backend/interfaces/product.interface';

@Component({
  selector: 'products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent {
  @Input() inputProducts$!: Observable<ProductInterface[] | undefined>;
  @Input() inputCategoryName = 'Category name';
}
