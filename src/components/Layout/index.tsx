import * as React from "react";

import Box from "@mui/material/Box";

import styles from "./Layout.styles";

const Layout: React.FC = ({ children }) => <Box sx={styles.layout}>{children}</Box>;

export default Layout;
