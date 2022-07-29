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

const NavBarStyled = styled.header(({ theme: { Paddings } }) => [
  DesktopMaxWidth,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBlock: '2.5rem',
    [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
      paddingInline: Paddings.mobile,
    },
  },
]);

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
