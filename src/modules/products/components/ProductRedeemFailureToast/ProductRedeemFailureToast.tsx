import React from 'react';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { FailureToast } from 'src/modules/shared/components/base/Toast';
import { ToastProps } from 'src/modules/shared/components/base/Toast/Toast';

type ProductRedeemFailureToastProps = ToastProps;

export const ProductRedeemFailureToast: React.FC<
  ProductRedeemFailureToastProps
> = ({ ...props }) => {
  return (
    <FailureToast {...props}>
      <Text1>There was a problem with the transaction</Text1>
    </FailureToast>
  );
};
