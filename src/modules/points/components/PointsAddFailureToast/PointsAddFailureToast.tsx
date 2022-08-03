import React from 'react';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { FailureToast } from 'src/modules/shared/components/base/Toast';
import { ToastProps } from 'src/modules/shared/components/base/Toast/Toast';

type PointsAddFailureToastProps = ToastProps;

export const PointsAddFailureToast: React.FC<PointsAddFailureToastProps> = (
  props
) => {
  return (
    <FailureToast {...props}>
      <Text1>There is a problem with the points service</Text1>
    </FailureToast>
  );
};
