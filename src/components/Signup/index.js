import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Modal } from "../../Modal";
import ModalCard from "../ModalCard";
import Input from "../Input";
import { navBarItems } from "../Navbar/Data";
import {
  SignupComponentsContainer,
  ModalFooterWrapper,
  ModalFooterLink,
  ModalFooter,
  HeaderWrapper,
  BtnWrapper,
} from "./Signup.elements";
import { Button } from "../../globalStyles";

const Signup = ({ closeModal }) => {
  const history = useHistory();
  const [signedIn, setSignedIn] = useState(false);

  const handleCloseModal = (redirect) => {
    closeModal("signup");
    redirect && history.replace("/dashboard");
  };

  return (
    <Modal>
      <ModalCard onClick={handleCloseModal}>
        <HeaderWrapper>Sign up with Haval</HeaderWrapper>

        {navBarItems[0].obj
          .filter((item) => item.size === "full")
          .map((itm) => (
            <Input {...itm} />
          ))}
        <SignupComponentsContainer>
          {navBarItems[0].obj
            .filter((item) => item.size === "half")
            .map((itm) => (
              <Input {...itm} />
            ))}
        </SignupComponentsContainer>
        {navBarItems[0].obj
          .filter((item) => item.type === "button")
          .map((itm) => (
            <BtnWrapper onClick={() => handleCloseModal("redirect")}>
              <Button primary width="100%" height="3.8rem">
                {" "}
                {itm.placeholder}
              </Button>
            </BtnWrapper>
          ))}
        <ModalFooterWrapper>
          <ModalFooter> By clicking on “sign up” you accept the </ModalFooter>
          <ModalFooter>
            <ModalFooterLink>Terms and Conditions</ModalFooterLink> of use and
            the <ModalFooterLink> Privacy Policy</ModalFooterLink>
          </ModalFooter>
        </ModalFooterWrapper>
      </ModalCard>
    </Modal>
  );
};

export default Signup;
