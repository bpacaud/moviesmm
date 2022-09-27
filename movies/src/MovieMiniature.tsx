import React, { useEffect } from "react";

interface MovieMiniatureProps {
  onClick: (id: number) => void;
  movie: { original_title: string; poster_path: string };
}

const MovieMiniature = (props: MovieMiniatureProps) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie["poster_path"]}`}
      />
    </div>
  );
};
export default MovieMiniature;
