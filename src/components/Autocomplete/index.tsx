import * as React from "react";
import clsx from "clsx";

import Input from "../Input";
import clickAwayListener from "../../hooks/clickAwayListener";

import "./Autocomplete.scss";

interface AutocompleteProps<T> {
  data: T[];
}

function Autocomplete<T extends { id: number; name: string }>(
  props: AutocompleteProps<T>
): JSX.Element {
  const listRef = React.useRef(null);

  const { data } = props;

  const [inputValue, setInputValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data);

  const [isShowSuggestions, toggleIsShowSuggestions] = React.useState(false);

  clickAwayListener(listRef, () => toggleIsShowSuggestions(false));

  const onFocus = () => {
    toggleIsShowSuggestions(true);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);

    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredSuggestions);
    toggleIsShowSuggestions(true);
  };

  const onSelectSuggestion = (index: number) => {
    setInputValue(filteredData[index].name);
    toggleIsShowSuggestions(false);
  };

  return (
    <div className="suggestions">
      <Input placeholder="Name Surname" value={inputValue} onChange={onChange} onFocus={onFocus} />
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
