import { Product } from 'src/modules/products/models/Product';

export interface ProductsRepository {
  findAll: () => Promise<Product[] | undefined>;
}
