import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ListRewardsSkeleton: React.FC = () => (
  <Grid container wrap="nowrap">
    {Array.from(new Array(6)).map((item) => (
      <Box key={item} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <Skeleton width={100} height={100} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Box>
    ))}
  </Grid>
);

export default ListRewardsSkeleton;
