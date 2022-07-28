import styled from '@emotion/styled';
import React from 'react';

import { ColorBrandDefault } from 'src/modules/shared/theming/sharedStyles/colors/Brand';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

type SelectorProps = { label: string | number } & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'type'
>;

const SelectorLabelStyled = styled.label`
  ${TextL1Default}
  ${ColorBrandDefault}
  border-radius: 12px;
  display: block;
  padding-block: 0.25rem;
  padding-inline: 1rem;
  transition: all 0.3s ease-in-out;
`;

const SelectorStyled = styled.input`
  appearance: none;
  border-radius: 0.75rem;
  height: 100%;
  left: 0;
  margin: 0;
  outline-offset: -2.5px;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;

  &:checked ~ label {
    color: ${({ theme: { Colors } }) => Colors.neutral[100]};
    background-clip: border-box;
  }
`;

const SelectorWrapperStyled = styled.span`
  background-color: ${({ theme: { Colors } }) => Colors.brand.light};
  border-radius: 12px;
  display: inline-block;
  position: relative;
  text-align: center;
`;

export const Selector: React.FC<SelectorProps> = ({
  label,
  className,
  ...props
}) => {
  const id = React.useId();

  return (
    <SelectorWrapperStyled>
      <SelectorStyled type="radio" id={id} {...props}></SelectorStyled>

      <SelectorLabelStyled htmlFor={id} className={className}>
        {label}
      </SelectorLabelStyled>
    </SelectorWrapperStyled>
  );
};
