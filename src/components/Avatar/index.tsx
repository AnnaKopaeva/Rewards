import * as React from "react";

import User from "./user.svg";

import "./Avatar.scss";

const Avatar = () => (
  <div className="avatar">
    <img src={User} alt="avatar" className="avatar__img" />
  </div>
);

export default Avatar;
