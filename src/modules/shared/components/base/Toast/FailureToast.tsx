import styled from '@emotion/styled';
import { Icon } from 'src/modules/shared/icons/Icon';
import { SystemError } from 'src/modules/shared/icons/SystemError';
import { ToastBase } from './Toast';

export const FailureToast = styled(ToastBase)(({ theme: { Colors } }) => [
  { borderColor: Colors.red.default },
]);

FailureToast.defaultProps = {
  icon: (
    <Icon size="md">
      <SystemError />
    </Icon>
  ),
};
