import { Product } from 'src/modules/products/models/Product';
import { ProductEndpoint } from '../dto/ProductEndpoint';

export function ProductEndpointToModelAdapter(
  productEndpoint: ProductEndpoint
) {
  //for typo in category
  const category =
    productEndpoint.category.toLocaleLowerCase().trim() === 'pc accesories'
      ? 'PC Accessories'
      : productEndpoint.category;

  return new Product({
    ...productEndpoint,
    id: productEndpoint._id,
    category: category,
  });
}
