import React from 'react';
import { ProductEndpointAdapt } from 'src/modules/products/adapters/ProductEndpoint.adapter';
import { ProductsGetEndpoint } from 'src/modules/products/dto/ProductsGetEndpoint';
import { Product } from 'src/modules/products/models/Product';
import { AEROLAB_API_URL } from 'src/modules/shared/utils/constants';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';

export interface ProductsRepository {
  findAll: () => Promise<Product[] | undefined>;
}

interface Repository<R> {
  (signal?: AbortSignal): R;
}

export function useChallengeProductsRepository(): Repository<ProductsRepository> {
  return React.useCallback((signal?: AbortSignal) => {
    return {
      async findAll() {
        const response = await fetch(AEROLAB_API_URL + '/products', {
          method: 'GET',
          signal,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + EnvVariables.AEROLAB_API_KEY,
          },
        });

        const result = await response.json();

        const validation = ProductsGetEndpoint.safeParse(result);

        if (!validation.success) {
          console.log('Error while validating ProductsGetEndpoint');
          return;
        }

        return validation.data.map(ProductEndpointAdapt);
      },
    };
  }, []);
}
