import React from "react";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  SideWrapper,
  Text,
} from "./InfoSectionTwo.elements";
import { Container } from "../../globalStyles";

const HowItWorks = ({
  lightBg,
  imgStart,
  lightTextDesc,
  description1,
  description2,
  headline,
  lightText,
  img,
  imgText,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <SideWrapper>
                <Text>{imgText}</Text>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </SideWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description1}
                </Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description2}
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default HowItWorks;
