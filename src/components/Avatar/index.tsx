import * as React from "react";

import Avatar, { AvatarProps } from "@mui/material/Avatar";

import User from "./user.svg";

const styles = {
  bgcolor: "grey.A200",
  padding: "20px",
};

const AvatarComponent: React.FC<AvatarProps> = ({ sx }) => (
  <Avatar sx={{ ...sx, ...styles }} src={User} />
);

export default AvatarComponent;
