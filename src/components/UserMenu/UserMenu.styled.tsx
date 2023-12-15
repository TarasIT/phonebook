import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/styled-components/Common.styled";

interface UserMenuProps {
  to?: string;
  screenWidth?: number;
}

export const UserBox = styled.div<UserMenuProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 ? "column" : "row"};
`;

export const ContactsLink = styled(NavLink)<UserMenuProps>`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;

  margin-right: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 ? "0" : "20px"};
  margin-bottom: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 && "20px"};

  &.active {
    color: orangered;
  }
`;

export const UserEmail = styled.p<UserMenuProps>`
  border-radius: 4px;
  padding: 10px;
  margin-right: ${({ screenWidth }) =>
    screenWidth && screenWidth > 768 && "20px"};
  order: ${({ screenWidth }) => screenWidth && screenWidth >= 768 && 2};
  color: black;
  font-weight: 500;
`;

export const LogOutButton = styled(Button)<UserMenuProps>`
  min-width: 80px;
  margin-bottom: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 && "30px"};
  order: ${({ screenWidth }) => screenWidth && screenWidth >= 768 && 3};

  background-color: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 ? "red" : "transparent"};
  color: ${({ screenWidth }) =>
    screenWidth && screenWidth < 768 ? "white" : "black"};

  &:hover,
  &:focus {
    background-color: red;
    color: white;
  }
`;
