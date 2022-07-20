import { z } from 'zod';
import { ProductEndpointSchema } from './ProductEndpoint';

export const ProductsGetEndpoint = z.array(ProductEndpointSchema);
