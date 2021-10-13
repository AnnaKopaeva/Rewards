import React from "react";

import Avatar, { SIZE } from "../../components/Avatar";
import { RewardEntity } from "../../interfaces/RewardEntity";

import "./ListReward.scss";

interface ListRewardsProps {
  data: RewardEntity[];
  onClick(): void;
}

const ListRewards: React.FC<ListRewardsProps> = ({ data, onClick }) => (
  <div className="list">
    <button type="button" className="list_add" onClick={onClick}>
      +
    </button>
    {data.map((reward) => (
      <div className="list_elem" key={reward.id}>
        <Avatar size={SIZE.s} />
        <div className="list_elem__details">
          <div className="list_elem__info">
            <span className="list_elem__name">
              {reward.user?.name} rewarded by {reward.userBy?.name}
            </span>
            <span className="list_elem__time">{reward.time}</span>
          </div>
          <p className="list_elem__description">{reward.message}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ListRewards;
