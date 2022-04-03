import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

// Interfaces
import { ProductInterface } from '../../../data/interfaces/product.interface';

// Facade
import { AdminFacade } from '../../../data/admin.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UiDeleteDialogComponent } from '../../ui/ui-delete-dialog/ui-delete-dialog.component';

@UntilDestroy({ checkProperties: true })
@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  @Output() outputSaveProduct: EventEmitter<Partial<ProductInterface>> =
    new EventEmitter();
  product$!: Observable<ProductInterface | null>;
  brands$ = this._facade.allBrands$;
  categories$ = this._facade.allCategories$;
  isPending$ = this._facade.isPending$;

  editedProductForm = this._formBuilder.group({
    brand: ['', Validators.required],
    category: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    shipping_information: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor(
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _facade: AdminFacade,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.product$ = this._route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) =>
        this._facade.allProducts$.pipe(
          map(
            (products) =>
              products.find((product) => product.id == id) as ProductInterface
          )
        )
      )
    );

    this.product$
      .pipe(
        map((product) => {
          this.editedProductForm.setValue({
            brand: product?.brand || null,
            category: product?.category || null,
            name: product?.name || null,
            price: product?.price || null,
            description: product?.description || null,
            shipping_information: product?.shipping_information || null,
            image: product?.image || null,
          });
        })
      )
      .subscribe();
  }

  saveProduct(id: ProductInterface['id']) {
    const payload = {
      id,
      product: this.editedProductForm.value as Partial<ProductInterface>,
    };
    this._facade.updateProduct(payload);
    // console.log('SAVE PRODUCT =>', payload);
  }

  handleProductDeletion(payload: ProductInterface['id']) {
    const confirmDeletion$: Observable<string> = this._dialog
      .open(UiDeleteDialogComponent)
      .afterClosed();

    confirmDeletion$.subscribe((value) => {
      if (value === 'Confirm') {
        this._facade.deleteProduct(payload);
      }
    });
  }
}
