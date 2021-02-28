import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { Button } from "../../globalStyles";
import { colors } from "../../shared";
import { navBarItems } from "./Data";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: colors.mainBlue }}>
        <Nav>
          <NavbarContainer button={button}>
            <NavLogo to="/" onClick={closeMobileMenu}>
              {/* <NavIcon /> */}
              {/* HAVAL */}
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {navBarItems.map((item) => (
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to={item.route}>
                      <Button primary={item.primary}>{item.name}</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to={item.route}>
                      <Button fontBig primary>
                        {item.name}
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              ))}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
