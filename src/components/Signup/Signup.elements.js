import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../shared";

const { mainBlack } = colors;

export const HeaderWrapper = styled.div`
  padding: 0.4rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const SignupComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`;

export const ModalFooterWrapper = styled.div`
  max-width: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModalFooterLink = styled(Link)`
  text-decoration: none;
  color: ${mainBlack};
  font-weight: bold;
`;

export const ModalFooter = styled.div`
  padding: 2px;
  font-size: 0.9rem;
`;

export const BtnWrapper = styled.div`
 width: 100%
`
