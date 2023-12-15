import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

interface AppBarProps {
  screenWidth: number;
}

export const Header = styled.header<AppBarProps>`
  min-height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-right: ${({ screenWidth }) => screenWidth < 768 && "10px"};
`;

export const HomeLink = styled(NavLink)<AppBarProps>`
  padding: 10px;
  margin-right: ${({ screenWidth }) => (screenWidth < 768 ? "0" : "auto")};
  margin-bottom: ${({ screenWidth }) => (screenWidth < 768 ? "10px" : "0")};
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;

export const OpenMenuBtn = styled(IoIosMenu)`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;
