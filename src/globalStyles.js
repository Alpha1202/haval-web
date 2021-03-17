import styled, { createGlobalStyle } from 'styled-components';

import { colors, sizes } from './shared';

const { bgWhite, mainBlue, mainGrey } = colors;
const { small, xMedium, medium, large } = sizes;

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary, }) => (primary ? mainBlue : bgWhite)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? `${small} ${large}` : `${small} ${xMedium}`)};
  color: ${({ primary }) => (primary ? bgWhite : mainBlue)};
  font-size: ${({ fontBig }) => (fontBig ? `${xMedium}` : `${medium}`)};
  outline: none;
  border: ${({ bordered }) => (bordered ? `2px solid ${mainBlue}` : 'none')};
  width: ${({ width }) => (width ? `${width}` : '')};
  height: ${({ height }) => (height ? `${height}` : '')};
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? bgWhite : mainBlue)};
    color: ${({ primary }) => (primary ? mainBlue : bgWhite)};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  } ;
`;

export const Button2 = styled.button`
  /* border-radius: 4px; */
  /* background: ${({ active }) => (active ? mainBlue : bgWhite)}; */
  background: ${({ primary, }) => (primary ? mainBlue : bgWhite)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? `${small} ${large}` : `${small} ${xMedium}`)};
  color: ${({ active }) => (active ? mainBlue : mainGrey )};
  font-size: ${({ fontBig }) => (fontBig ? `${xMedium}` : `${medium}`)};
  outline: none;
  border: none;
  width: 100%;
  /* width: ${({ width }) => (width ? `${width}` : '')}; */
  height: ${({ height }) => (height ? `${height}` : '')};
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* background: red; */
  /* &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? bgWhite : mainBlue)};
    color: ${({ primary }) => (primary ? mainBlue : bgWhite)};
  } */

  @media screen and (max-width: 960px) {
    width: 100%;
    color: ${({ primary }) => (primary ? bgWhite : mainBlue)};
    align-items: center;
    justify-content: center;
  } ;
`;

export default GlobalStyle;
