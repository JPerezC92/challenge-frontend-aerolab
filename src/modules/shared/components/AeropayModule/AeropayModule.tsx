import styled from '@emotion/styled';

import { PointsAddForm } from 'src/modules/points/containers/PointsAddForm';
import { AeropayCard } from 'src/modules/shared/components/AeropayCard';
import { Button } from 'src/modules/shared/components/base/Button';
import { ButtonUnstyled } from 'src/modules/shared/components/base/Button/Button';
import { Hr } from 'src/modules/shared/components/base/Hr';
import { Menu } from 'src/modules/shared/components/base/Menu';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { CrossDefault } from 'src/modules/shared/icons/CrossDefault';
import { Icon } from 'src/modules/shared/icons/Icon';
import { useChallengeUsersRepository } from 'src/modules/users/service/useChallengeUsersRepository';

type AeropayModuleProps = {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
};

export const AeropayModuleStyled = styled(Menu)`
  border-radius: 1rem;
  border: 1px solid ${({ theme: { Colors } }) => Colors.neutral[300]};
  position: absolute;
  right: 0;
  top: 120%;

  & > li {
    display: flex;
    flex-direction: column;

    & > header {
      margin-inline: 1.5rem;
      margin-block: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > button {
        ${ButtonUnstyled}
      }
    }

    & > div:nth-of-type(1) {
      padding-inline: 1.5rem;
      padding-block: 1rem;

      display: grid;
      grid-template-rows: repeat(2, auto);
      row-gap: 2.5rem;

      & > ol {
        display: flex;
        column-gap: 2.5rem;
      }
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    div {
      display: grid;
      grid-template-columns: repeat(3, auto);
      column-gap: 0.25rem;
    }
  }
`;

export const AeropayModule: React.FC<AeropayModuleProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AeropayModuleStyled isOpen={isOpen}>
      <li>
        <header>
          <Text1 as="h3">Add Balance</Text1>

          <Button type="button" onClick={onClose}>
            <Icon size="sm">
              <CrossDefault />
            </Icon>
          </Button>
        </header>

        <Hr />

        <div>
          <AeropayCard />

          <PointsAddForm usersRepository={useChallengeUsersRepository()} />
        </div>
      </li>
    </AeropayModuleStyled>
  );
};
