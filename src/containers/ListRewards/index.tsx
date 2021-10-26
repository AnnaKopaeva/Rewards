import React from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import ListRewardsSkeleton from "./ListRewardsSkeleton";
import ListRewardsBox from "./ListRewardsBox";

import { RewardEntity } from "../../interfaces/RewardEntity";

import { getRewardsLoadingSelector } from "../../store/rewards/selectors";

interface ListRewardsProps {
  data: RewardEntity[];
  onClick(): void;
}

const ListRewards: React.FC<ListRewardsProps> = ({ data, onClick }) => {
  const isLoading = useSelector(getRewardsLoadingSelector);

  return (
    <Grid container wrap="nowrap">
      <Button onClick={onClick}>+</Button>
      {isLoading ? <ListRewardsSkeleton /> : <ListRewardsBox data={data} />}
    </Grid>
  );
};

export default ListRewards;
