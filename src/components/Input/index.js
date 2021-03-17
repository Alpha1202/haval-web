import React from "react";

import { Input } from "./Input.elements";

const InputComponent = ({ placeholder, name, size, type, small }) => {
  return (
    <Input name={name} small={small} size={size} type={type} placeholder={placeholder} />
  );
};

export default InputComponent;
