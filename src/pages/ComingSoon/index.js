import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../../Modal";
import { InputComponent2, SelectDropDown } from "../../components/Input";
import {
  HeaderWrapper,
  WaitlistContainer,
  TitleHeader,
  TitleText,
  InputSectionWrapper,
  InputWrapper,
  InputRadioWrapper,
  InputRadio,
  ModalCardWrapper,
  ModalCardBoldText,
  ModalCardText,
  EmojiWrapper,
} from "./comingsoon.elements";
import { inputData } from "./data";
import { Button } from "../../globalStyles";
import { regex } from "../../services/formValidation";
import { newWaitingListEntry } from "../../actions/waitinglist";

const ComingSoon = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const { payload } = useSelector((state) => state.waitinglist);

  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const [userDataObj, setUserDataObj] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    category: "",
    organization: "",
  });

  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
  });

  // const validateInput = (value, reg, error, obj) => {
  // 	const res = reg.test(value);
  // 	res ?  setErrors( { ...obj, [error]: false})
  // 		: setErrors( { ...obj, [error]: true});
  // }

  const checkValueForSubmit = (obj, error) => {
    let newState = { ...error };
    for (let key in obj) {
      if (obj[key] === "" || !obj[key]) {
        newState[key] = true;
      }
    }
    setErrors(newState);
    return newState;
  };

  const checkErrForSubmit = (obj) => {
    const arr = Object.values(obj);
    if (arr.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return arr.reduce(reducer);
    }
  };

  const handleSubmit = async () => {
    let res = true;

    const err = checkValueForSubmit(userDataObj, errors);
    res = checkErrForSubmit(err);

    if (!res) {
      const response = await dispatch(newWaitingListEntry(userDataObj));
      console.log({ response })
      if (response === 201) {
        setModal(true);
      } else {
        setModal(false);
      }
    }
  };

  const closeModal = () => {
    setUserDataObj({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      category: "",
      organization: "",
    });
    setErrors({
      firstname: false,
      lastname: false,
      email: false,
      phone: false,
    });
    setModal(false);
  };

  return (
    <WaitlistContainer>
      <HeaderWrapper>
        <TitleHeader>Haval</TitleHeader>
        <TitleText>A better way to sell music and books</TitleText>
        <TitleText>Join our waiting list today</TitleText>
      </HeaderWrapper>
      <InputSectionWrapper>
        {inputData.map((item) => {
          if (item?.type === "input") {
            return (
              <InputWrapper error={errors[item.input]}>
                {item.label}:
                <InputComponent2
                  // onChangeText={(value) => {
                  //   this.changeValue({ values: { ...this.state.values, lastname: value } });
                  // }}
                  error={errors[item.input]}
                  // onBlur={() => validateInput(userDataObj[item.input], regex[item.validation], item.input, errors)}
                  onChange={(e) =>
                    setUserDataObj({
                      ...userDataObj,
                      [item.input]: e.target.value,
                    })
                  }
                  value={userDataObj[item.input]}
                />
              </InputWrapper>
            );
          } else if (item?.type === "dropdown") {
            return (
              <InputWrapper>
                {item.label}:
                <SelectDropDown
                  onChange={({ value }) =>
                    setUserDataObj({ ...userDataObj, [item.input]: value })
                  }
                  value={userDataObj[item.input].value}
                  options={item.items}
                />
              </InputWrapper>
            );
          } else if (item?.type === "radio") {
            return (
              <InputRadioWrapper>
                <InputRadio click={click} onClick={() => setClick(!click)} />
                {item?.label}
              </InputRadioWrapper>
            );
          } else if (item?.type === "button") {
            return (
              <Button onClick={handleSubmit} primary width="100%">
               {loading ? 'Sending...' : `${item.label}`}
              </Button>
            );
          }
        })}
      </InputSectionWrapper>
      {modal && (
        <Modal onClick={closeModal}>
          <ModalCardWrapper>
            <ModalCardBoldText>Thank you for Signing up!</ModalCardBoldText>
            <EmojiWrapper>👍</EmojiWrapper>
            <ModalCardText>We will keep you in loop</ModalCardText>
          </ModalCardWrapper>
        </Modal>
      )}
    </WaitlistContainer>
  );
};

export default ComingSoon;
