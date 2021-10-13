import { UserEntity } from "./UserEntity";

export interface RewardEntity {
  id: number;
  time: string;
  message: string;
  reward: number;
  user: Partial<UserEntity>;
  userBy: Partial<UserEntity>;
}

export interface CreateRewardEntity {
  message: string;
  reward: string;
  user: UserEntity;
}
