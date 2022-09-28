import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieImg from "../Components/MovieImg";
import { MovieMiniatureType } from "./MovieMiniature";

const Left = styled.div``;
const Right = styled.div`
  @media (max-width: 467px) {
    display: flex;
    justify-content: center;
  }
`;
const Width = styled.div`
  text-align: left;
  padding: 15px;
  @media (min-width: 468px) {
    display: flex;
  }
`;
const Title = styled.div`
  padding-bottom: 10px;
`;
const Summary = styled.div`
  padding-bottom: 10px;
  padding-right: 20px;
`;
const Average = styled.div`
  padding-bottom: 10px;
`;

interface DetailedViewProps {
  movie: MovieMiniatureType;
}

const DetailedView = (props: DetailedViewProps) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [details, setDetails] = useState({ overview: "", vote_average: 0 });

  // utils
  const fetchMovieDetails = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const answer = await fetch(url).then((res) => res.json());
    setDetails(answer);
  };

  // fetch data
  useEffect(() => {
    if (hasFetched === false) {
      fetchMovieDetails(props.movie.id);
      setHasFetched(true);
    }
  }, []);

  return (
    <Width>
      <Left>
        <Title>{props.movie.original_title}</Title>
        <Summary>{details.overview}</Summary>
        <Average>{details.vote_average}/10</Average>
      </Left>
      <Right>
        <MovieImg path={props.movie["poster_path"]} title="" />
      </Right>
    </Width>
  );
};

export default DetailedView;
