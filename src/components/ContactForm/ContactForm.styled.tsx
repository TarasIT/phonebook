import styled, { css } from "styled-components";
import { FormLabel } from "../../styles/styled-components/Common.styled";

interface FormLabelProps {
  isNameInputFocused?: boolean;
  isNumberInputFocused?: boolean;
}

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

export const NameLabel = styled(FormLabel)<FormLabelProps>`
  top: ${({ isNameInputFocused }) => (isNameInputFocused ? "-15px" : "5px")};
  font-size: ${({ isNameInputFocused }) =>
    isNameInputFocused ? "14px" : "18px"};
`;

export const NumberLabel = styled(FormLabel)<FormLabelProps>`
  top: ${({ isNumberInputFocused }) =>
    isNumberInputFocused ? "-15px" : "5px"};
  font-size: ${({ isNumberInputFocused }) =>
    isNumberInputFocused ? "14px" : "18px"};
`;
