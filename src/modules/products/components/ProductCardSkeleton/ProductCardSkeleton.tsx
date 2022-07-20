import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const pulse = keyframes`
50% {
    background: #DAE4F2;
  }
`;
const ProductCardSkeletonStyled = styled.li(({ theme: { Colors } }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
}));

const Wrapper = styled.div(({ theme: { Colors } }) => [
  {
    border: `1px solid ${Colors.neutral[300]}`,
    display: 'inline-grid',
    borderRadius: '1rem',
  },
]);
const Picture = styled.div({
  width: '100%',
  minHeight: '361px',
  height: '100%',
  display: 'flex',

  ['svg']: { margin: 'auto' },
});

const Content = styled.div(({ theme: { Colors } }) => [
  {
    borderTop: `1px solid ${Colors.neutral[300]}`,
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '.5rem',
  },
]);

const ProductName = styled.div(({ theme: { Colors } }) => [
  {
    background: Colors.neutral[200],
    width: '208px',
    height: '1rem',
    borderRadius: '0.75rem',
    animation: `${pulse} 1s cubic-bezier(.4,0,.6,1) infinite`,
  },
]);

const ProductCategory = styled.div(({ theme: { Colors } }) => [
  {
    background: Colors.neutral[200],
    width: '104px',
    height: '.5rem',
    borderRadius: '.25rem',
    animation: `${pulse} 1s cubic-bezier(.4,0,.6,1) infinite`,
  },
]);

const ButtonSkeleton = styled.div(({ theme: { Colors } }) => [
  {
    background: Colors.neutral[200],
    height: '59px',
    borderRadius: '.75rem',
    animation: `${pulse} 1s cubic-bezier(.4,0,.6,1) infinite`,
  },
]);

type ProductCardSkeletonProps = {
  className?: string;
};

export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({}) => {
  return (
    <ProductCardSkeletonStyled>
      <Wrapper>
        <Picture>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M71.7365 12.8091C71.2812 12.0355 70.2726 11.7702 69.4844 12.2171L42.4965 27.5093C41.8823 27.8576 41.5634 28.553 41.7058 29.2352L50.7885 72.7976C50.8323 73.0074 50.7416 73.3172 50.6041 73.4693L49.5006 74.6907C47.2065 77.2303 45.263 78.6061 41.5688 78.6061C37.4267 78.6061 35.482 76.4632 32.4027 72.6757C28.725 68.1528 24.1489 62.5241 13.0227 62.5241H12.7476C11.2302 62.5241 10 63.7314 10 65.2207C10 66.7101 11.2302 67.9174 12.7476 67.9174H13.0227C21.5029 67.9174 24.7107 71.8626 28.1072 76.0396C31.1408 79.771 34.5793 84 41.5688 84C47.6027 84 50.9231 81.2454 53.6123 78.2691L63.5314 67.2913C63.5314 67.2907 87.1234 41.179 87.1234 41.179C87.5939 40.6581 87.6725 39.9 87.3176 39.2966L71.7365 12.8091Z"
              fill="#E6EDF7"
            />
          </svg>
        </Picture>

        <Content>
          <ProductName />
          <ProductCategory />
        </Content>
      </Wrapper>
      <ButtonSkeleton />
    </ProductCardSkeletonStyled>
  );
};
