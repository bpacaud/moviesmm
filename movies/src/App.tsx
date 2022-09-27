import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import MovieMiniature from "./MovieMiniature";
import Search from "./Search";

function App() {
  // internal states
  const [movies, setMovies] = useState([]);
  const [hasFetchedOnStart, setHasFetched] = useState(false);

  // utils
  const fetchMoviesAndStore = async () => {
    const answer = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setMovies(answer.results);
  };

  // effect on mount
  useEffect(() => {
    if (hasFetchedOnStart === false) {
      setHasFetched(true);
      fetchMoviesAndStore();
    }
  }, []);

  return (
    <div className="App">
      <Header onToggle={() => ({})} theme="light" />
      <Search onChange={() => ({})} placeHolder="Rechercher un film..." />
      <div>
        {movies.map((movie) => (
          <MovieMiniature
            onClick={() => ({})}
            movie={movie}
            key={movie["id"]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
