import styled from '@emotion/styled';
import React from 'react';

import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { useOnClickOutside } from 'src/modules/shared/hooks/useOnClickOutside';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const CustomSelect = styled.button(({ theme: { Colors } }) => [
  ButtonUnstyled,
  TextL1Default,
  {
    color: Colors.neutral[600],
    minWidth: '16rem',
    width: '100%',
    border: `1px solid ${Colors.neutral[300]}`,
    borderRadius: ' 1rem',
    paddingBlock: ' 1rem',
    paddingInline: ' 1.5rem .5rem',
    position: 'relative',
    display: 'inline-flex',
  },
]);

const CustomSelectMenu = styled.menu(({ theme: { Colors } }) => [
  {
    position: 'absolute',
    top: '100%',
    transform: 'translateY(1rem)',
    left: '0',
    minWidth: 'max-content',
    width: 'inherit',
    border: `1px solid ${Colors.neutral[300]}`,
    borderRadius: '1rem',
    zIndex: '1',
    background: 'white',
    paddingBlock: '.5rem',
    maxHeight: '15.5rem',
    overflowY: 'auto',
    overflowX: 'hidden',

    ['&::-webkit-scrollbar']: {
      width: '12px',
    },
    ['&::-webkit-scrollbar-track']: {
      borderTopRightRadius: '1rem',
      borderBottomRightRadius: '1rem',
      boxShadow: `inset 0 0 6px ${Colors.neutral[300]}`,
    },
    ['&::-webkit-scrollbar-thumb']: {
      borderTopRightRadius: '1rem',
      borderBottomRightRadius: '1rem',
      background: Colors.brand.light,
    },
  },
]);

const CustomSelectOption = styled.button(({ theme: { Colors } }) => [
  ButtonUnstyled,
  TextL1Default,
  ColorNeutral600,
  {
    width: '100%',
    paddingInline: '1.5rem',
    paddingBlock: '0.75rem',
    textAlign: 'left',

    [`&:hover`]: {
      background: Colors.neutral[100],
    },
  },
]);

const ArrowStyled = styled.span({
  marginInlineStart: 'auto',
  color: '#000',
  fontSize: '.7em',
});

type SelectProps = {
  options: string[];
  value: string;
  onChange: (e: { currentTarget: { value: string } }) => void;
};

export const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  options = [],
}) => {
  const [_value, setValue] = React.useState(value || options[0] || '');
  const [toggle, setToggle] = React.useState(false);
  const optionsId = React.useId();

  const selectRef = useOnClickOutside<HTMLButtonElement>(
    () => setToggle(false),
    []
  );

  return (
    <>
      <CustomSelect
        role="menubar"
        tabIndex={0}
        onClick={() => setToggle((s) => !s)}
        ref={selectRef}
      >
        {_value}

        <ArrowStyled>▼</ArrowStyled>

        {toggle && (
          <CustomSelectMenu>
            {options.map((value) => (
              <li key={optionsId + value}>
                <CustomSelectOption
                  role="option"
                  onClick={() => {
                    const _e = { currentTarget: { value } };
                    onChange(_e);
                    setValue(value);
                  }}
                >
                  {value}
                </CustomSelectOption>
              </li>
            ))}
          </CustomSelectMenu>
        )}
      </CustomSelect>
    </>
  );
};
