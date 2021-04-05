import React from "react";

import { Input, Input2, Dropdown } from "./Input.elements";

const InputComponent = ({ placeholder, name, size, type, small }) => {
  return (
    <Input name={name} small={small} size={size} type={type} placeholder={placeholder}/>
  );
};

export default InputComponent;

export const InputComponent2 = ({ onChange, onBlur, error,  value, placeholder, name, size, type, small }) => {
  return (
    <Input2 onChange={onChange} onBlur={onBlur} error={error} value={value} name={name} small={small} size={size} type={type} placeholder={placeholder}/>
  );
};

export const SelectDropDown = ({ value, onChange, options, className }) => {
  return <Dropdown value={value} onChange={onChange} options={options} className={className} />;
};
