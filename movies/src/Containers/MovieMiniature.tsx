import React, { useEffect } from "react";
import styled from "styled-components";

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
    <Frame>
      <img
        onClick={(event) => props.onClick(props.movie)}
        src={`https://image.tmdb.org/t/p/w500/${props.movie["poster_path"]}`}
      />
    </Frame>
  );
};
export default MovieMiniature;
