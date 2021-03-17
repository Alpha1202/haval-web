import React from "react";

import { Modal } from "../../Modal";
import ModalCard from "../ModalCard";
import Input from "../Input";
import { navBarItems } from "../Navbar/Data";
import {
  ModalFooterWrapper,
  ModalFooterLink,
  ModalFooter,
  HeaderWrapper,
} from "../Signup/Signup.elements";
import { Button } from "../../globalStyles";

const Login = () => {
  return (
    <Modal>
      <ModalCard>
        <HeaderWrapper>Log in to your Haval account</HeaderWrapper>

        {navBarItems[1].obj
          .filter((item) => item.size === "full")
          .map((itm) => (
            <Input {...itm} />
          ))}
        {navBarItems[1].obj
          .filter((item) => item.type === "button")
          .map((itm) => (
            <Button primary width="100%" height="3.8rem">
              {" "}
              {itm.placeholder}
            </Button>
          ))}
        <ModalFooterWrapper>
          <ModalFooter>
            <ModalFooterLink>Forgot Password?</ModalFooterLink>
          </ModalFooter>
        </ModalFooterWrapper>
      </ModalCard>
    </Modal>
  );
};

export default Login;
