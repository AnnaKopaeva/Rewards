import * as React from "react";

import Avatar from "../Avatar";

import "./Header.scss";

const Header = () => (
  <div className="header">
    <div className="header_profile">
      <Avatar />
      <span>Jane Doe</span>
    </div>
    <>
      <div className="header_element">
        My Rewards
        <div className="header_element__value">250$</div>
      </div>
      <div className="header_element">
        Give
        <div className="header_element__value">100$</div>
      </div>
    </>
  </div>
);

export default Header;
