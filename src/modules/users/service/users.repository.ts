import { User } from 'src/modules/users/models/User';

export interface UserRepository {
  find(): Promise<User | undefined>;
}
