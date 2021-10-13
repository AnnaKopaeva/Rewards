import { UserEntity } from "./UserEntity";

export interface RewardEntity {
  id: number;
  userId: number;
  userById: number;
  time: string;
  message: string;
  user?: UserEntity;
  userBy?: UserEntity;
}
