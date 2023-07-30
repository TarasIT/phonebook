import React, { FC } from "react";
import { Link } from "./AuthNav.styled";

export const AuthNav: FC = (): JSX.Element => {
  return (
    <nav>
      <Link to="/registration">Registration</Link>
      <Link to="/login">log In</Link>
    </nav>
  );
};
