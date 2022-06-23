import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Signal</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="popular"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Популярное
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tarifs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Тарифы</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="plans"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Новости
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="why-us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Сервисы
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/registration">
                Регистрация
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Войти</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
