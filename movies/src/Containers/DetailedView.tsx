import React from "react";
import styled from "styled-components";
import { MovieMiniatureType } from "./MovieMiniature";

const Left = styled.div``;
const Right = styled.div``;

interface DetailedViewProps {
  movie: MovieMiniatureType;
}

const DetailedView = (props: DetailedViewProps) => {
  return (
    <div>
      <Left>
        <div>{props.movie.original_title}</div>
        <div>Résumé</div>
        <div>note</div>
      </Left>
      <Right>
        <div>
          <img />
        </div>
      </Right>
    </div>
  );
};

export default DetailedView;
