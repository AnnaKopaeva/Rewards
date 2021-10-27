import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { fetchRewards, fetchRewardsByUser } from "../../store/rewards/actions";
import { selectAllRewards, selectMyRewards } from "../../store/rewards/selectors";
import { selectProfileData } from "../../store/profile/selectors";

import ListRewards from "../ListRewards";

import styles from "./Feed.styles";

interface FeedProps {
  onOpen(): void;
}

const Feed: React.FC<FeedProps> = ({ onOpen }) => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfileData);
  const allRewards = useSelector(selectAllRewards);
  const myRewards = useSelector(selectMyRewards);

  useEffect(() => {
    dispatch(fetchRewards());
    dispatch(fetchRewardsByUser(profile.id));
  }, []);

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
      <Button sx={styles.addBtn} onClick={onOpen}>
        <Add />
      </Button>
    </Box>
  );
};

export default Feed;
