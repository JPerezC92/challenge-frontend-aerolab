import styled from '@emotion/styled';
import React from 'react';

import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { ChevronDown } from 'src/modules/shared/icons/ChevronDown';
import { Icon } from 'src/modules/shared/icons/Icon';
import { BackgroundNeutral0 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';
import { ElevationDefault } from 'src/modules/shared/theming/sharedStyles/elevation';

const DropDownStyled = styled.div({ position: 'relative' });

const ButtonStyled = styled(ButtonUnstyled)(({ theme: { Colors } }) => [
  ElevationDefault,
  {
    display: 'flex',
    borderRadius: '1rem',
    border: `1px solid ${Colors.neutral[300]}`,
    backgroundColor: Colors.neutral[0],
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    columnGap: '1rem',
    alignItems: 'center',
  },
]);

const SpanStyled = styled.span({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  columnGap: '0.5rem',
});

const MenuWrapperStyled = styled.div(({ theme: { Colors } }) => [
  BackgroundNeutral0,
  ElevationDefault,
  {
    overflow: 'hidden',
    borderRadius: '1rem',
    border: `1px solid ${Colors.neutral[300]}`,
    position: 'absolute',
    right: '0',
    top: '120%',
    zIndex: '2',

    ['&[aria-hidden=true]']: {
      visibility: 'hidden',
      height: '0',
      width: '0',
    },
  },
]);

type DropDownProps = {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  openIcon?: React.ReactElement;
  closeIcon?: React.ReactElement;
  Menu: React.FC<{ onClose?: () => void }>;
};

export const DropDown: React.FC<DropDownProps> = ({ Menu, icon, children }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle((s) => !s);

  return (
    <DropDownStyled>
      <ButtonStyled onClick={handleToggle}>
        <SpanStyled>
          {icon} {children}
        </SpanStyled>

        <Icon size="md">
          <ChevronDown open={toggle} />
        </Icon>
      </ButtonStyled>

      <MenuWrapperStyled aria-hidden={!toggle}>
        <Menu onClose={handleToggle} />
      </MenuWrapperStyled>
    </DropDownStyled>
  );
};
