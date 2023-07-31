import styled from "styled-components";

export const Phonebook = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid;
  padding-top: 20px;
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

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const NoContactsMessage = styled.p`
  font-size: 20px;
  text-align: center;
`;
