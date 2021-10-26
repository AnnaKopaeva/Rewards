import React from "react";

import Button from "@mui/material/Button";

import { tabStyle, activeTabStyle } from "./Tabs.styles";

interface TabButtonsProps {
  tabsList: string[];
  activeTab: string;
  changeTab(tab: string): void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ tabsList, changeTab, activeTab }) => (
  <>
    {tabsList.map((tab: string) => (
      <Button
        key={tab}
        type="button"
        sx={tab === activeTab ? { ...tabStyle, ...activeTabStyle } : tabStyle}
        onClick={() => changeTab(tab)}
      >
        {tab}
      </Button>
    ))}
  </>
);

export default TabButtons;
