import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Currency from "../../components/Currency";
import Profile from "../Profile";

import { CURRENCY } from "../../constants";

import { selectTotalMyRewards, selectTotalGiveRewards } from "../../store/rewards/selectors";

import styles from "./Header.styles";

const Header = () => {
  const myRewards = useSelector(selectTotalMyRewards);
  const giveRewards = useSelector(selectTotalGiveRewards);

  return (
    <Box sx={styles.header}>
      <Profile />
      <Box sx={styles.details}>
        <Box sx={styles.block}>
          <Typography gutterBottom>My Rewards</Typography>
          <Typography sx={styles.count}>
            {myRewards}
            <Currency value={CURRENCY.dollar} />
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom>Give</Typography>
          <Typography sx={styles.count}>
            {giveRewards}
            <Currency value={CURRENCY.dollar} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
