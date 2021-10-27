import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { getAllRewardsSelector, getMyRewardsSelector } from "../../store/rewards/selectors";

import ListRewards from "../ListRewards";

import styles from "./Feed.styles";

interface FeedProps {
  handleOpenModal(): void;
}

const Feed: React.FC<FeedProps> = ({ handleOpenModal }) => {
  const allRewards = useSelector(getAllRewardsSelector);
  const myRewards = useSelector(getMyRewardsSelector);

  return (
    <Box sx={styles.feed}>
      <Tabs>
        <Tab label="Feed">
          <ListRewards data={allRewards} />
        </Tab>
        <Tab label="My Rewards">
          <ListRewards data={myRewards} />
        </Tab>
      </Tabs>
      <Button sx={styles.addBtn} onClick={handleOpenModal}>
        <Add />
      </Button>
    </Box>
  );
};

export default Feed;
