import * as React from "react";
import { useSelector } from "react-redux";

import Avatar from "../Avatar";
import { getUserProfileSelector } from "../../store/users/selectors";

import "./Header.scss";

const Header = () => {
  const profile = useSelector(getUserProfileSelector);

  return (
    <div className="header">
      <div className="header_profile">
        <Avatar />
        <span>{profile?.name}</span>
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
};

export default Header;
