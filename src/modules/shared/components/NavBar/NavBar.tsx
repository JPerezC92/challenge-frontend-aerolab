import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { AeropayModule } from 'src/modules/shared/components/AeropayModule';
import { AerolabLogo } from 'src/modules/shared/components/base/AerolabLogo';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { DropDown } from 'src/modules/shared/components/DropDown';
import { Aeropay1 } from 'src/modules/shared/components/icons/Aeropay1';
import { Icon } from 'src/modules/shared/components/icons/Icon';
import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';

const NavBarStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 40px;
  margin: 0 auto;

  ${({ theme: { Paddings, Grid } }) => css`
    padding-inline: ${Paddings.desktop};
    max-width: ${Grid.maxWidth};

    @media (max-width: ${DeviceSize.TABLET}) {
      padding-inline: ${Paddings.mobile};
    }
  `}
`;

export const NavBar: React.FC = () => {
  return (
    <NavBarStyled>
      <AerolabLogo />

      <DropDown
        icon={
          <Icon size="md">
            <Aeropay1 />
          </Icon>
        }
        Menu={AeropayModule}
      >
        <Text1>
          <em>1000</em>
        </Text1>
      </DropDown>
    </NavBarStyled>
  );
};
