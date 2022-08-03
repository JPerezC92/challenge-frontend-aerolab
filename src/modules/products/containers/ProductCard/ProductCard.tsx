import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';
import { AuthenticationContextState } from 'src/modules/authentication/context/AuthenticationProvider/AuthenticationProvider';
import { ProductRedeemFailureToast } from 'src/modules/products/components/ProductRedeemFailureToast';
import { ProductRedeemSuccessToast } from 'src/modules/products/components/ProductRedeemSuccessToast';
import { ProductRedeemEventTrigger } from 'src/modules/products/events/ProductRedeem.event';

import { Product } from 'src/modules/products/models/Product';
import { ProductsRepository } from 'src/modules/products/service/products.repository';
import { Button } from 'src/modules/shared/components/base/Button';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Text2 } from 'src/modules/shared/components/base/Text2';
import { Aeropay2 } from 'src/modules/shared/icons/Aeropay2';
import { Aeropay3 } from 'src/modules/shared/icons/Aeropay3';
import { Icon } from 'src/modules/shared/icons/Icon';
import { Repository } from 'src/modules/shared/service/Repository';
import { ElevationDefault } from 'src/modules/shared/theming/sharedStyles/elevation';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const RedeemNowStyled = styled.div(({ theme: { Colors } }) => [
  TextL1Default,
  {
    background: Colors.specials.bg.section,
    color: Colors.neutral[0],
    position: 'absolute',
    right: '-100%',
    textAlign: 'center',
    top: '-10%',
    transform: 'rotate(15deg)',
    transition: 'top 0.5s ease-in-out, right 0.5s ease-in-out',
    width: '200%',
    zIndex: '1',
  },
]);

const ProductCardStyled = styled.article([
  {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    ['&:hover']: {
      [`${RedeemNowStyled}`]: {
        top: '3%',
        right: '-78%',
      },
    },
  },
]);

const CardWrapperStyled = styled.div(({ theme: { Colors } }) => [
  ElevationDefault,
  {
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
    border: `1px solid ${Colors.neutral[300]}`,
  },
]);

const PictureStyled = styled.picture({
  position: 'relative',

  ['& > span ']: {
    marginBlockStart: '4rem !important',
    marginBlockEnd: '4.75rem !important',
  },
});

const ContentStyled = styled.div(({ theme: { Colors } }) => [
  {
    padding: '1rem 1.5rem 1.5rem',
    borderTop: `1px solid ${Colors.neutral[300]}`,
    [`& > ${Text2}`]: {
      color: Colors.neutral[600],
    },
  },
]);

type ProductCardProps = {
  className?: string;
  product: Product;
  productsRepository: Repository<ProductsRepository>;
  user: AuthenticationContextState['user'];
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  productsRepository,
  user,
}) => {
  const { category, name, img, cost } = product;
  const { isLoading: isProcessing, mutate: handleRedeemSubmit } = useMutation(
    async (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      return await productsRepository().redeem(product);
    },
    {
      onSuccess() {
        ProductRedeemEventTrigger(product);
        toast(<ProductRedeemSuccessToast product={product} />);
      },
      onError() {
        toast(<ProductRedeemFailureToast />);
      },
    }
  );

  const hasEnoughPoints = user?.hasEnoughPoints(cost);

  const buttonChildren = isProcessing ? (
    <>Processing...</>
  ) : hasEnoughPoints ? (
    <>
      Redeem for{' '}
      <Icon size="sm">
        <Aeropay3 />
      </Icon>{' '}
      {Product.formatPoints(cost)}{' '}
    </>
  ) : (
    <>
      You need{' '}
      <Icon size="sm">
        <Aeropay2 />
      </Icon>{' '}
      {Product.formatPoints(product?.aditionalPointsNeeded(user?.points || 0))}
    </>
  );

  return (
    <ProductCardStyled className={className}>
      <CardWrapperStyled>
        {hasEnoughPoints && <RedeemNowStyled>Redeem now</RedeemNowStyled>}

        <PictureStyled>
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
        </PictureStyled>

        <ContentStyled>
          <Text1 as="header">{name}</Text1>

          <Text2 variant="allCaps">{category}</Text2>
        </ContentStyled>
      </CardWrapperStyled>

      <Button
        aria-busy={isProcessing}
        disabled={!hasEnoughPoints}
        onClick={handleRedeemSubmit}
      >
        {buttonChildren}
      </Button>
    </ProductCardStyled>
  );
};
