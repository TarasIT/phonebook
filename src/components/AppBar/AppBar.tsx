import React, { FC } from "react";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import { Header, Link } from "./AppBar.styled";

export const AppBar: FC = (): JSX.Element => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Link to="/">Home</Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
