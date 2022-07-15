import React from 'react';
import styled from '@emotion/styled';

import { AerolabSVG1 } from 'src/modules/shared/components/base/AerolabSVG1';
import { AerolabSVG2 } from 'src/modules/shared/components/base/AerolabSVG2';
import { Icon } from 'src/modules/shared/components/icons/Icon';
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
        <AerolabSVG1 />
      </Icon>

      <Icon>
        <AerolabSVG2 />
      </Icon>
    </AerolabLogoStyled>
  );
};
