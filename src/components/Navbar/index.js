import React from "react";
import {FaBars} from "react-icons/fa";
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

const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Signal</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="popular"
                                activeClass='active'
                                smooth={true}
                                duration={500}
                                spy={true}
                                hashSpy={true}
                                exact="true"
                                offset={-80}
                            >
                                Популярное
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="tarifs"
                                activeClass='active'
                                smooth={true}
                                duration={500}
                                spy={true}
                                hashSpy={true}
                                exact="true"
                                offset={-80}
                            >Тарифы</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="plans"
                                activeClass='active'
                                smooth={true}
                                duration={500}
                                spy={true}
                                hashSpy={true}
                                exact="true"
                                offset={-79}
                            >
                                Новости
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to=""
                                activeClass='active'
                                smooth={true}
                                duration={500}
                                spy={true}
                                hashSpy={true}
                                exact="true"
                                offset={-80}
                            >
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
