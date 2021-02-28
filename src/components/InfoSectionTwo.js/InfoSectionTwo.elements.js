import styled from "styled-components";

import { colors } from "../../shared";

const { mainBlack, mainBlue, bgWhite, mainGrey } = colors;

export const InfoSec = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? bgWhite : mainBlack)};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  height: 700px;
  max-height: 800px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 100px;
  padding-bottom: 60px;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const SideWrapper = styled.div`
    display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   @media screen and (max-width: 960px) {
    justify-content: center;
    width: 100%;
   }
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopline }) => (lightTopline ? bgWhite : mainBlue)};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  margin-bottom: 4rem;
  font-size: 3rem;
  line-height: 1.3;
  color: ${({ lightText }) => (lightText ? bgWhite : mainBlack)};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 34px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? mainGrey : mainBlack)};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  width: 200px;
  max-width: 100%;
  margin-bottom: 35px;
  font-size: 1.4rem;
  line-height: 26px;
  text-align: center;
  color: ${({ lightTextDesc }) => (lightTextDesc ? mainBlue : mainBlack)};

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  height: 100%;
  align-content: flex-start;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

  @media screen and (max-width: 960px) {
  }
`;
