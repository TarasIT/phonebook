import styled from "styled-components";

export const List = styled.ul`
  max-height: 60vh;
  overflow-y: auto;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const MainLetter = styled.p`
  position: sticky;
  top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: green;
`;
