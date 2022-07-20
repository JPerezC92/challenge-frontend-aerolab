import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Heading3 } from 'src/modules/shared/components/base/Heading3';
import { Hr } from 'src/modules/shared/components/base/Hr';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Icon } from 'src/modules/shared/icons/Icon';
import { Walkthrough1 } from 'src/modules/shared/icons/Walkthrough1';
import { BackgroundSpecialIllustration } from 'src/modules/shared/theming/sharedStyles/backgrounds/BackgroundBrandDefault';

type WalkthroughCardProps = {
  className?: string;
  title: string;
  description: React.ReactNode;
  image?: React.ReactElement;
  icon?: React.ReactElement;
};

export const WalkthroughCardContent = styled.article`
  ${({ theme: { Colors } }) =>
    css`
      background: ${Colors.neutral[0]};
      border-top: 1px solid ${Colors.neutral[300]};
    `}
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  & > header,
  div {
    padding-inline: 1.5rem;
  }

  & > header {
    display: flex;
    align-items: center;
    padding-block-start: 1rem;
    margin-block-end: 0.75rem;

    & > i {
      margin-right: 1rem;
    }
  }

  & > div {
    padding: 1.5rem;
  }
`;

export const WalkthroughCardStyled = styled.article`
  ${({ theme: { Colors } }) => css`
    padding: 0.75rem;
    border: 1px solid ${Colors.neutral[300]};
  `}
  line-height: 0;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2rem;

  & > picture {
    & > span {
      ${({ theme: { Colors } }) => css`
        border-top: 1px solid ${Colors.neutral[300]} !important;
        border-left: 1px solid ${Colors.neutral[300]} !important;
        border-right: 1px solid ${Colors.neutral[300]} !important;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
      `}
    }

    & img {
      ${BackgroundSpecialIllustration}
    }
  }
`;

export const WalkthroughCard: React.FC<WalkthroughCardProps> = ({
  className,
  title,
  description,
  image,
  icon,
}) => {
  return (
    <WalkthroughCardStyled className={className}>
      <picture>{image}</picture>

      <WalkthroughCardContent>
        <header>
          {icon && icon}
          <Heading3>{title}</Heading3>
        </header>
        <div>{description}</div>
      </WalkthroughCardContent>
    </WalkthroughCardStyled>
  );
};

type WalkthroughProps = {
  className?: string;
};

export const WalkthroughStyled = styled.article`
  position: relative;
  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;

    background: ${({ theme: { Colors } }) =>
      Colors.specials.bg.illustration} !important;
    mix-blend-mode: color;
  }
`;

export const Walkthrough: React.FC<WalkthroughProps> = ({ className }) => {
  return (
    <WalkthroughStyled className={className}>
      <WalkthroughCard
        title="1—browse"
        image={
          <Image
            src="/illustrations/walkthroug-1-desktop.png"
            alt=""
            width="1080"
            height="1080"
          />
        }
        description={
          <Text1>
            Browse our tech catalog with more than 20 top tech products
          </Text1>
        }
        icon={
          <Icon size="md" background>
            <Walkthrough1 />
          </Icon>
        }
      />
    </WalkthroughStyled>
  );
};
