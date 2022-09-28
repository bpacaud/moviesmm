import React, { ReactNode } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Width = styled.div`
  width: 45em;
`;

interface mainProps {
  children: ReactNode;
}

const Main = (props: mainProps) => (
  <Div>
    <Width>{props.children}</Width>
  </Div>
);

export default Main;
