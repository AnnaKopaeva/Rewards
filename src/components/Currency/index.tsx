import * as React from "react";

import Typography from "@mui/material/Typography";

import styles from "./Currency.styles";

interface CurrencyProps {
  value: string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return (
    <Typography sx={styles.currency} component="span">
      {value}
    </Typography>
  );
};

export default Currency;
