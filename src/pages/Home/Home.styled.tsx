import styled, { css } from "styled-components";

export const HomePage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const Title = styled.h1`
  max-width: 400px;
  margin-left: 10px;
  margin-right: auto;
  padding-right: 10px;
  font-size: 36px;
  line-height: 1.3;

  ${css`
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  `}
`;

export const NotAuthTitle = styled.span`
  text-align: center;
`;
