import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import { ProductCardSkeleton } from 'src/modules/products/components/ProductCardSkeleton';
import { ProductsGridSkeleton } from 'src/modules/products/components/ProductsGridSkeleton';
import { ProductsGrid } from 'src/modules/products/containers/ProductsGrid';
import { Product } from 'src/modules/products/models/Product';
import { useChallengeProductsRepository } from 'src/modules/products/service/useChallengeProductsRepository';
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
  const [products, setProducts] = React.useState<Product[]>([]);
  const productsRepository = useChallengeProductsRepository();

  function handleChangePage() {
    router.push(router.pathname + `#${productsSectionId}`);
  }

  useAbortableEffect(
    (abortController) => {
      (async () => {
        const _productsRepository = productsRepository(abortController.signal);
        const products = await _productsRepository.findAll();

        if (!products) return;

        setProducts(products);
      })();
    },
    [productsRepository]
  );

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
