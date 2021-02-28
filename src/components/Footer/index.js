import React from "react";

import { footerData } from "./Data";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterTitleWrapper,
  FooterLinksItemsWrapper,
  FooterTitleIcon,
  FooterTitleLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterTitleWrapper>
            <FooterTitleIcon />
            <FooterTitleLink to="/">Haval</FooterTitleLink>
          </FooterTitleWrapper>
          <FooterLinksItemsWrapper>
            {footerData.map((data) => (
              <FooterLinkItems right={data.right}>
                <FooterLinkTitle>{data.header}</FooterLinkTitle>
                {data.items.map((item) => (
                  <FooterLink to={item.link}>{item.name}</FooterLink>
                ))}
              </FooterLinkItems>
            ))}
          </FooterLinksItemsWrapper>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
