import { PointsAmount } from 'src/modules/points/models/PointsAmount';
import { User } from 'src/modules/users/models/User';

export interface UsersRepository {
  find(): Promise<User | undefined>;
  addPoints: (amount: PointsAmount) => Promise<void>;
}
