import React from 'react';
import { Repository } from 'src/modules/shared/service/Repository';
import { AEROLAB_API_URL } from 'src/modules/shared/utils/constants';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';
import { formatBearerToken } from 'src/modules/shared/utils/formatBearerToken';
import { UserEndpointToModelAdapter } from 'src/modules/users/adapters/UserEndpointToModelAdapter';
import { UserGetEndpointSchema } from 'src/modules/users/dto/UserGetEndpoint';

import { UserRepository } from './users.repository';

export function useChallengeUsersRepository(): Repository<UserRepository> {
  return React.useCallback((signal) => {
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

        const validation = UserGetEndpointSchema.safeParse(result);

        if (!validation.success) {
          return;
        }

        return UserEndpointToModelAdapter(validation.data);
      },
    };
  }, []);
}
