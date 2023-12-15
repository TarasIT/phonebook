import React, { FC } from "react";
import { RegistrationLink, LogInLink, NavBar } from "./AuthNav.styled";
import { StyleSheetManager } from "styled-components";

interface AuthNavProps {
  screenWidth: number;
}

const shouldForwardProp = (prop: string) => prop !== "screenWidth";

export const AuthNav: FC<AuthNavProps> = ({ screenWidth }): JSX.Element => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <NavBar screenWidth={screenWidth}>
        <RegistrationLink to="/registration" screenWidth={screenWidth}>
          Registration
        </RegistrationLink>
        <LogInLink to="/login" screenWidth={screenWidth}>
          log In
        </LogInLink>
      </NavBar>
    </StyleSheetManager>
  );
};
