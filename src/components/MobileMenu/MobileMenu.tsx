import React, { FC, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  CloseBtn,
  MobileMenuContainer,
  MobileMenuOverlay,
} from "./MobileMenu.styled";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent): void => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    if (touchStartXRef.current !== null) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartXRef.current;

      const swipeThreshold = 50;

      if (deltaX > swipeThreshold) {
        onClose();
        touchStartXRef.current = null;
      }
    }
  };

  const handleTouchEnd = (): null => (touchStartXRef.current = null);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <MobileMenuOverlay onClick={onClose}>
      <MobileMenuContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CloseBtn onClick={onClose} />
        {children}
      </MobileMenuContainer>
    </MobileMenuOverlay>,
    document.body
  );
};
