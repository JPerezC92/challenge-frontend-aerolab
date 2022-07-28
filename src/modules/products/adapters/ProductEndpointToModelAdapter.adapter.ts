import { Product } from 'src/modules/products/models/Product';
import { ProductEndpoint } from '../dto/ProductEndpoint';

export function ProductEndpointToModelAdapter(
  productEndpoint: ProductEndpoint
) {
  return new Product({
    ...productEndpoint,
    id: productEndpoint._id,
  });
}
