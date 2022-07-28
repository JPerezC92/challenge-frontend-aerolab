import React from 'react';

import { ProductEndpointToModelAdapter } from 'src/modules/products/adapters/ProductEndpointToModelAdapter.adapter';
import { ProductRedeemPostSchema } from 'src/modules/products/dto/ProductRedeemPostEndpoint';
import { ProductsGetEndpoint } from 'src/modules/products/dto/ProductsGetEndpoint';
import { ProductRedeemEventTrigger } from 'src/modules/products/events/ProductRedeem.event';
import { Product } from 'src/modules/products/models/Product';
import { ProductsRepository } from 'src/modules/products/service/products.repository';
import { Repository } from 'src/modules/shared/service/Repository';
import { AEROLAB_API_URL } from 'src/modules/shared/utils/constants';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';
import { formatBearerToken } from 'src/modules/shared/utils/formatBearerToken';

export function useChallengeProductsRepository(): Repository<ProductsRepository> {
  return React.useCallback((signal?: AbortSignal) => {
    return {
      findAll: async () => {
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

      redeem: async (product: Product) => {
        const response = await fetch(AEROLAB_API_URL + '/redeem', {
          method: 'POST',
          signal,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: formatBearerToken(EnvVariables.AEROLAB_API_KEY),
          },
          body: JSON.stringify({ productId: product.id }),
        });

        const result = await response.json();

        const validation = ProductRedeemPostSchema.safeParse(result);

        if (!validation.success) {
          console.log(
            'Error when attempting to redeem product ' + product,
            validation.error
          );
          return;
        }

        ProductRedeemEventTrigger(product);
      },
    };
  }, []);
}
