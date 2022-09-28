import React from "react";
import styled from "styled-components";
import MovieImg from "../Components/MovieImg";
import { MovieMiniatureType } from "./MovieMiniature";

const Left = styled.div``;
const Right = styled.div``;
const Width = styled.div`
  display: flex;
`;

interface DetailedViewProps {
  movie: MovieMiniatureType;
}

const DetailedView = (props: DetailedViewProps) => {
  return (
    <Width>
      <Left>
        <div>{props.movie.original_title}</div>
        <div>Résumé</div>
        <div>note</div>
      </Left>
      <Right>
        <MovieImg path={props.movie["poster_path"]} />
      </Right>
    </Width>
  );
};

export default DetailedView;
