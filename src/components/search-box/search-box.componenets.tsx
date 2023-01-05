import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

interface ISearchBoxPrpos extends ISearchBoxOnChangeProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxOnChangeProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxPrpos) => (
  <input
    className={`search-box ${className} `}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
