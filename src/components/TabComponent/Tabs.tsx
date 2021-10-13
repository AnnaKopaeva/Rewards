import React from "react";

import TabButtons from "./TabButtons";

import "./Tabs.scss";

interface TabsProps {
  children: React.ReactElement[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(children[0]?.props.label);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  let content;
  const tabsList: string[] = [];

  return (
    <div>
      {React.Children.map(children, (child: React.ReactElement) => {
        tabsList.push(child.props.label);
        if (child.props.label === activeTab) {
          content = child.props.children;
        }
      })}

      <TabButtons activeTab={activeTab} tabsList={tabsList} changeTab={changeTab} />
      <div className="tab_content">{content}</div>
    </div>
  );
};

export default Tabs;
