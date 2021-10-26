import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

export const CustomBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CustomButton = styled(Button)({
  margin: "20px 0 0",
  bgcolor: "palette.primary.main",
  textTransform: "capitalize",
  fontSize: "18px",
  width: "100px",
});
