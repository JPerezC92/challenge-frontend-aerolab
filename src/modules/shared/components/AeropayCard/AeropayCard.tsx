import styled from '@emotion/styled';
import React from 'react';

import { AuthenticationContextState } from 'src/modules/authentication/context/AuthenticationProvider/AuthenticationProvider';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Text2 } from 'src/modules/shared/components/base/Text2';
import { Aeropay2 } from 'src/modules/shared/icons/Aeropay2';
import { Icon } from 'src/modules/shared/icons/Icon';
import { BackgroundNeutral900 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';
import { ColorNeutral100 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { ElevationDefault } from 'src/modules/shared/theming/sharedStyles/elevation';

export const AeropayCardStyled = styled.div([
  ElevationDefault,
  BackgroundNeutral900,
  {
    width: '264px',
    height: '148px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0.5rem',
    position: 'relative',
    overflow: ' hidden',

    ['&::after']: {
      backgroundImage: "url('/illustrations/single-wave-pattern.svg')",
      backgroundSize: 'auto 1rem',
      backgroundPosition: 'top',
      content: '""',
      height: '100%',
      mixBlendMode: 'soft-light',
      position: 'absolute',
      top: '30%',
      transform: 'rotate(-5deg) scaleX(1.7) scaleY(.75)',
      width: '110%',
    },
  },
]);

const RowStyled = styled.div([
  ColorNeutral100,
  {
    margin: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
]);

type AeropayCardProps = {
  className?: string;
  user: AuthenticationContextState['user'];
};

export const AeropayCard: React.FC<AeropayCardProps> = ({
  className,
  user,
}) => {
  return (
    <AeropayCardStyled className={className}>
      <RowStyled>
        <Text1 as="span">Aerocard</Text1>

        <Icon size="sm">
          <Aeropay2 />
        </Icon>
      </RowStyled>

      <RowStyled>
        <Text2 as="span">{user?.name}</Text2>

        <Text2 as="span">{user?.formatCreatedAt()}</Text2>
      </RowStyled>
    </AeropayCardStyled>
  );
};
