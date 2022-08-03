import React from 'react';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { FailureToast } from 'src/modules/shared/components/base/Toast';
import { ToastProps } from 'src/modules/shared/components/base/Toast/Toast';

type AuthenticationFailureToastProps = ToastProps;

export const AuthenticationFailureToast: React.FC<
  AuthenticationFailureToastProps
> = ({ ...props }) => {
  return (
    <FailureToast {...props}>
      <Text1>There was an error while attempting to authenticate</Text1>
    </FailureToast>
  );
};
