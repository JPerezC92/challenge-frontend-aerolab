import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import { Product } from 'src/modules/products/models/Product';
import { Button } from 'src/modules/shared/components/base/Button';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Text2 } from 'src/modules/shared/components/base/Text2';
import { Aeropay3 } from 'src/modules/shared/icons/Aeropay3';
import { Icon } from 'src/modules/shared/icons/Icon';

const ProductCardStyles = {
  article: styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  `,

  wrapper: styled.div`
    ${({ theme: { Colors } }) => css`
      border: 1px solid ${Colors.neutral[300]};
    `}

    border-radius: 1rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,

  picture: styled.picture({
    position: 'relative',
    ['& > span']: {
      marginBlockStart: '4rem !important',
      marginBlockEnd: '4.75rem !important',
    },
  }),

  content: styled.div`
    ${({ theme: { Colors } }) => css`
      border-top: 1px solid ${Colors.neutral[300]};
    `}

    padding: 1rem 1.5rem 1.5rem;

    & > p {
      ${({ theme: { Colors } }) => css`
        color: ${Colors.neutral[600]};
      `}
    }
  `,
};

type ProductCardProps = {
  className?: string;
} & Product;

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  category,
  className,
  name,
  img,
  cost,
}) => {
  return (
    <ProductCardStyles.article className={className}>
      <ProductCardStyles.wrapper>
        <ProductCardStyles.picture>
          <Image
            src={img.hdUrl}
            width="504"
            height="364"
            layout="responsive"
            placeholder="blur"
            blurDataURL="/product-placeholder.png"
            priority
            alt={name}
          />
        </ProductCardStyles.picture>

        <ProductCardStyles.content>
          <Text1 as="header">{name}</Text1>

          <Text2 variant="allCaps">{category}</Text2>
        </ProductCardStyles.content>
      </ProductCardStyles.wrapper>

      <Button>
        Redeem for{' '}
        <Icon size="sm">
          <Aeropay3 />
        </Icon>{' '}
        {cost.toLocaleString().replace(',', '.')}
      </Button>
    </ProductCardStyles.article>
  );
};
