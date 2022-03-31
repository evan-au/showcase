import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// Interfaces
import { AddProductInterface } from '../../../data/interfaces/add-product.interface';
import { BrandInterface } from '../../../data/interfaces/brand.interface';
import { CategoryInterface } from '../../../data/interfaces/category.interface';

@Component({
  selector: 'ui-add-product',
  templateUrl: './ui-add-product.component.html',
  styleUrls: ['./ui-add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAddProductComponent implements OnInit {
  @Input() inputBrands!: BrandInterface[] | null;
  @Input() inputCategories!: CategoryInterface[] | null;
  @Output() outputAddProduct: EventEmitter<AddProductInterface> =
    new EventEmitter();

  addProductForm = this._formBuilder.group({
    brand: ['Algo', Validators.required],
    category: ['Sportwear', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: [
      'Use this introductory paragraph to set the scene and entice the viewer to explore your range of products. Don’t forget to mention the unique selling point of the product.',
      Validators.required,
    ],
    shipping_information: [
      'Include any specific details about how this item is shipped in this area. You might make note of the weight or packaging etc.',
      Validators.required,
    ],
    image: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    return;
  }

  addProduct() {
    console.log('ADD PRODUCT FORM VALUES =>', this.addProductForm.value);
    this.outputAddProduct.emit(this.addProductForm.value);
  }

  resetForm() {
    this.addProductForm.reset();
  }
}
