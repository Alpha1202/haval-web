import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import ImageUploading from "react-images-uploading";

import {
  FileEditContainer,
  FileEditHeaderWrapper,
  FileEditHeader,
  FileEditHeaderTextWrapper,
  FileEditHeaderText,
  FileEditHeaderIconWrapper,
  FileEditSectionOne,
  FileEditSectionTwo,
  FileEditSection,
  FileEditInputWrapper,
  FileEditInputLabel,
  FileEditButtonWrapper,
  FileEditImageWrapper,
  FileEditImageIcon,
  FileEditImageBoldText,
  FileEditFooter,
  FileEditForwardIcon,
  FileEditImageContainer,
  FileEditImage,
  FileEditImageButtonsWrapper,
} from "./files.elements";
import { colors } from "../../../../shared";
import Input from "../../../../components/Input";
import { Button } from "../../../../globalStyles";

const { mainGrey } = colors;

const FileEdit = ({ file, handleBack }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <FileEditContainer>
      <FileEditHeaderWrapper>
        <div>
          <FileEditHeader>
            Update {file.type === "book" ? `File` : `${file.type}`} Information
          </FileEditHeader>

          <FileEditHeaderTextWrapper>
            <FaRegEdit color={mainGrey} />
            <FileEditHeaderText>
              Here you can edit the {file.type} information of your active
              upload
            </FileEditHeaderText>
          </FileEditHeaderTextWrapper>
        </div>
        <FileEditHeaderIconWrapper onClick={handleBack}>
          <FileEditForwardIcon />
        </FileEditHeaderIconWrapper>
      </FileEditHeaderWrapper>

      <FileEditSection>
        <FileEditSectionOne>
          {file.editFile.map((item) => (
            <FileEditInputWrapper>
              <FileEditInputLabel>{item.label}</FileEditInputLabel>

              <Input small placeholder={item.placeholder} />
            </FileEditInputWrapper>
          ))}
          <FileEditButtonWrapper>
            <Button big primary>
              {" "}
              update
            </Button>
          </FileEditButtonWrapper>
          <FileEditFooter>
            By Publishing, you confirm that you are complying with our Terms of
            Use and you are not infringing on anyone else’s rights
          </FileEditFooter>
        </FileEditSectionOne>

        <FileEditSectionTwo>
          <FileEditImageWrapper>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <>
                  {imageList.map((image, index) => (
                    <FileEditImageContainer key={index}>
                      <FileEditImage
                        src={image["data_url"]}
                        alt=""
                        width="100"
                      />

                      <FileEditImageButtonsWrapper>
                        <Button primary onClick={() => onImageUpdate(index)}>
                          Update
                        </Button>

                        <Button primary onClick={() => onImageRemove(index)}>
                          Remove
                        </Button>
                      </FileEditImageButtonsWrapper>
                    </FileEditImageContainer>
                  ))}

                  {images.length < 1 && (
                    <FileEditImageIcon
                      isDragging={isDragging}
                      onClick={onImageUpload}
                      {...dragProps}
                    />
                  )}
                </>
              )}
            </ImageUploading>
          </FileEditImageWrapper>

          <FileEditImageBoldText>
            {`Replace ${
              file.type === "book" ? `book cover` : `${file.type}`
            } image`}
          </FileEditImageBoldText>

          <FileEditHeaderText>
            Recommended: PNG image of 2048px X 3200px
          </FileEditHeaderText>
        </FileEditSectionTwo>
      </FileEditSection>
    </FileEditContainer>
  );
};

export default FileEdit;
