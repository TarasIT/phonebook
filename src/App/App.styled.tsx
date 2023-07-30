import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  height: 100%;

  ${css`
    @media screen and (min-width: 320px) and (max-width: 479px) {
      & {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  `}
`;
