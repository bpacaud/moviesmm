import React from "react";
import styled from "styled-components";

const Div = styled.div`
  color: white;
  background-color: #60a5fa;
`;

interface HeaderProps {
  theme: string;
  onToggle: (toggled: boolean) => void;
}

const Header = (props: HeaderProps) => <Div>Movies</Div>;

export default Header;
