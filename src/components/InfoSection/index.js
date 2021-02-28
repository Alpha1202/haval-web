import React from "react";
import { Link } from "react-router-dom";

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
  Text
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  img1,
  img2,
  imgText,
  alt1,
  alt2,
  start,
  bordered
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/">
                  <Button big fontBig bordered={bordered}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
                <SideWrapper>
                    <Text>{imgText}</Text>
                    <ImgWrapper start={start}>
                <Img src={img1} alt={alt1} />
                <Img src={img2} alt={alt2} />
              </ImgWrapper>
                </SideWrapper>
              
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
