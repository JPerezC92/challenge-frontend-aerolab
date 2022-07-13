import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Text2 } from 'src/modules/shared/components/base/Text2';
import { Aeropay2 } from 'src/modules/shared/components/icons/Aeropay2';
import { Icon } from 'src/modules/shared/components/icons/Icon';

export const AeropayCardStyled = styled.div`
  width: 264px;
  height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &::after {
    background-image: url('/illustrations/single-wave-pattern.svg');
    background-size: 40% 1rem;
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: soft-light;
    position: absolute;
    top: 35%;
    transform: rotate(-5deg);
    width: 110%;
  }

  ${({ theme: { Colors } }) =>
    css`
      background-color: ${Colors.neutral[900]};

      & > div {
        margin: 1rem;
        display: flex;
        justify-content: space-between;

        & > span,
        i {
          color: ${Colors.neutral[100]};
        }
      }
    `}
`;

type AeropayCardProps = {
  className?: string;
};

export const AeropayCard: React.FC<AeropayCardProps> = ({}) => {
  return (
    <AeropayCardStyled>
      <div>
        <Text1 as="span">Aerocard</Text1>

        <Icon size="sm">
          <Aeropay2 />
        </Icon>
      </div>

      <div>
        <Text2 as="span">John Kite</Text2>

        <Text2 as="span">07/23</Text2>
      </div>
    </AeropayCardStyled>
  );
};
