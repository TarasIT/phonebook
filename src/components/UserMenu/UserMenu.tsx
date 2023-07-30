import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import { Link, UserBox, UserEmail } from "./UserMenu.styled";
import { Loader } from "../Loader/Loader";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Button } from "../../styles/styled-components/Common.styled";

export const UserMenu: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const { user } = useAuth();

  return (
    <UserBox>
      <Link to="/contacts">Contacts</Link>
      <UserEmail>{user.email}</UserEmail>
      <Button type="button" onClick={() => dispatch(logOut())}>
        {isLoading ? <Loader /> : "Log Out"}
      </Button>
    </UserBox>
  );
};
