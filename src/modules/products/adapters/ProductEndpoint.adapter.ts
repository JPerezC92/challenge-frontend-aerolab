import { Product } from 'src/modules/products/models/Product';
import { ProductEndpoint } from '../dto/ProductEndpoint';

export function ProductEndpointAdapt(productEndpoint: ProductEndpoint) {
  return new Product({
    ...productEndpoint,
    id: productEndpoint._id,
  });
}
