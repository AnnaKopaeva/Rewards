import React from "react";

import "./PanelEmpty.scss";

interface PanelEmptyProps {
  title?: string;
}

const defaultProps = {
  title: "No data found",
  children: "",
};

const PanelEmpty: React.FC<PanelEmptyProps> = ({ title, children }) => (
  <div className="panel">
    <h5 className="panel__title">{title}</h5>
    <p className="panel__desc">{children}</p>
  </div>
);

PanelEmpty.defaultProps = defaultProps;

export default PanelEmpty;
