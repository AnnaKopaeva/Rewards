import React from "react";

import "./Tabs.scss";
import clsx from "clsx";

interface TabButtonsProps {
  buttons: string[];
  activeTab: string;
  changeTab(button: string): void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ buttons, changeTab, activeTab }) => (
  <>
    {buttons.map((button: string) => {
      return (
        <button
          type="button"
          className={clsx("tab_button", { tab_button__active: button === activeTab })}
          onClick={() => changeTab(button)}
        >
          {button}
        </button>
      );
    })}
  </>
);

export default TabButtons;
