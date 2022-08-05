import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { GithubDefault } from 'src/modules/shared/icons/GithubDefault';
import { Icon } from 'src/modules/shared/icons/Icon';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';

const AnchorStyled = styled.a([
  TextL1Default,
  {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
    placeContent: 'center',
    columnGap: '.5rem',
    paddingBlock: '.25rem',
    // lineHeight: '0',
    justifyContent: 'center',
    alignItems: 'center',
  },
]);

const FooterSectionStyled = styled.div([
  ColorNeutral600,
  {
    [`@media (max-width: ${MediaQuery.MOBILE.max})`]: {
      marginBlockStart: '8rem',
      paddingBlock: '2.5rem',
    },

    [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
      marginBlockStart: '10rem',
      paddingBlock: '2.5rem',
    },

    [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
      marginBlockStart: '10rem',
      paddingBlock: '5rem',
    },
  },
]);

type FooterSectionProps = {
  className?: string;
};

export const FooterSection: React.FC<FooterSectionProps> = ({ className }) => {
  return (
    <FooterSectionStyled className={className}>
      <Link href={EnvVariables.URL_REPOSITORY} passHref>
        <AnchorStyled target="_blank">
          <Icon size="md">
            <GithubDefault />
          </Icon>

          <span>View this repository</span>
        </AnchorStyled>
      </Link>
    </FooterSectionStyled>
  );
};
