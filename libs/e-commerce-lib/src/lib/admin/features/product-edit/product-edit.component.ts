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
            brand: product?.brand,
            category: product?.category,
            name: product?.name,
            price: product?.price,
            description: product?.description,
            shipping_information: product?.shipping_information,
            image: product?.image,
          });
        })
      )
      .subscribe();
  }

  saveProduct(payload: ProductInterface['id']) {
    console.log('PRODUCT ID =>', payload, this.editedProductForm.value);
  }

  handleProductDeletion(payload: ProductInterface['id']) {
    const confirmDeletion$: Observable<string> = this._dialog
      .open(UiDeleteDialogComponent)
      .afterClosed();

    confirmDeletion$.subscribe((value) => {
      if (value === 'Confirm') console.log('PRODUCT ID =>', payload);
    });
  }
}
