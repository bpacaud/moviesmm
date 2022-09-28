import React from "react";
import styled from "styled-components";

const Div = styled.div`
  @media (min-width: 468px) and (max-width: 767px) {
    height: 13em;
  }
  @media (min-width: 768px) {
    height: 10em;
  }
  @media (max-width: 467px) {
    height: 15em;
  }
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
