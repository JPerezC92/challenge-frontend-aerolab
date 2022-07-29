import styled from '@emotion/styled';
import { Icon } from 'src/modules/shared/icons/Icon';
import { SystemSuccess } from 'src/modules/shared/icons/SystemSuccess';
import { ToastBase } from './Toast';

export const SuccessToast = styled(ToastBase)(({ theme: { Colors } }) => [
  { borderColor: Colors.green.default },
]);

SuccessToast.defaultProps = {
  icon: (
    <Icon size="md">
      <SystemSuccess />
    </Icon>
  ),
};
