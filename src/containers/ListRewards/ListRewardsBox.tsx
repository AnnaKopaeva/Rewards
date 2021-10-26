import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Avatar from "../../components/Avatar";
import PanelEmpty from "../../components/PanelEmpty";
import { RewardEntity } from "../../interfaces/RewardEntity";

interface ListRewardsProps {
  data: RewardEntity[];
}

const ListRewardsBox: React.FC<ListRewardsProps> = ({ data }) => {
  return (
    <>
      {data.length ? (
        data.map((reward) => (
          <Box key={reward.id} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Avatar sx={{ width: 40, height: 40 }} />
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="caption">
                {reward.user?.name} rewarded by {reward.userBy?.name}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {reward.time}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {reward.message}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <PanelEmpty>You can add new reward.</PanelEmpty>
      )}
    </>
  );
};

export default ListRewardsBox;
