import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: -5px;
  top: 0.34em;
  cursor: pointer;
`;
const Width = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const Input = styled.input`
  width: 100%;
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
    <Width>
      <Input
        type="text"
        placeholder={props.placeHolder}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></Input>
      <Button
        onClick={() => {
          setValue("");
        }}
      >
        X
      </Button>
    </Width>
  );
};

export default Search;
