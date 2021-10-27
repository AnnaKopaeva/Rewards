import { UserEntity } from "./UserEntity";

export interface RewardEntity {
  id: number;
  time: string;
  message: string;
  reward: number | string;
  user: Partial<UserEntity>;
  userBy: Partial<UserEntity>;
}
