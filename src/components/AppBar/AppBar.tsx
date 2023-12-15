import React, { FC, useEffect, useState } from "react";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import { Header, HomeLink, OpenMenuBtn } from "./AppBar.styled";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { StyleSheetManager } from "styled-components";
import { logIn } from "../../redux/auth/operations";

const shouldForwardProp = (prop: string) => prop !== "screenWidth";

export const AppBar: FC = (): JSX.Element => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const { isLoggedIn } = useAuth();

  const openMobileMenu = (): void => setMobileMenuOpen(true);
  const closeMobileMenu = (): void => setMobileMenuOpen(false);

  useEffect(() => {
    const handleResize = (): void => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Header screenWidth={screenWidth}>
        {screenWidth < 768 && <OpenMenuBtn onClick={openMobileMenu} />}

        {screenWidth < 768 ? (
          <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
            <HomeLink to="/" screenWidth={screenWidth}>
              Home
            </HomeLink>
            {isLoggedIn ? (
              <UserMenu screenWidth={screenWidth} />
            ) : (
              <AuthNav screenWidth={screenWidth} />
            )}
          </MobileMenu>
        ) : (
          <>
            <HomeLink to="/" screenWidth={screenWidth}>
              Home
            </HomeLink>
            {isLoggedIn ? (
              <UserMenu screenWidth={screenWidth} />
            ) : (
              <AuthNav screenWidth={screenWidth} />
            )}
          </>
        )}
      </Header>
    </StyleSheetManager>
  );
};
