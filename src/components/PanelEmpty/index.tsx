import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PanelEmptyProps {
  title?: string;
}

const defaultProps = {
  title: "No data found",
  children: "",
};

const PanelEmpty: React.FC<PanelEmptyProps> = ({ title, children }) => (
  <Box sx={{ textAlign: "center", padding: "50px 0" }}>
    <Typography variant="h5" gutterBottom fontSize={20} component="h5">
      {title}
    </Typography>
    <Typography variant="h6" gutterBottom fontSize={14} component="h6">
      {children}
    </Typography>
  </Box>
);

PanelEmpty.defaultProps = defaultProps;

export default PanelEmpty;
