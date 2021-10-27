import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Avatar, { SIZE } from "../../components/Avatar";
import { getUserProfileSelector } from "../../store/users/selectors";
import {
  getMyRewardsTotalSelector,
  getGiveRewardsTotalSelector,
} from "../../store/rewards/selectors";

import styles from "./Header.styles";

const Header = () => {
  const profile = useSelector(getUserProfileSelector);
  const myRewards = useSelector(getMyRewardsTotalSelector);
  const giveRewards = useSelector(getGiveRewardsTotalSelector);

  return (
    <Box sx={styles.header}>
      <Box sx={styles.avatar}>
        <Avatar size={SIZE.m} />
        <Typography sx={styles.name}>{profile?.name}</Typography>
      </Box>
      <Box sx={styles.details}>
        <Box sx={styles.block}>
          <Typography gutterBottom>My Rewards</Typography>
          <Typography sx={styles.count}>{myRewards}$</Typography>
        </Box>
        <Box>
          <Typography gutterBottom>Give</Typography>
          <Typography sx={styles.count}>{giveRewards}$</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
