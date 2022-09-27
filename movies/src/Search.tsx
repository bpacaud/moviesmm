import React, { useEffect, useState } from "react";

interface SearchProps {
  onChange: (input: string) => void;
  placeHolder: string;
}

const Search = (props: SearchProps) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <input
      type="text"
      placeholder={props.placeHolder}
      onChange={(event) => setValue(event.target.value)}
    ></input>
  );
};

export default Search;
