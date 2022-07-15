import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ChevronDown } from 'src/modules/shared/components/icons/ChevronDown';
import { Icon } from 'src/modules/shared/components/icons/Icon';

const DropDownStyled = styled.div`
  position: relative;

  & > button {
    align-items: center;
    border-radius: 1rem;
    column-gap: 1rem;
    display: flex;
    padding-inline: 1rem;
    padding-block: 0.5rem;

    ${({ theme: { Colors } }) => css`
      border: 1px solid ${Colors.neutral[300]};
      background-color: ${Colors.neutral[0]};
    `}

    & > span {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      column-gap: 0.5rem;
    }
  }
`;

type DropDownProps = {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  openIcon?: React.ReactElement;
  closeIcon?: React.ReactElement;
  Menu: React.FC<{ isOpen: boolean; onClose?: () => void }>;
};

export const DropDown: React.FC<DropDownProps> = ({ Menu, icon, children }) => {
  const [toogle, setToogle] = React.useState(false);

  const handleToggle = () => setToogle((s) => !s);

  return (
    <DropDownStyled>
      <button onClick={handleToggle}>
        <span>
          {icon} {children}
        </span>

        <Icon size="md">
          <ChevronDown open={toogle} />
        </Icon>
      </button>

      <Menu isOpen={toogle} onClose={handleToggle} />
    </DropDownStyled>
  );
};
