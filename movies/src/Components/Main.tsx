import React, { ReactNode } from "react";
import styled from "styled-components";

const Div = styled("div")<{ isLightTheme: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(p) => (p.isLightTheme ? "#FFFFFF" : "#4B5563")};
  color: ${(p) => (p.isLightTheme ? "black" : "white")};
`;
const Width = styled.div`
  width: 45em;
`;

interface mainProps {
  children: ReactNode;
  isThemeLight: boolean;
}

const Main = (props: mainProps) => (
  <Div isLightTheme={props.isThemeLight}>
    <Width>{props.children}</Width>
  </Div>
);

export default Main;
