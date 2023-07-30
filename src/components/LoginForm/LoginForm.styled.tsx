import styled from "styled-components";
import { FormLabel } from "../../styles/styled-components/Common.styled";

interface FormLabelProps {
  isEmailInputFocused?: boolean;
  isPasswordInputFocused?: boolean;
}

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const EmailLabel = styled(FormLabel)<FormLabelProps>`
  top: ${({ isEmailInputFocused }) => (isEmailInputFocused ? "-15px" : "5px")};
  font-size: ${({ isEmailInputFocused }) =>
    isEmailInputFocused ? "14px" : "18px"};
`;

export const PasswordLabel = styled(FormLabel)<FormLabelProps>`
  top: ${({ isPasswordInputFocused }) =>
    isPasswordInputFocused ? "-15px" : "5px"};
  font-size: ${({ isPasswordInputFocused }) =>
    isPasswordInputFocused ? "14px" : "18px"};
`;
