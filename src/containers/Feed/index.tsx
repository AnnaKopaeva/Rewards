import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { getUsers } from "../../store/users/reducers";
import { getAllRewardsSelector, getMyRewardsSelector } from "../../store/rewards/selectors";

import ListRewards from "../ListRewards";

interface FeedProps {
  handleOpenModal(): void;
}

const Feed: React.FC<FeedProps> = ({ handleOpenModal }) => {
  const dispatch = useDispatch();

  const allRewards = useSelector(getAllRewardsSelector);
  const myRewards = useSelector(getMyRewardsSelector);

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
