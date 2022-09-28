import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieImg from "../Components/MovieImg";

const Frame = styled.div`
  cursor: pointer;
`;

export interface MovieMiniatureType {
  original_title: string;
  poster_path: string;
  id: number;
}

interface MovieMiniatureProps {
  onClick: (movie: MovieMiniatureType) => void;
  movie: MovieMiniatureType;
}

const MovieMiniature = (props: MovieMiniatureProps) => {
  return (
    <Frame onClick={(event) => props.onClick(props.movie)}>
      <MovieImg
        path={props.movie["poster_path"]}
        title={props.movie["original_title"]}
      />
    </Frame>
  );
};
export default MovieMiniature;
