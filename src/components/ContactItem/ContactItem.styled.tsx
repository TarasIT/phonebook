import styled, { css } from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 767px;
  margin-left: auto;
  margin-right: auto;
  padding: 3px 10px;
  border-radius: 10px;
  transition-property: background-color;
  transition-duration: 0.3s;

  ${css`
    @media screen and (max-width: 479px) {
      flex-direction: column;
    }
  `}

  &:hover,
  &:focus {
    background-color: rgba(83, 140, 214, 0.5);
  }
`;

export const ContactInfo = styled.div`
  ${css`
    @media screen and (max-width: 479px) {
      text-align: center;
    }
  `}
`;

export const Name = styled.p`
  margin-bottom: 5px;
  word-break: break-all;
  font-size: 17px;
  color: red;
`;

export const Number = styled.p`
  padding-left: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const ContactDeleteBtn = styled.button`
  min-width: 120px;
  height: 30px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  background-color: #e2e2e2;
  transition-property: background-color color;
  transition-duration: 0.3s;

  ${css`
    @media screen and (min-width: 479px) {
      margin-left: auto;
    }
  `}

  &:hover,
  &:focus {
    background-color: #ff1919;
    color: white;
    cursor: pointer;
  }
`;
