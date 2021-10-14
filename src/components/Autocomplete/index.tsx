import * as React from "react";
import clsx from "clsx";

import Input from "../Input";
import clickAwayListener from "../../hooks/clickAwayListener";

import "./Autocomplete.scss";

interface AutocompleteProps<T> {
  data: T[];
  name: string;
  value: T;
  onChange(value: T): void;
}

function Autocomplete<T extends { id: number; name: string }>(
  props: AutocompleteProps<T>
): JSX.Element {
  const listRef = React.useRef(null);

  const { data, value, name, onChange } = props;

  const [inputValue, setInputValue] = React.useState(value?.name);
  const [filteredData, setFilteredData] = React.useState(data);

  const [isShowSuggestions, toggleIsShowSuggestions] = React.useState(false);

  clickAwayListener(listRef, () => toggleIsShowSuggestions(false));

  const onFocus = () => {
    toggleIsShowSuggestions(true);
  };

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: _value } = event.target;
    setInputValue(_value);

    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(_value.toLowerCase())
    );

    setFilteredData(filteredSuggestions);
    toggleIsShowSuggestions(true);
  };

  const onSelectSuggestion = (index: number) => {
    onChange(filteredData[index]);
    setInputValue(filteredData[index].name);
    toggleIsShowSuggestions(false);
  };

  return (
    <div className="suggestions">
      <Input
        name={name}
        placeholder="Name Surname"
        value={inputValue}
        onChange={onChangeHandle}
        onFocus={onFocus}
      />
      {isShowSuggestions && (
        <ul className="suggestions_list" ref={listRef}>
          {filteredData.map((elem, index) => (
            <li
              key={elem.id}
              className={clsx("suggestions_list__elem")}
              onClick={() => onSelectSuggestion(index)}
            >
              {elem.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
