import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  right: 1.5em;
`;

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
    <div>
      <input
        type="text"
        placeholder={props.placeHolder}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></input>
      <Button
        onClick={() => {
          setValue("");
        }}
      >
        X
      </Button>
    </div>
  );
};

export default Search;
