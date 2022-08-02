import styled from '@emotion/styled';
import React from 'react';
import { ToastContentProps } from 'react-toastify';
import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { CrossDefault } from 'src/modules/shared/icons/CrossDefault';
import { Icon } from 'src/modules/shared/icons/Icon';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { BackgroundNeutral0 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { ElevationDefault } from 'src/modules/shared/theming/sharedStyles/elevation';

const ToastBaseStyled = styled.div([
  ElevationDefault,
  BackgroundNeutral0,
  ColorNeutral600,
  {
    borderRadius: '.75rem',
    padding: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    borderWidth: '2px',
    borderStyle: 'solid',
    overflow: 'hidden',
    columnGap: '0.75rem',
    maxWidth: '33.25rem',
    alignItems: 'center',

    [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
      maxWidth: '22.5rem',
      ['& >' + `${ButtonUnstyled}, ${Icon}`]: {
        alignSelf: 'flex-start',
      },
    },
  },
]);

interface ToastBaseProps extends Pick<ToastContentProps, 'closeToast'> {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactElement;
}

export const ToastBase: React.FC<ToastBaseProps> = ({
  className,
  children,
  closeToast,
  icon,
}) => {
  return (
    <ToastBaseStyled className={className}>
      {icon}

      {children}

      <ButtonUnstyled type="button" onClick={closeToast}>
        <Icon size="sm">
          <CrossDefault />
        </Icon>
      </ButtonUnstyled>
    </ToastBaseStyled>
  );
};

export interface ToastProps extends Pick<ToastContentProps, 'closeToast'> {
  className?: string;
  children?: React.ReactNode;
}
