import * as React from "react";
import { useSelector } from "react-redux";

import Avatar from "../../components/Avatar";
import { getUserProfileSelector } from "../../store/users/selectors";
import {
  getMyRewardsTotalSelector,
  getGiveRewardsTotalSelector,
} from "../../store/rewards/selectors";

import "./Header.scss";

const Header = () => {
  const profile = useSelector(getUserProfileSelector);
  const myRewards = useSelector(getMyRewardsTotalSelector);
  const giveRewards = useSelector(getGiveRewardsTotalSelector);

  return (
    <div className="header">
      <div className="header_profile">
        <Avatar />
        <span>{profile?.name}</span>
      </div>
      <>
        <div className="header_element">
          My Rewards
          <div className="header_element__value">{myRewards}$</div>
        </div>
        <div className="header_element">
          Give
          <div className="header_element__value">{giveRewards}$</div>
        </div>
      </>
    </div>
  );
};

export default Header;
