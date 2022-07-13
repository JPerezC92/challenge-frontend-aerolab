import styled from '@emotion/styled';

import { AeropayCard } from 'src/modules/shared/components/AeropayCard';
import { Button } from 'src/modules/shared/components/base/Button';
import { Hr } from 'src/modules/shared/components/base/Hr';
import { Menu } from 'src/modules/shared/components/base/Menu';
import { Selector } from 'src/modules/shared/components/base/Selector';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { Aeropay3 } from 'src/modules/shared/components/icons/Aeropay3';
import { CrossDefault } from 'src/modules/shared/components/icons/CrossDefault';
import { Icon } from 'src/modules/shared/components/icons/Icon';

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

          <Button variant="unstyled" type="button" onClick={onClose}>
            <Icon size="sm">
              <CrossDefault />
            </Icon>
          </Button>
        </header>

        <Hr />

        <div>
          <AeropayCard />

          <form>
            <div>
              <Selector value={1000} label="1000" name="points" />
              <Selector value={5000} label="5000" name="points" />
              <Selector
                value={7500}
                label="7500"
                name="points"
                defaultChecked
              />
            </div>

            <Button>
              <Icon>
                <Aeropay3 />
              </Icon>
              Add Points
            </Button>
          </form>
        </div>
      </li>
    </AeropayModuleStyled>
  );
};
