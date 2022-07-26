import { UserGetEndpoint } from 'src/modules/users/dto/UserGetEndpoint';
import { User } from 'src/modules/users/models/User';

export function UserEndpointToModelAdapter(
  userEndpoint: UserGetEndpoint
): User {
  return new User({
    ...userEndpoint,
    id: userEndpoint._id,
    createdAt: new Date(userEndpoint.createDate),
  });
}
