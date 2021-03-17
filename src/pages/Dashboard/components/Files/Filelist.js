import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { ImBin } from "react-icons/im";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { toast } from "react-toastify";

import {
  FilesContainer,
  FileListWraper,
  FileListItems,
  FileListIconWrapper,
  FileListIconContainer,
  ModalBtnWrapper,
} from "./files.elements";
import FileEdit from "./FileEdit";
import { Button } from "../../../../globalStyles";
import { Modal } from "../../../../Modal";
import ModalCard from "../../../../components/ModalCard";
import { colors } from "../../../../shared";
import { files } from "../../Data";

const options = ["one", "two", "three"];
const defaultOption = options[0];

const Filelist = () => {
  const [mobile, setMobile] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [showEditPage, setShowEditPage] = useState(false);
  const [selectedFile, setSelectedFile] = useState({});

  const toggleDropdown = () => {
    setShowDropDown(!showDropdown);
  };

  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const handleDelete = () => {
    setShowModal(false);
    toast.success(`You just removed ${selectedTitle} from Haval`);
  };

  useEffect(() => {
    showMobile();
    setShowEditPage(false);
    setSelectedTitle("");
  }, []);

  const AlertDisplay = () => {
    return (
      <Modal>
        <ModalCard noHeight>
          {`Are you sure you want to delete "${selectedTitle}" from Haval`}
          <ModalBtnWrapper>
            <Button onClick={handleDelete} width="45%" primary>
              Delete
            </Button>
            <Button onClick={() => setShowModal(false)} width="45%">
              Cancel
            </Button>
          </ModalBtnWrapper>
        </ModalCard>
      </Modal>
    );
  };

  const handleClick = (type, file) => {
    setSelectedTitle(file.title);
    if (type === "delete") {
      setShowModal(true);
    } else if (type === "edit") {
        setSelectedFile(file)
      setShowEditPage(true);
      
    }
  };

  const handleBack = () => {
    setSelectedTitle('');
    setSelectedFile('')
    setShowEditPage(false);
  }

  window.addEventListener("resize", showMobile);

  return (
    <>
      <IconContext.Provider value={{ color: colors.mainBlue }}>
        <FilesContainer>
          {showEditPage ? (
            <FileEdit file={selectedFile} handleBack={handleBack}  />
          ) : (
            files.map((file) => (
              <FileListWraper>
                <FileListItems>{file.title}</FileListItems>
                <FileListItems center="center">{file.updated}</FileListItems>
                <FileListItems center="between" red>
                  {mobile ? (
                    <FileListIconWrapper>
                      <BsThreeDots onClick={toggleDropdown} />
                      {/* {showDropdown && (
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              )} */}
                    </FileListIconWrapper>
                  ) : (
                    <>
                      <FileListIconContainer
                        onClick={() => handleClick("delete", file)}
                      >
                        <ImBin />
                      </FileListIconContainer>
                      <FileListIconContainer
                        onClick={() => handleClick("edit", file)}
                      >
                        <FaRegEdit />
                      </FileListIconContainer>
                    </>
                  )}
                </FileListItems>
              </FileListWraper>
            ))
          )}
        </FilesContainer>
      </IconContext.Provider>
      {showModal && <AlertDisplay />}
    </>
  );
};

export default Filelist;
