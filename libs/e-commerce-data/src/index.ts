import * as ProductsActions from './lib/application/+state/products/products.actions';

import * as ProductsFeature from './lib/application/+state/products/products.reducer';

import * as ProductsSelectors from './lib/application/+state/products/products.selectors';

export { ProductsActions, ProductsFeature, ProductsSelectors };

export * from './lib/e-commerce-data.module';

export * from './lib/application/e-commerce.facade';

// Interfaces
export * from './lib/interfaces/product.interface';
export * from './lib/interfaces/error.interface';
