import styled from '@emotion/styled';
import React, { useState } from 'react';
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
  const [pointsAmount, setPointsAmount] = useState<PointsAmount>(1000);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const amount = parseInt(value) as PointsAmount;

    if (!selectPoints.includes(amount)) return;

    setPointsAmount(amount);
  };

  const handleAddPointsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await usersRepository().addPoints(pointsAmount);
    setIsLoading(false);
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
