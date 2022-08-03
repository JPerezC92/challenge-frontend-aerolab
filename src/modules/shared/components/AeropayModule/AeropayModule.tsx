import styled from '@emotion/styled';

import { PointsAddForm } from 'src/modules/points/containers/PointsAddForm';
import { AeropayCard } from 'src/modules/shared/components/AeropayCard';
import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { Hr } from 'src/modules/shared/components/base/Hr';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { CrossDefault } from 'src/modules/shared/icons/CrossDefault';
import { Icon } from 'src/modules/shared/icons/Icon';
import { ChallengeUsersRepository } from 'src/modules/users/service/ChallengeUsersRepository';

type AeropayModuleProps = {
  className?: string;
  onClose?: () => void;
};

const MenuItemStyled = styled.li({
  display: 'flex',
  flexDirection: 'column',
});

const HeaderStyled = styled.header({
  marginInline: '1.5rem',
  marginBlock: '1rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ContentStyled = styled.div({
  paddingInline: '1.5rem',
  paddingBlock: '1rem',
  display: 'grid',
  rowGap: '2.5rem',
});

export const AeropayModule: React.FC<AeropayModuleProps> = ({ onClose }) => {
  return (
    <menu>
      <MenuItemStyled>
        <HeaderStyled>
          <Text1 as="h3">Add Balance</Text1>

          <ButtonUnstyled type="button" onClick={onClose}>
            <Icon size="sm">
              <CrossDefault />
            </Icon>
          </ButtonUnstyled>
        </HeaderStyled>

        <Hr />

        <ContentStyled>
          <AeropayCard />

          <PointsAddForm usersRepository={ChallengeUsersRepository} />
        </ContentStyled>
      </MenuItemStyled>
    </menu>
  );
};
