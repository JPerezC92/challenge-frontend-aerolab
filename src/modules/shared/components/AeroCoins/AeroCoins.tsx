import styled from '@emotion/styled';
import * as Popover from '@radix-ui/react-popover';
import React from 'react';

import { AuthenticationContextState } from 'src/modules/authentication/context/AuthenticationProvider/AuthenticationProvider';
import { AeropayModule } from 'src/modules/shared/components/AeropayModule';
import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Aeropay1 } from 'src/modules/shared/icons/Aeropay1';
import { ChevronDown } from 'src/modules/shared/icons/ChevronDown';
import { Icon } from 'src/modules/shared/icons/Icon';
import { BackgroundNeutral0 } from 'src/modules/shared/theming/sharedStyles/backgrounds/Neutrals';
import { ElevationDefault } from 'src/modules/shared/theming/sharedStyles/elevation';

const PopoverTriggerStyled = styled(ButtonUnstyled)(({ theme: { Colors } }) => [
  BackgroundNeutral0,
  ElevationDefault,
  {
    display: 'flex',
    borderRadius: '1rem',
    border: `1px solid ${Colors.neutral[300]}`,
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    alignItems: 'center',
    [`& > ${Icon}:first-of-type`]: {
      marginInlineEnd: '.5rem',
    },
    [`& > ${Icon}:last-of-type`]: {
      marginInlineStart: '1rem',
    },
  },
]).withComponent(Popover.Trigger);

const PopoverContentStyled = styled(Popover.Content)(
  ({ theme: { Colors } }) => [
    BackgroundNeutral0,
    ElevationDefault,
    {
      border: `1px solid ${Colors.neutral[300]}`,
      borderRadius: '1rem',
      zIndex: '1',
    },
  ]
);

type AeroCoinsProps = {
  user: AuthenticationContextState['user'];
};

export const AeroCoins: React.FC<AeroCoinsProps> = ({ user }) => {
  const [toggle, setToggle] = React.useState(false);
  const handleAeropayModuleClose = () => setToggle(false);

  return (
    <Popover.Root onOpenChange={setToggle} open={toggle}>
      <PopoverTriggerStyled>
        <Icon size="md">
          <Aeropay1 />
        </Icon>

        <Text1 brand>{user?.points || 0} </Text1>

        <Icon size="md">
          <ChevronDown open={toggle} />
        </Icon>
      </PopoverTriggerStyled>

      <PopoverContentStyled sideOffset={10} align="end">
        <AeropayModule onClose={handleAeropayModuleClose} user={user} />
      </PopoverContentStyled>
    </Popover.Root>
  );
};
