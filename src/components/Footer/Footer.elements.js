import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../shared";
import { GoPrimitiveDot } from "react-icons/go";

const { mainBlack, mainBlue } = colors;

export const FooterContainer = styled.div`
  background: ${mainBlack};
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  padding: 2rem 0 2rem 0;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FooterTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 50%;
  padding: 0 0 0 2rem;

  @media screen and (max-width: 420px) {
    width: 50%;
    margin: 0 auto;
  }
  @media screen and (min-width: 421px) and (max-width: 960px) {
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterTitleIcon = styled(GoPrimitiveDot)`
  color: ${mainBlue};
  font-size: 2rem;
  margin-right: 0.7rem;
`;

export const FooterTitleLink = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
`;

export const FooterLinksItemsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 420px) {
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  @media screen and (min-width: 421px) and (max-width: 960px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-self: center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  color: #fff;

  @media screen and (max-width: 420px) {
    width: 100%;
    align-items: center;
    margin: 20px 0;
  }
  @media screen and (min-width: 421px) and (max-width: 960px) {
    width: 100%;
    padding: 20px 0 20px 0;
    margin-top: 20px;
    align-items: ${({ right }) => (right ? "flex-end" : "flex-start")};
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: ${mainBlue};
  font-size: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: ${mainBlue};
    transition: 0.3s ease-out;
  }
`;
