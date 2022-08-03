import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ProductCardSkeleton } from 'src/modules/products/components/ProductCardSkeleton';
import { ProductsGridSkeleton } from 'src/modules/products/components/ProductsGridSkeleton';
import { ProductsLoadFailureToast } from 'src/modules/products/components/ProductsLoadFailureToast';
import { ProductsGrid } from 'src/modules/products/containers/ProductsGrid';
import { Product } from 'src/modules/products/models/Product';
import { ChallengeProductsRepository } from 'src/modules/products/service/ChallengeProductsRepository';
import { Heading2 } from 'src/modules/shared/components/base/Heading2';
import { Container } from 'src/modules/shared/components/Container';
import { RecolorNeutral } from 'src/modules/shared/components/Recolor';
import { useAbortableEffect } from 'src/modules/shared/hooks/useAbortableEffect';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { BackgroundNeutral0 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';

const ProductsSectionWrapperStyled = styled(Container)([
  BackgroundNeutral0,
  {
    paddingBlockStart: '10rem',

    [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
      paddingBlockStart: '5rem',
    },
  },
]);

const ProductHeaderStyled = styled.div({
  marginBlockEnd: '2.5rem',
});

export const productsSectionId = 'products-section';

export const ProductsSection: React.FC = () => {
  const router = useRouter();

  const { data: products = [] } = useQuery(
    ['products:load'],
    async ({ signal }) => {
      const productsRepository = ChallengeProductsRepository(signal);
      const products = await productsRepository.findAll();
      return products;
    },
    { onError: () => toast(<ProductsLoadFailureToast />) }
  );

  function handleChangePage() {
    router.push(router.pathname + `#${productsSectionId}`);
  }

  return (
    <ProductsSectionWrapperStyled>
      <section id={productsSectionId}>
        <ProductHeaderStyled>
          <Heading2>
            Tech <RecolorNeutral shade={900}>products</RecolorNeutral>
          </Heading2>
        </ProductHeaderStyled>

        <ProductsGrid
          onChangePage={handleChangePage}
          productsDataSource={products}
          skeleton={
            <ProductsGridSkeleton
              component={<ProductCardSkeleton />}
              itemsQuantity={12}
            ></ProductsGridSkeleton>
          }
        />
      </section>
    </ProductsSectionWrapperStyled>
  );
};
