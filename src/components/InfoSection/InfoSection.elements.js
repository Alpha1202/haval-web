import styled from "styled-components";

import { colors } from "../../shared";

const { mainBlack, mainBlue, bgWhite } = colors;

export const InfoSec = styled.div`
  color: #fff;
  padding: 80px 0;
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
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  height: 430px;
  max-height: 500px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const SideWrapper = styled.div`
    height: 100%;
    display: flex;
   justify-content: flex-end;
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
  color: ${({ lightText }) => (lightText ? mainBlue : mainBlack)};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 2rem;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? mainBlue : mainBlack)};
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
