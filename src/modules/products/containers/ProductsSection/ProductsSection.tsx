import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import { ProductCardSkeleton } from 'src/modules/products/components/ProductCardSkeleton';
import { ProductsGridSkeleton } from 'src/modules/products/components/ProductsGridSkeleton';
import { ProductsGrid } from 'src/modules/products/containers/ProductsGrid';
import { Product } from 'src/modules/products/models/Product';
import { useChallengeProductsRepository } from 'src/modules/products/service/useChallengeProductsRepository';
import { Heading2 } from 'src/modules/shared/components/base/Heading2';
import { RecolorNeutral } from 'src/modules/shared/components/Recolor';
import { useAbortableEffect } from 'src/modules/shared/hooks/useAbortableEffect';

const ProductHeaderStyled = styled.div({
  marginBlockEnd: '2.5rem',
});

const productsSectionId = 'products-section';

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
  );
};
