import React from "react";

interface SearchProps {
  onChange: (input: string) => void;
  placeHolder: string;
}

const Search = (props: SearchProps) => (
  <input type="text" placeholder={props.placeHolder}></input>
);

export default Search;
