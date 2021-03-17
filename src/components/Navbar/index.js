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
  NavBtnWrapper,
  NavBtnIconWrapper,
  NavProfileWrapper,
  NavProfile,
} from "./Navbar.elements";
import { Button, Button2 } from "../../globalStyles";
import { colors } from "../../shared";
import { navBarItems } from "./Data";

import SignUp from "../Signup";
import Login from "../Login";

const Navbar = ({ type, dashboardNavData, handleTabToggle }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const authObj = {
    signup: setShowSignupModal,
    login: setShowLoginModal,
  };

  const showModal = (type) => {
    authObj[type](true);
  };

  const closeModal = (type) => {
    authObj[type](false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleTabClick = (item, index) => {
    setActiveIndex(index);
    handleTabToggle(item.name);
  };

  useEffect(() => {
    showButton();
    setActiveIndex(0);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: colors.mainBlue }}>
        <Nav>
          <NavbarContainer button={button}>
            {type === "navbar" && (
              <NavLogo to="/" onClick={closeMobileMenu}>
                {/* <NavIcon /> */}
                {/* HAVAL */}
              </NavLogo>
            )}
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu
              fullwidth={type === "dashboardNav" ? true : false}
              onClick={handleClick}
              click={click}
            >
              {type === "navbar" &&
                navBarItems.map((item) => (
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink onClick={() => showModal(item.type)}>
                        {/* <NavBtnLink to={item.route}> */}
                        <Button primary={item.primary}>{item.name}</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink onClick={() => showModal(item.type)}>
                        {/* <NavBtnLink to={item.route}> */}
                        <Button fontBig primary>
                          {item.name}
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                ))}

              {type === "dashboardNav" && (
                <NavBtnWrapper>
                  {dashboardNavData.map((item, index) => {
                    return (
                      <NavItemBtn>
                        {button ? (
                          <NavBtnLink
                            onClick={() => handleTabClick(item, index)}
                          >
                            <NavBtnIconWrapper>
                              {item.iconName}
                            </NavBtnIconWrapper>
                            {item.name !== "Profile" ? (
                              <Button2
                                width="100%"
                                active={index === activeIndex}
                              >
                                {item.name}
                              </Button2>
                            ) : (
                              <NavProfileWrapper>
                                <NavProfile src="https://i.pravatar.cc/300" />
                              </NavProfileWrapper>
                            )}
                          </NavBtnLink>
                        ) : (
                          <NavBtnLink
                            onClick={() => handleTabClick(item, index)}
                          >
                            <Button2 fontBig primary>
                              {item.name}
                            </Button2>
                          </NavBtnLink>
                        )}
                      </NavItemBtn>
                    );
                  })}
                </NavBtnWrapper>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {showSignupModal && <SignUp closeModal={closeModal} />}
      {showLoginModal && <Login />}
    </>
  );
};

export default Navbar;
