import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieImg from "../Components/MovieImg";
import { MovieMiniatureType } from "./MovieMiniature";

const Left = styled.div``;
const Right = styled.div``;
const Width = styled.div`
  display: flex;
  text-align: left;
  padding: 15px;
`;
const Title = styled.div`
  padding-bottom: 10px;
`;
const Summary = styled.div`
  padding-bottom: 10px;
  padding-right: 20px;
`;
const Average = styled.div``;

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
        <MovieImg path={props.movie["poster_path"]} />
      </Right>
    </Width>
  );
};

export default DetailedView;
