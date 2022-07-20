import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import { ButtonDefault } from 'src/modules/shared/components/base/Button/Button';
import { Heading1 } from 'src/modules/shared/components/base/Heading1';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { ArrowDown } from 'src/modules/shared/icons/ArrowDown';
import { Icon } from 'src/modules/shared/icons/Icon';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { DesktopMaxWidth } from 'src/modules/shared/theming/sharedStyles/grid/DesktopMaxWidth';

const HeroStyled = styled.section`
  position: relative;
  background: url('/illustrations/single-wave-pattern.svg') 0 0.8rem,
    url('/illustrations/single-wave-pattern.svg');

  & > div {
    ${DesktopMaxWidth}
    padding-top: 7rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 2.5rem;
  }

  @media (max-width: ${MediaQuery.TABLET.max}) {
    margin-top: 2.5rem;
    & > div {
      grid-template-columns: 1fr;
    }
  }
`;

const HeroButton = styled(ButtonDefault)`
  padding-inline: 2.5rem;
  padding-block: 1.6rem;
  padding-block: 1.25rem;
  white-space: nowrap;
  max-width: max-content;
`;

const HeroContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min-content;

  & > p:nth-of-type(1) {
    margin-bottom: 0.5rem;
  }

  & > p:nth-of-type(2) {
    margin-block: 1.5rem 2.5rem;
  }

  & > button {
    margin-block-end: 1rem;
  }

  @media (max-width: ${MediaQuery.TABLET.max}) {
    margin-inline: 1.25rem;
    justify-self: center;
    padding-inline: 1rem;
    text-align: center;
  }
`;

const HeroPictureStyled = styled.picture`
  display: flex;
  flex-direction: column;

  & > span {
    height: 100% !important;
    overflow: visible !important;

    & > span {
      height: 100% !important;
      position: relative;
    }
  }

  @media (min-width: ${MediaQuery.MOBILE.min}) {
    max-height: 100%;

    & > span {
      & > span {
        overflow: hidden !important;
        ::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 6.5rem;

          background: ${({ theme: { Colors } }) =>
            Colors.specials.bg.illustration} !important;
          mix-blend-mode: multiply;
        }
      }
    }

    & img {
      min-height: 518px !important;
    }
  }
  @media (min-width: ${MediaQuery.TABLET.min}) {
    & > span {
      height: 518px !important;
      & > span {
        ::after {
          top: 20rem;
        }
      }
    }
    & img {
      margin-block: 0 !important;
      min-height: min(100%, 518px) !important;
      min-width: min(100%, 580px) !important;
    }
  }

  @media (min-width: ${MediaQuery.DESKTOP.min}) {
    margin-top: 7rem !important;
    overflow: visible;

    & > span {
      height: 100% !important;
      & > span {
        margin-inline: 3.5rem !important;
        margin-top: auto !important;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
        border-radius: 2.5rem;
        overflow: hidden;

        ::after {
          top: 0;
        }
      }
    }

    & img {
      position: absolute;
      left: 0 !important;
      bottom: 0 !important;
      top: unset !important;
      height: 150% !important;
      min-width: 100% !important;
      max-height: max-content !important;
      min-height: max-content !important;
    }
  }

  @media (min-width: ${MediaQuery.DESKTOP.max}) {
    margin-top: initial !important;
    display: flex;
    & > span {
      & > span {
        margin-inline: auto 0 !important;
        border-radius: 6.5rem;
        max-width: 85% !important;
      }
    }

    & img {
      object-position: 3.5rem;
      height: 135% !important;
    }
  }
`;

type HeroProps = {
  className?: string;
};

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <HeroStyled className={className}>
      <div>
        <HeroContentStyled>
          <Text1 variant="allCaps">Explore the</Text1>
          <Heading1>
            <em>TECH</em> zone
          </Heading1>

          <Text1>
            Here you’ll be able to redeem all of your hard-earned Aeropoints and
            exchange them for cool tech.
          </Text1>

          <HeroButton>
            VIEW ALL PRODUCTS
            <Icon>
              <ArrowDown />
            </Icon>
          </HeroButton>
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
      </div>
    </HeroStyled>
  );
};
