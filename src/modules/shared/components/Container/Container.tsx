import styled from '@emotion/styled';
import React from 'react';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const ContainerStyled = styled.div(({ theme: { Grid } }) => ({
  marginInline: 'auto',

  [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
    paddingInline: '1.25rem',
  },
  [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
    maxWidth: Grid.maxWidth,
  },
}));

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <ContainerStyled className={className}>{children}</ContainerStyled>;
};
