import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import Avatar, { SIZE } from "../../components/Avatar";
import { selectProfileData } from "../../store/profile/selectors";
import { selectTotalMyRewards, selectTotalGiveRewards } from "../../store/rewards/selectors";

import styles from "./Header.styles";

const Header = () => {
  const profile = useSelector(selectProfileData);
  const myRewards = useSelector(selectTotalMyRewards);
  const giveRewards = useSelector(selectTotalGiveRewards);

  return (
    <Box sx={styles.header}>
      <Box sx={styles.avatar}>
        <Avatar size={SIZE.m} />
        {profile ? (
          <Typography sx={styles.name}>{profile.name}</Typography>
        ) : (
          <Skeleton sx={styles.name} />
        )}
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
