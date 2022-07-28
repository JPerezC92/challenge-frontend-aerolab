import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { useAuthenticationContext } from 'src/modules/authentication/context/AuthenticationProvider/AuthenticationProvider';
import { AeropayModule } from 'src/modules/shared/components/AeropayModule';
import { AerolabLogo } from 'src/modules/shared/components/base/AerolabLogo';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { DropDown } from 'src/modules/shared/components/DropDown';
import { Aeropay1 } from 'src/modules/shared/icons/Aeropay1';
import { Icon } from 'src/modules/shared/icons/Icon';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { DesktopMaxWidth } from 'src/modules/shared/theming/sharedStyles/grid/DesktopMaxWidth';

const NavBarStyled = styled.header`
  ${DesktopMaxWidth}

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 40px;

  ${({ theme: { Paddings } }) => css`
    @media (max-width: ${MediaQuery.TABLET.max}) {
      padding-inline: ${Paddings.mobile};
    }
  `}
`;

export const NavBar: React.FC = () => {
  const { user } = useAuthenticationContext();

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
        <Text1 brand>{user?.points || 0} </Text1>
      </DropDown>
    </NavBarStyled>
  );
};
