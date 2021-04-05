import styled from "styled-components";
import Select from 'react-select';

import { colors } from "../../shared";

const { secondaryGrey, mainBlack, grey } = colors;

export const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  background: ${({ small }) => (small) ? 'transparent' : `${secondaryGrey}`} ;
  padding: ${({ small }) => (small) ? '0.5rem 1rem 0.5rem 2rem' : '1rem 0 1rem 2rem'};
  font-size: ${({ small }) => (small) ? '.9rem' : `1.3rem`} ;
  border: 2px solid ${mainBlack};
`;


export const Input2 = styled.input`
  border-radius: 5px;
  width: 100%;
  background: ${grey};
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border: ${({ error }) => (error) ? `2px solid red` : `2px solid ${mainBlack}`};
  margin: 0.8rem 0rem 1.8rem 0rem;
`;


export const Dropdown = styled(Select)`
border-radius: 5px;
  width: 100%;
  background: ${grey};
  /* font-size: 1.3rem; */
  border: 2px solid ${mainBlack};
  margin: 0.8rem 0rem 1.8rem 0rem;
  
`