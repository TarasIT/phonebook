import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  ${css`
    @media screen and (max-width: 767px) {
      & {
        width: 280px;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 900px) {
      & {
        width: 600px;
      }
    }
  `}
`;
