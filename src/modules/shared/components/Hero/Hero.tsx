import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { productsSectionId } from 'src/modules/products/containers/ProductsSection/ProductsSection';
import { ButtonDefault } from 'src/modules/shared/components/base/Button/Button';
import { Heading1 } from 'src/modules/shared/components/base/Heading1';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { ArrowDown } from 'src/modules/shared/icons/ArrowDown';
import { Icon } from 'src/modules/shared/icons/Icon';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

const WavesStyled = styled.div([
  {
    position: 'relative',
    ['&::before']: {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '100%',
      background: 'url(/illustrations/single-wave-pattern.svg)',
      zIndex: '-1',
      top: '0',
      left: '0',
      backgroundPosition: 'top center',

      [`@media (max-width: ${MediaQuery.MOBILE.max})`]: {
        backgroundSize: 'auto 1rem',
        height: '55%',
        top: '-1.5rem',
      },

      [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
        backgroundSize: 'auto 1.5rem',
        height: '108%',
        top: '-2.8rem',
      },
      [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
        backgroundSize: 'auto 1.5rem',
        height: '211%',
        top: '-2.8rem',
      },
    },
  },
]);

const ContainerStyled = styled.div(({ theme: { Grid } }) => [
  {
    position: 'relative',
    [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
      maxWidth: Grid.maxWidth,
      margin: 'auto',
    },
  },
]);

const HeroStyled = styled.section([
  {
    marginBlockStart: '2.5rem',

    [`@media (min-width: ${MediaQuery.DESKTOP.max})`]: {
      marginBlock: '7rem',
      display: 'flex',
    },
  },
]);

const HeroButtonStyled = styled
  .a([
    {
      width: 'max-content',
      paddingBlock: '1.25rem',
      whiteSpace: 'nowrap',
      marginBlockStart: '2.5rem',

      [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
        paddingBlock: '1.5rem',
        marginBlockStart: '4rem',
        marginInline: 'auto',
      },
      [`@media (min-width: ${MediaQuery.DESKTOP.max})`]: {
        marginInline: '0',
      },
    },
  ])
  .withComponent(ButtonDefault);

const HeroContentStyled = styled.div(({ theme: { Colors } }) => [
  {
    width: 'min-content',
    marginBottom: '1.125rem',
    display: 'inline-block',

    ['& >' + `${Text1}`]: {
      color: Colors.neutral[600],
      marginBlockEnd: '.5rem',
      marginBlockStart: '1.5rem',
    },

    [`@media (max-width: ${MediaQuery.DESKTOP.max})`]: {
      display: 'block',
      margin: 'auto',
      textAlign: 'center',
    },
  },
]);

const HeroPictureStyled = styled.picture(({ theme: { Colors } }) => [
  {
    lineHeight: '0',

    [`@media (max-width: ${MediaQuery.DESKTOP.max})`]: {
      display: 'table',
      margin: 'auto',

      ['& *']: {
        height: '580px !important',
      },
    },

    [`@media (min-width: ${MediaQuery.DESKTOP.max})`]: {
      width: '722px',
      height: '600px',
      marginLeft: 'auto',
      transform: 'translateY(-7.5rem)',

      ['& img']: {
        transform: 'translateY(-2.6rem) scale(1.25)',
      },

      ['&::before']: {
        background: Colors.specials.bg.section,
        borderRadius: '6.5rem',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
        content: '""',
        height: '100%',
        left: '-10rem',
        margin: '10rem',
        position: 'absolute',
        top: '0',
        transform: 'translateY(-2.4rem)',
        width: '100%',
        opacity: '.5',
        zIndex: '-1',
      },
    },
  },
]);

type HeroProps = {
  className?: string;
};

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <WavesStyled>
      <ContainerStyled>
        <HeroStyled className={className}>
          <HeroContentStyled>
            <Text1 variant="allCaps">Explore the</Text1>

            <Heading1>
              <em>TECH</em> zone
            </Heading1>

            <Text1>
              Here you’ll be able to redeem all of your hard-earned Aeropoints
              and exchange them for cool tech.
            </Text1>

            <Link href={`#${productsSectionId}`}>
              <HeroButtonStyled>
                VIEW ALL PRODUCTS
                <Icon>
                  <ArrowDown />
                </Icon>
              </HeroButtonStyled>
            </Link>
          </HeroContentStyled>

          <HeroPictureStyled>
            <Image
              src="/illustrations/hero-desktop.png"
              width="1080"
              height="1080"
              alt="hero illustration"
              objectFit="cover"
            />
          </HeroPictureStyled>
        </HeroStyled>
      </ContainerStyled>
    </WavesStyled>
  );
};
