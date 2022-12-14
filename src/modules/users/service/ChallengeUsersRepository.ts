import { PointsAmount } from 'src/modules/points/models/PointsAmount';
import { Repository } from 'src/modules/shared/service/Repository';
import { AEROLAB_API_URL } from 'src/modules/shared/utils/constants';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';
import { formatBearerToken } from 'src/modules/shared/utils/formatBearerToken';
import { UserEndpointToModelAdapter } from 'src/modules/users/adapters/UserEndpointToModelAdapter';
import { UserGetEndpointSchema } from 'src/modules/users/dto/UserGetEndpoint';
import { UserPointsPostEndpointSchema } from 'src/modules/users/dto/UserPointsPostEndpoint';
import { UsersRepository } from 'src/modules/users/service/users.repository';

export const ChallengeUsersRepository: Repository<UsersRepository> = (
  signal
) => {
  return {
    find: async () => {
      const response = await fetch(AEROLAB_API_URL + '/user/me', {
        method: 'GET',
        signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: formatBearerToken(EnvVariables.AEROLAB_API_KEY),
        },
      });

      const result = await response.json();

      const validatedResult = UserGetEndpointSchema.parse(result);

      return UserEndpointToModelAdapter(validatedResult);
    },

    addPoints: async (amount: PointsAmount): Promise<void> => {
      const response = await fetch(AEROLAB_API_URL + '/user/points', {
        method: 'POST',
        signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: formatBearerToken(EnvVariables.AEROLAB_API_KEY),
        },
        body: JSON.stringify({ amount }),
      });

      const result = await response.json();

      UserPointsPostEndpointSchema.parse(result);
    },
  };
};
