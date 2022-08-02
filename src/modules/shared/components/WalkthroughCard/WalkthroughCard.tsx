import styled from '@emotion/styled';
import React from 'react';
import { Heading3 } from 'src/modules/shared/components/base/Heading3';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { BackgroundNeutral0 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';

const WalkthroughCardWrapperStyled = styled.article(({ theme: { Colors } }) => [
  {
    padding: '.75rem',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '2rem',
    border: `1px solid ${Colors.neutral[300]}`,
    [`@media  (min-width: ${MediaQuery.TABLET.min}) and (max-width: ${MediaQuery.TABLET.max})`]:
      { width: 'min(100%,25rem)' },
  },
]);

const WalkthroughCardStyled = styled.div(({ theme: { Colors } }) => [
  BackgroundNeutral0,
  {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    border: `1px solid ${Colors.neutral[300]}`,
  },
]);

const CardPictureStyled = styled.picture(({ theme: { Colors } }) => [
  {
    display: 'grid',
    width: '100%',

    [`@media (max-width: ${MediaQuery.MOBILE.max})`]: {
      ['& * ']: { height: '245px !important', width: '100% !important' },
    },
    [`@media  (min-width: ${MediaQuery.TABLET.min}) and  (max-width: ${MediaQuery.TABLET.max})`]:
      {
        ['& * ']: { height: '290px !important', width: '100% !important' },
      },
    ['& img']: { background: Colors.specials.bg.illustration },
  },
]);

const CardContentStyled = styled.div({
  padding: '1rem 1.5rem 1.5rem',
  display: 'grid',
  rowGap: '.75rem',
});

const HeaderStyled = styled.header({
  display: 'flex',
  alignItems: 'center',
  columnGap: '1rem',
  whiteSpace: 'nowrap',
});

const ParagraphStyled = styled.div([
  ColorNeutral600,
  {
    [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
      maxWidth: '23rem',
    },
  },
]);

type WalkthroughCardProps = {
  className?: string;
  title: string;
  description: React.ReactNode;
  image?: React.ReactElement;
  icon?: React.ReactElement;
};

export const WalkthroughCard: React.FC<WalkthroughCardProps> = ({
  className,
  title,
  description,
  image,
  icon,
}) => {
  return (
    <WalkthroughCardWrapperStyled className={className}>
      <WalkthroughCardStyled>
        <CardPictureStyled>{image}</CardPictureStyled>

        <CardContentStyled>
          <HeaderStyled>
            {icon && icon}
            <Heading3>{title}</Heading3>
          </HeaderStyled>

          <ParagraphStyled>{description}</ParagraphStyled>
        </CardContentStyled>
      </WalkthroughCardStyled>
    </WalkthroughCardWrapperStyled>
  );
};
