import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  BackgroundBrandDefault,
  BackgroundBrandHover,
} from 'src/modules/shared/theming/sharedStyles/backgrounds/BackgroundBrandDefault';
import { ColorNeutral100 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { ElevationDefault } from 'src/modules/shared/theming/sharedStyles/elevation';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const enum ButtonVariant {
  UNSTYLED = 'unstyled',
}

type ButtonProps = {
  variant?: `${ButtonVariant}`;
};

export const ButtonUnstyled = css`
  color: initial;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 0;

  &:hover {
    background: transparent;
  }
`;

const Busy: SharedStyles = ({ theme: { Colors } }) =>
  css({
    ['&[aria-busy=true]']: {
      opacity: 0.5,
      background: Colors.specials.bg.section,
      pointerEvents: 'none',
    },
  });

const Disabled: SharedStyles = ({ theme: { Colors } }) =>
  css({
    ['&:disabled']: {
      background: Colors.neutral[200],
      color: Colors.neutral[600],

      ['path']: {
        fill: Colors.neutral[0],
      },

      ['rect']: {
        fill: Colors.neutral[500],
      },
    },
  });

export const ButtonDefault = styled.button([
  TextL1Default,
  BackgroundBrandDefault,
  ColorNeutral100,
  BackgroundBrandHover,
  Busy,
  Disabled,
  ElevationDefault,
  {
    alignItems: 'center',
    borderRadius: '1rem',
    border: 'none',
    columnGap: '.5rem',
    display: 'flex',
    justifyContent: 'center',
    paddingBlock: '1rem',
    paddingInline: '2.5rem',
  },
]);

export const Button = styled(ButtonDefault)``;
