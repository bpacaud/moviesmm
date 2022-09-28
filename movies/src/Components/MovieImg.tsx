import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 10em;
`;
const Img = styled.img`
  height: 100%;
`;

const MovieImg = (props: { path: string; title: string }) => (
  <Div>
    <Img
      src={`https://image.tmdb.org/t/p/w500/${props.path}`}
      title={props.title}
    />
  </Div>
);

export default MovieImg;
