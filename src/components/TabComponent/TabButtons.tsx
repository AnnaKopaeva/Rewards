import React from "react";

import "./Tabs.scss";
import clsx from "clsx";

interface TabButtonsProps {
  tabsList: string[];
  activeTab: string;
  changeTab(tab: string): void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ tabsList, changeTab, activeTab }) => (
  <>
    {tabsList.map((tab: string) => (
      <button
        key={tab}
        type="button"
        className={clsx("tab_button", { tab_button__active: tab === activeTab })}
        onClick={() => changeTab(tab)}
      >
        {tab}
      </button>
    ))}
  </>
);

export default TabButtons;
