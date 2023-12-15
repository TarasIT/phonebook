import React, { FC } from "react";
import { IoExitOutline } from "react-icons/io5";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import {
  ContactsLink,
  LogOutButton,
  UserBox,
  UserEmail,
} from "./UserMenu.styled";
import { Loader } from "../Loader/Loader";
import { selectIsLoading } from "../../redux/auth/selectors";
import { StyleSheetManager } from "styled-components";

interface UserMenuProps {
  screenWidth: number;
}

const shouldForwardProp = (prop: string) => prop !== "screenWidth";

export const UserMenu: FC<UserMenuProps> = ({ screenWidth }): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading) as boolean;
  const { user } = useAuth();

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <UserBox screenWidth={screenWidth}>
        <ContactsLink to="/contacts" screenWidth={screenWidth}>
          Contacts
        </ContactsLink>
        <LogOutButton
          type="button"
          onClick={() => dispatch(logOut())}
          screenWidth={screenWidth}
        >
          {isLoading ? <Loader /> : <IoExitOutline />}
        </LogOutButton>
        <UserEmail>{user.email}</UserEmail>
      </UserBox>
    </StyleSheetManager>
  );
};
