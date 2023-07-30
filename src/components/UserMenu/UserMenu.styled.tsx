import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
}

export const UserBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(NavLink)<LinkProps>`
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;

  &.active {
    color: orangered;
  }
`;

export const UserEmail = styled.p`
  border-radius: 4px;
  color: black;
  font-weight: 500;
  margin-right: 20px;
`;
