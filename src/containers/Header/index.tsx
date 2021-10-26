import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Avatar from "../../components/Avatar";
import { getUserProfileSelector } from "../../store/users/selectors";
import {
  getMyRewardsTotalSelector,
  getGiveRewardsTotalSelector,
} from "../../store/rewards/selectors";

const Header = () => {
  const profile = useSelector(getUserProfileSelector);
  const myRewards = useSelector(getMyRewardsTotalSelector);
  const giveRewards = useSelector(getGiveRewardsTotalSelector);

  return (
    <Box>
      <Box>
        <Avatar sx={{ width: 100, height: 100 }} />
        <Typography gutterBottom fontSize={16} component="span">
          {profile?.name}
        </Typography>
      </Box>
      <>
        <Typography gutterBottom component="div">
          My Rewards
          <Typography gutterBottom component="div">
            {myRewards}$
          </Typography>
        </Typography>
        <Typography gutterBottom component="div">
          Give
          <Typography gutterBottom component="div">
            {giveRewards}$
          </Typography>
        </Typography>
      </>
    </Box>
  );
};

export default Header;
