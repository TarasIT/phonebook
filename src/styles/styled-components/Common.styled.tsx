import styled, { css } from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FormLabelProps } from "../../types/types";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 380px;
  border: 1px solid rgba(109, 107, 107, 0.2);
  box-shadow: 10px 10px 10px 10px rgba(109, 107, 107, 0.2);
  border-radius: 20px;

  animation: slideInFromRight 1s ease;

  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const FormLabel = styled.label<FormLabelProps>`
  position: absolute;
  transition-property: transform font-size;
  transition-duration: 0.3s;
  pointer-events: none;
  left: 5px;
  color: black;
  font-weight: 500;

  transform: ${({
    isNameInputFocused,
    isEmailInputFocused,
    isPasswordInputFocused,
    isNumberInputFocused,
    isFindInputFocused,
  }) =>
    isNameInputFocused ||
    isEmailInputFocused ||
    isPasswordInputFocused ||
    isNumberInputFocused ||
    isFindInputFocused
      ? "translateY(-15px)"
      : "translateY(5px)"};
  font-size: ${({
    isNameInputFocused,
    isEmailInputFocused,
    isPasswordInputFocused,
    isNumberInputFocused,
    isFindInputFocused,
  }) =>
    isNameInputFocused ||
    isEmailInputFocused ||
    isPasswordInputFocused ||
    isNumberInputFocused ||
    isFindInputFocused
      ? "14px"
      : "18px"};
`;

export const FormInput = styled.input`
  min-height: 30px;
  border-radius: 5px;
  padding-left: 5px;
  border: none;
  font-size: 18px;
  transition: box-shadow 0.3s;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 3px 3px 3px 3px rgba(109, 107, 107, 0.3);
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin-right: 0;
  margin-bottom: 20px;

  ${css`
    @media screen and (min-width: 1200px) {
      margin-right: 20px;
      margin-bottom: 0;
    }
  `}
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  bottom: 2px;
  right: 5px;
  background: none;
  border: none;
  border-radius: 5px;
  transition-property: opacity;
  transition-duration: 0.3s;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 50%;
  }
`;

export const ShowPasswordIcon = styled(AiFillEye)`
  width: 20px;
  height: 20px;
`;

export const HidePasswordIcon = styled(AiFillEyeInvisible)`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: inherit;
  background-color: #e2e2e2;
  transition-property: background-color color;
  transition-duration: 0.3s;

  &:hover,
  &:focus {
    background-color: orangered;
    color: white;
    cursor: pointer;
  }
`;
