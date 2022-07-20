import styled from '@emotion/styled';
import React from 'react';

import { AerolabLogo1 } from 'src/modules/shared/icons/AerolabLogo1';
import { AerolabLogo2 } from 'src/modules/shared/icons/AerolabLogo2';
import { Icon } from 'src/modules/shared/icons/Icon';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

const AerolabLogoStyled = styled.span`
  display: inline-block;
  line-height: 0;

  & > i:first-of-type {
    @media (max-width: ${MediaQuery.TABLET.max}) {
      display: none;
    }
  }

  & > i:last-of-type {
    display: none;
    @media (max-width: ${MediaQuery.TABLET.max}) {
      display: inline-block;
    }
  }
`;

type AerolabLogoProps = {
  className?: string;
};

export const AerolabLogo: React.FC<AerolabLogoProps> = ({}) => {
  return (
    <AerolabLogoStyled>
      <Icon>
        <AerolabLogo1 />
      </Icon>

      <Icon>
        <AerolabLogo2 />
      </Icon>
    </AerolabLogoStyled>
  );
};
