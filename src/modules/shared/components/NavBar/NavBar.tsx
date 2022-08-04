import styled from '@emotion/styled';
import React from 'react';

import { useAuthenticationContext } from 'src/modules/authentication/context/AuthenticationProvider/AuthenticationProvider';
import { AeroCoins } from 'src/modules/shared/components/AeroCoins/AeroCoins';
import { AerolabLogo } from 'src/modules/shared/components/base/AerolabLogo';
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

      <AeroCoins user={user} />
    </NavBarStyled>
  );
};
