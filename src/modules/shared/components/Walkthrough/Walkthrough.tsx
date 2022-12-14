import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Container } from 'src/modules/shared/components/Container';
import { WalkthroughCard } from 'src/modules/shared/components/WalkthroughCard';
import { Icon } from 'src/modules/shared/icons/Icon';
import { Walkthrough1 } from 'src/modules/shared/icons/Walkthrough1';
import { Walkthrough2 } from 'src/modules/shared/icons/Walkthrough2';
import { Walkthrough3 } from 'src/modules/shared/icons/Walkthrough3';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

export const WalkthroughStyled = styled.section(({ theme: { Colors } }) => [
  {
    position: 'relative',
    ['&::before']: {
      background: Colors.specials.bg.section,
      position: 'absolute',
      content: '""',
      left: 0,
      width: '100%',
      zIndex: '-1',
      opacity: '0.5',
      [`@media (max-width: ${MediaQuery.MOBILE.max})`]: {
        top: '-28.5rem',
        height: 'calc(100% + 28.5rem)',
      },

      [`@media (min-width: ${MediaQuery.TABLET.min}) and (max-width: ${MediaQuery.DESKTOP.max})`]:
        {
          top: '-14.5rem',
          height: 'calc(100% + 14.5rem)',
        },

      [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
        top: '5.5rem',
        height: '34rem',
      },
    },
    [`@media (min-width: ${MediaQuery.TABLET.min}) and (max-width: ${MediaQuery.TABLET.max})`]:
      { marginBlockEnd: '-3.5rem' },
  },
]);

const ContainerStyled = styled(Container)({
  display: 'grid',
  rowGap: '1.5rem',
  columnGap: '.5rem',
  justifyItems: 'center',
  [`@media (max-width: ${MediaQuery.MOBILE.max})`]: {
    transform: 'translateY(-2rem)',
  },
  [`@media  (min-width: ${MediaQuery.TABLET.min}) and (max-width: ${MediaQuery.TABLET.max})`]:
    {
      transform: 'translateY(-5.2rem)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      ['& > *']: { maxWidth: '17rem' },
    },
  [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,20rem) ,1fr))',
    gap: '0',
    ['& ' + `article:first-of-type`]: {
      transform: 'rotate(-3deg) translateX(2rem) translateY(2rem) scale(1.01)',
    },
    ['& ' + `article:nth-of-type(2)`]: {
      transform: 'translateZ(1px) scale(1.02)',
    },
    ['& ' + `article:last-of-type`]: {
      transform: 'rotate(3deg) translateX(-2rem) translateY(2rem) scale(1.01)',
    },
  },
  [`@media (min-width: ${MediaQuery.DESKTOP.max})`]: {
    gap: '0',
    ['& ' + `article:first-of-type`]: {
      transform: 'rotate(-3deg) translateX(4rem) translateY(2rem) scale(1.02)',
    },

    ['& ' + `article:nth-of-type(2)`]: {
      transform: 'translateZ(1px) scale(1.02)',
    },

    ['& ' + `article:last-of-type`]: {
      transform: 'rotate(3deg) translateX(-4rem) translateY(2rem) scale(1.02)',
    },
  },
});

const walkthroughItems = [
  {
    icon: <Walkthrough1 />,
    img: '/illustrations/walkthroug-1-desktop.png',
    title: '1???browse',
    paragraph: 'Browse our tech catalog with more than 20 top tech products',
  },
  {
    icon: <Walkthrough2 />,
    img: '/illustrations/walkthroug-2-desktop.png',
    title: '2???choose',
    paragraph: 'Exchange your hard-earned AeroPoints for a cool tech item',
  },
  {
    icon: <Walkthrough3 />,
    img: '/illustrations/walkthroug-3-desktop.png',
    title: '3???enjoy',
    paragraph: 'All done We???ll take care of delivery of your tech item!',
  },
];

type WalkthroughProps = {
  className?: string;
};

export const Walkthrough: React.FC<WalkthroughProps> = ({ className }) => {
  return (
    <WalkthroughStyled className={className}>
      <ContainerStyled>
        {walkthroughItems.map((v) => (
          <WalkthroughCard
            key={v.img}
            title={v.title}
            description={<Text1>{v.paragraph}</Text1>}
            icon={
              <Icon size="md" background>
                {v.icon}
              </Icon>
            }
            image={
              <Image
                src={v.img}
                alt=""
                width="1080"
                height="1080"
                objectFit="cover"
              />
            }
          />
        ))}
      </ContainerStyled>
    </WalkthroughStyled>
  );
};
