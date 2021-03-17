import styled from "styled-components";

import { colors } from "../../shared";

const { secondaryGrey, mainBlack } = colors;

export const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  background: ${({ small }) => (small) ? 'transparent' : `${secondaryGrey}`} ;
  padding: ${({ small }) => (small) ? '0.5rem 1rem 0.5rem 2rem' : '1rem 0 1rem 2rem'};
  font-size: ${({ small }) => (small) ? '.9rem' : `1.3rem`} ;
  border: 2px solid ${mainBlack};
`;
