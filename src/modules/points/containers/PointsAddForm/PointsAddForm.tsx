import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

import { PointsAddFailureToast } from 'src/modules/points/components/PointsAddFailureToast';
import { PointsAddSuccessToast } from 'src/modules/points/components/PointsAddSuccessToast';
import { PointsAddEventTrigger } from 'src/modules/points/events/PointsAdd.event';
import { PointsAmount } from 'src/modules/points/models/PointsAmount';
import { Button } from 'src/modules/shared/components/base/Button';
import { Selector } from 'src/modules/shared/components/base/Selector';
import { Aeropay3 } from 'src/modules/shared/icons/Aeropay3';
import { Icon } from 'src/modules/shared/icons/Icon';
import { Repository } from 'src/modules/shared/service/Repository';
import { UsersRepository } from 'src/modules/users/service/users.repository';

const PointsAddFormStyled = styled.form({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.5rem',
});

const SelectorsGroupStyled = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  columnGap: '0.25rem',
});

type PointsAddFormProps = {
  className?: string;
  usersRepository: Repository<UsersRepository>;
};

const selectPoints = [1000, 5000, 7500] as const;

export const PointsAddForm: React.FC<PointsAddFormProps> = ({
  usersRepository,
  className,
}) => {
  const [pointsAmount, setPointsAmount] = React.useState<PointsAmount>(1000);
  const { mutate: handleAddPointsSubmit, isLoading } = useMutation(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return await usersRepository().addPoints(pointsAmount);
    },
    {
      onSuccess: () => {
        PointsAddEventTrigger(pointsAmount);
        toast(<PointsAddSuccessToast pointsAmount={pointsAmount} />);
      },
      onError: () => {
        toast(<PointsAddFailureToast />);
      },
    }
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const amount = parseInt(value) as PointsAmount;

    if (!selectPoints.includes(amount)) return;

    setPointsAmount(amount);
  };

  return (
    <PointsAddFormStyled onSubmit={handleAddPointsSubmit} className={className}>
      <SelectorsGroupStyled>
        {selectPoints.map((value) => (
          <Selector
            key={value}
            value={value}
            label={value}
            name="points"
            checked={value === pointsAmount}
            onChange={handleOnChange}
            disabled={isLoading}
          />
        ))}
      </SelectorsGroupStyled>

      <Button type="submit" disabled={isLoading}>
        <Icon>
          <Aeropay3 />
        </Icon>
        Add Points
      </Button>
    </PointsAddFormStyled>
  );
};
