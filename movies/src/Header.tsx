import React from "react";
import styled from "styled-components";

const Width = styled("div")<{ isThemeLight: boolean }>`
  color: white;
  background-color: ${(p) => (p.isThemeLight ? "#60a5fa" : "#1F2937")};
  display: flex;
  text-align: center;
`;
const Side = styled.div`
  width: 2em;
`;
const Center = styled.div`
  flex: 1;
`;
const Button = styled.div`
  width: 2em;
  cursor: pointer;
`;

interface HeaderProps {
  isThemeLight: boolean;
  onToggle: () => void;
  isBack: boolean;
  onClickBack: () => void;
}

const Header = (props: HeaderProps) => (
  <Width isThemeLight={props.isThemeLight}>
    {props.isBack ? (
      <Button onClick={props.onClickBack}>&lt;</Button>
    ) : (
      <Side></Side>
    )}
    <Center>Movies</Center>
    <Side>
      <Button onClick={props.onToggle}>&lt;&gt;</Button>
    </Side>
  </Width>
);

export default Header;
