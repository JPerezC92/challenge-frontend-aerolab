import React from 'react';
import { ProductEndpointToModelAdapter } from 'src/modules/products/adapters/ProductEndpoint.adapter';
import { ProductsGetEndpoint } from 'src/modules/products/dto/ProductsGetEndpoint';
import { ProductsRepository } from 'src/modules/products/service/products.repository';
import { Repository } from 'src/modules/shared/service/Repository';
import { AEROLAB_API_URL } from 'src/modules/shared/utils/constants';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';
import { formatBearerToken } from 'src/modules/shared/utils/formatBearerToken';

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
            Authorization: formatBearerToken(EnvVariables.AEROLAB_API_KEY),
          },
        });

        const result = await response.json();

        const validation = ProductsGetEndpoint.safeParse(result);

        if (!validation.success) {
          console.log('Error while validating ProductsGetEndpoint');
          return;
        }

        return validation.data.map(ProductEndpointToModelAdapter);
      },
    };
  }, []);
}
