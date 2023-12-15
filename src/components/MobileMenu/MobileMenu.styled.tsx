import styled, { css } from "styled-components";
import { RxCross2 } from "react-icons/rx";

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${css`
    @media screen and (max-width: 768px) {
      display: block;
    }
  `}
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 75vw;
  min-height: 100%;
  padding: 20px 30px;
  overflow-y: auto;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #b2d8f0;
  animation: slideFromRight 0.3s ease;

  @keyframes slideFromRight {
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

export const CloseBtn = styled(RxCross2)`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;
