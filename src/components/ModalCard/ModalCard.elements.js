import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { colors } from "../../shared";

const { secondaryGrey } = colors;

export const ModalContainer = styled.div`
  background: transparent;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 1rem 2.5rem;
  position: relative;
`;

export const ModalCardWrapper = styled.div`
  background: ${secondaryGrey};
  height: ${({ noHeight }) => (noHeight ? "" : "95%")};
  width: 100%;
  box-shadow: 0 6px 20px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 3rem;
`;

export const ModalCloseBtn = styled(FaTimes)`
  display: ${({ noHeight }) => noHeight && "none"};
  position: absolute;
  font-size: 2rem;
  font-weight: normal;
  top: 0;
  right: 0;
`;
