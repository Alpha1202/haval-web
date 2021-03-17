import React from "react";

import {
  ModalContainer,
  ModalCardWrapper,
  ModalCloseBtn,
} from "./ModalCard.elements";

const ModalCard = ({ children, onClick, noHeight }) => {
  return (
    <ModalContainer >
      <ModalCloseBtn noHeight={noHeight} onClick={onClick} />
      <ModalCardWrapper noHeight={noHeight}>{children}</ModalCardWrapper>
    </ModalContainer>
  );
};

export default ModalCard;
