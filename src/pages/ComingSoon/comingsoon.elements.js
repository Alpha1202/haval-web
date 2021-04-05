import styled from "styled-components";

import { colors } from "../../shared";

const { grey, mainGrey, mainBlue, bgWhite } = colors;

export const WaitlistContainer = styled.div`
  background: ${grey};
  padding: 2.5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 25%;
`;

export const TitleHeader = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const TitleText = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

export const InputSectionWrapper = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 35%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (min-width: 336px) and (max-width: 768px) {
    width: 80%;
  };
  @media screen and (min-width: 769px) and (max-width: 1100px) {
    width: 60%;
  };
`;

export const InputWrapper = styled.div`
  width: 100%;
  font-style: ${({ error }) => (error) ? `italic`: `normal`};
  color: ${({ error }) => (error) ? `red`: ''}
`;

export const InputRadioWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 1100px) {
    width: 100%;
    /* color: ${({ primary }) => (primary ? bgWhite : mainBlue)};
    align-items: center;
    justify-content: center; */
  } ;
`;

export const InputRadio = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ click }) => ( click ? mainBlue : mainGrey)};
  margin-right: 15px;
  
  cursor: pointer;
`;

export const ModalContainer = styled.div`

`

export const ModalCardWrapper = styled.div`
background-color: ${bgWhite};
width: 40%;
height: 70%;
border-radius: 20px;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const ModalCardBoldText = styled.h3`
  margin-bottom: 2rem;
  font-size: 2rem;
`

export const ModalCardText = styled.p`
font-size: 1.2rem;
`

export const EmojiWrapper = styled.div`
font-size: 5rem;
margin-bottom: 2rem
`
