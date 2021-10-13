import * as React from "react";

import "./Avatar.scss";
import clsx from "clsx";

import User from "./user.svg";

export enum SIZE {
  s = "s",
  sm = "sm",
}

interface AvatarProps {
  size?: SIZE;
}

const defaultProps = {
  size: SIZE.sm,
};

const Avatar: React.FC<AvatarProps> = ({ size }) => (
  <div className={clsx("avatar", `avatar__${size}`)}>
    <img src={User} alt="avatar" />
  </div>
);

Avatar.defaultProps = defaultProps;

export default Avatar;
