import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-commerce-shared-product-card',
  templateUrl: './shared-product-card.component.html',
  styleUrls: ['./shared-product-card.component.scss'],
})
export class SharedProductCardComponent {
  @Input() inputMode: 'edit' | 'view' = 'edit';
  @Input() inputImage =
    'https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
  @Input() inputProductName = 'Product name';
  @Input() inputProductBrand = 5;
  @Input() inputProductPrice = 400;

  // constructor() { }
}
