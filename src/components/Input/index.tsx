import * as React from "react";

import "./Input.scss";

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(): void;
}

const defaultProps = {
  type: "text",
  name: "",
  value: "",
  placeholder: "",
  onChange: () => {
    // do nothing
  },
  onFocus: () => {
    // do nothing
  },
};

const Input: React.FC<InputProps> = (props) => {
  const [inputValue, setInputValue] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <input
      value={inputValue}
      className="input"
      {...props}
      onChange={(event) => {
        if (props.onChange) {
          props.onChange(event);
        } else {
          onChange(event);
        }
      }}
    />
  );
};

Input.defaultProps = defaultProps;

export default Input;
