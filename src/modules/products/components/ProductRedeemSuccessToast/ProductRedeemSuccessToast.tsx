import React from 'react';
import { Product } from 'src/modules/products/models/Product';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { SuccessToast } from 'src/modules/shared/components/base/Toast';
import { ToastProps } from 'src/modules/shared/components/base/Toast/Toast';

type ProductRedeemToastProps = {
  product: Product;
} & ToastProps;

export const ProductRedeemSuccessToast: React.FC<ProductRedeemToastProps> = ({
  children,
  product,
  ...props
}) => {
  return (
    <SuccessToast {...props}>
      <Text1>
        <b>{product.name}</b> redeemed successfully
      </Text1>
    </SuccessToast>
  );
};
