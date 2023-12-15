import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface AuthNavProps {
  screenWidth: number;
}

export const NavBar = styled.nav<AuthNavProps>`
  display: flex;
  margin-left: auto;

  flex-direction: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 && "column"};
  align-items: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 && "center"};
  margin-left: ${({ screenWidth }) => screenWidth && screenWidth < 768 && "0"};
`;

export const RegistrationLink = styled(NavLink)<AuthNavProps>`
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;

  &:first-child {
    margin-right: 20px;
  }

  &.active {
    color: orangered;
  }

  &:first-child {
    margin-right: ${({ screenWidth }) =>
      screenWidth && screenWidth < 768 && "0"};
  }
`;

export const LogInLink = styled(RegistrationLink)<AuthNavProps>``;
