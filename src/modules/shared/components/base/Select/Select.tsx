import styled from '@emotion/styled';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import React from 'react';

import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { BackgroundNeutral0 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const SelectTriggerStyled = styled(ButtonUnstyled)(({ theme: { Colors } }) => [
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
]).withComponent(SelectPrimitive.SelectTrigger);

const SelectContentStyled = styled(SelectPrimitive.Content)(
  ({ theme: { Colors } }) => [
    BackgroundNeutral0,
    {
      border: `1px solid ${Colors.neutral[300]}`,
      borderRadius: '1rem',
      paddingBlock: '.5rem',
      overflow: 'hidden',
    },
  ]
);

const ScrollAreaStyled = styled(ScrollAreaPrimitive.ScrollArea)({
  display: 'grid',
  width: '100%',
  height: '100%',
});

const ScrollAreaViewportStyled = styled(ScrollAreaPrimitive.ScrollAreaViewport)(
  { width: '100%', height: '100%' }
);

const ScrollbarStyled = styled(ScrollAreaPrimitive.Scrollbar)({
  width: '.5rem',
  paddingBlock: '.25rem',
});

const ScrollAreaThumbStyled = styled(ScrollAreaPrimitive.ScrollAreaThumb)(
  ({ theme: { Colors } }) => ({
    background: Colors.brand.light,
    borderRadius: '.25rem',
  })
);

const SelectItemStyled = styled(ButtonUnstyled)(({ theme: { Colors } }) => [
  TextL1Default,
  ColorNeutral600,
  {
    paddingInline: '1.5rem',
    paddingBlock: '.75rem',
    textAlign: 'left',
    outlineColor: Colors.brand.light2,
    [`&:hover`]: {
      background: Colors.neutral[100],
      outlineColor: 'transparent',
    },
  },
]).withComponent(SelectPrimitive.SelectItem);

const ArrowStyled = styled.span({
  marginInlineStart: 'auto',
  color: '#000',
  fontSize: '.7em',
});

type SelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  options = [],
}) => {
  const [toggle, setToggle] = React.useState(false);
  const optionsId = React.useId();

  return (
    <SelectPrimitive.Root
      open={toggle}
      onOpenChange={setToggle}
      value={value}
      onValueChange={onChange}
    >
      <SelectTriggerStyled>
        <SelectPrimitive.Value>{value}</SelectPrimitive.Value>
        <ArrowStyled>▼</ArrowStyled>
      </SelectTriggerStyled>

      <SelectPrimitive.Portal>
        <SelectContentStyled>
          <ScrollAreaStyled type="auto">
            <SelectPrimitive.SelectViewport>
              <ScrollAreaViewportStyled>
                {options.map((value) => (
                  <SelectItemStyled key={optionsId + value} value={value}>
                    <SelectPrimitive.SelectItemText>
                      {value}
                    </SelectPrimitive.SelectItemText>
                  </SelectItemStyled>
                ))}
              </ScrollAreaViewportStyled>
            </SelectPrimitive.SelectViewport>
            <ScrollbarStyled orientation="vertical">
              <ScrollAreaThumbStyled />
            </ScrollbarStyled>
          </ScrollAreaStyled>
        </SelectContentStyled>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
