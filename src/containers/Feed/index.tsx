import React from "react";
import { useSelector } from "react-redux";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { getAllRewardsSelector, getMyRewardsSelector } from "../../store/rewards/selectors";

import ListRewards from "../ListRewards";

interface FeedProps {
  handleOpenModal(): void;
}

const Feed: React.FC<FeedProps> = ({ handleOpenModal }) => {
  const allRewards = useSelector(getAllRewardsSelector);
  const myRewards = useSelector(getMyRewardsSelector);

  return (
    <Tabs>
      <Tab label="Feed">
        <ListRewards data={allRewards} onClick={handleOpenModal} />
      </Tab>
      <Tab label="My Rewards">
        <ListRewards data={myRewards} onClick={handleOpenModal} />
      </Tab>
    </Tabs>
  );
};

export default Feed;
