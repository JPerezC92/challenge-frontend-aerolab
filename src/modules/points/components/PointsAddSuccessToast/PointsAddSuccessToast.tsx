import React from 'react';

import { PointsAmount } from 'src/modules/points/models/PointsAmount';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { SuccessToast } from 'src/modules/shared/components/base/Toast';
import { ToastProps } from 'src/modules/shared/components/base/Toast/Toast';

type PointsAddSuccessToastProps = {
  pointsAmount: PointsAmount;
} & ToastProps;

export const PointsAddSuccessToast: React.FC<PointsAddSuccessToastProps> = ({
  pointsAmount,
  ...props
}) => {
  return (
    <SuccessToast {...props}>
      <Text1>
        You have successfully added <b>{pointsAmount}</b> points
      </Text1>
    </SuccessToast>
  );
};
