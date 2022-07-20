import styled from '@emotion/styled';
import React from 'react';

const ProductsGridSkeletonStyled = styled.ul({
  display: 'grid',
  rowGap: '3rem',
  columnGap: '1.5rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 19rem), 1fr))',
});

type ProductsGridSkeletonProps = {
  className?: string;
  component: React.ReactElement;
  itemsQuantity: number;
};

export const ProductsGridSkeleton: React.FC<ProductsGridSkeletonProps> = ({
  component,
  itemsQuantity,
}) => {
  const id = React.useId();
  return (
    <ProductsGridSkeletonStyled>
      {Array(itemsQuantity)
        .fill('')
        .map((_, index) => (
          <React.Fragment key={id + index}>{component}</React.Fragment>
        ))}
    </ProductsGridSkeletonStyled>
  );
};
