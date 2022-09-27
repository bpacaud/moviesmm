import React from "react";
import styled from "styled-components";

const Width = styled.div`
  color: white;
  background-color: #60a5fa;
  display: flex;
`;
const Side = styled.div`
  width: 2em;
`;
const Center = styled.div`
  flex: 1;
`;
const Back = styled.div`
  width: 2em;
  cursor: pointer;
`;

interface HeaderProps {
  theme: string;
  onToggle: (toggled: boolean) => void;
  isBack: boolean;
  onClickBack: () => void;
}

const Header = (props: HeaderProps) => (
  <Width>
    {props.isBack ? (
      <Back onClick={props.onClickBack}>&lt;</Back>
    ) : (
      <Side></Side>
    )}
    <Center>Movies</Center>
    <Side></Side>
  </Width>
);

export default Header;
