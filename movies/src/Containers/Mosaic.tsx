import React from "react";
import styled from "styled-components";
import Main from "../Components/Main";
import Search from "../Components/Search";
import MovieMiniature, { MovieMiniatureType } from "./MovieMiniature";

interface MosaicProps {
  handleSearchChange: (searchInput: string) => void;
  movies: Array<MovieMiniatureType>;
  handleClickMiniature: (movie: MovieMiniatureType) => void;
}

/* const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`; */

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: space-between;
  grid-gap: 15px;
`;

const Mosaic = (props: MosaicProps) => (
  <div>
    <Search
      onChange={props.handleSearchChange}
      placeHolder="Rechercher un film..."
    />
    <Container>
      {props.movies.map((movie) => (
        <MovieMiniature
          onClick={props.handleClickMiniature}
          movie={movie}
          key={movie["id"]}
        />
      ))}
    </Container>
  </div>
);

export default Mosaic;
