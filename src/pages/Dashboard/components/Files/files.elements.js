import styled from "styled-components";
import { BiImageAdd } from "react-icons/bi";
import { BsFillForwardFill } from "react-icons/bs";

import { colors } from "../../../../shared";

const { mainGrey, mainBlack } = colors;

export const FilesContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  flex-direction: column;
`;

export const FileListWraper = styled.div`
  width: 100%;
  border: 1px solid ${mainGrey};
  padding: 1.5rem 1.5rem 1rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1);
  transition: all 200ms ease-in;
  transform: scale(0.999);

  &:hover {
    box-shadow: 0px 0px 5px #000000;
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.5);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.5);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.5);
    transition: all 200ms ease-in;
    transform: scale(1);
  }
`;

export const FileListItems = styled.div`
  width: 40%;
  align-items: center;
  justify-content: ${({ center }) =>
    center === "center"
      ? "center"
      : center === "between"
      ? "space-evenly"
      : ""};
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 640px) {
    display: ${({ center }) => (center === "center" ? "none" : "flex")};
  } ;
`;

export const FileListIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileListIconContainer = styled.div`
  padding: 1rem 1rem;

  &:hover {
    box-shadow: 0px 0px 5px #000000;
    border-radius: 5px;
  }
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const FileEditContainer = styled.div`
  width: 100%;
  padding: 0rem 5rem;
  /* background: pink; */
`;

export const FileEditHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FileEditHeader = styled.h4`
  text-transform: capitalize;
`;

export const FileEditHeaderTextWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;

export const FileEditHeaderText = styled.p`
  margin-left: 10px;
  font-size: 0.7rem;
  font-style: italic;
  color: ${mainGrey};
`;

export const FileEditHeaderIconWrapper = styled.div`
  font-size: 3rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 300ms ease-in;

  &:hover {
    transform: scale(1.5);
  }
`;

export const FileEditForwardIcon = styled(BsFillForwardFill)``;

export const FileEditSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.4rem;
  height: 100vh;
`;

export const FileEditSectionOne = styled.div`
  width: 68%;
  height: 80%;
`;

export const FileEditSectionTwo = styled.div`
  width: 30%;
  height: 80%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const FileEditInputWrapper = styled.div`
  text-transform: capitalize;
  margin-top: 2rem;
`;

export const FileEditInputLabel = styled.div`
  margin-bottom: 0.9rem;
`;

export const FileEditButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FileEditImageWrapper = styled.div`
  border: 2px solid;
  height: 65%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const FileEditImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const FileEditImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const FileEditImageButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const FileEditImageIcon = styled(BiImageAdd)`
  font-size: 3rem;
  color: ${({ isDragging }) => (isDragging ? "red" : `${mainBlack}`)};

  transform: scale(1);
  transition: all 300ms ease-in;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const FileEditImageBoldText = styled.div`
  margin: 1rem 0rem;
  text-align: center;
`;

export const FileEditFooter = styled.div`
  margin: 4rem auto;
  width: 60%;
  display: flex;
  text-align: center;
`;
