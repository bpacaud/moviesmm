import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import MovieMiniature from "./MovieMiniature";
import Search from "./Search";

function App() {
  // internal states
  const [movies, setMovies] = useState([]);
  const [hasFetchedOnStart, setHasFetched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // utils
  const fetchMoviesAndStore = async (searchTerm: string) => {
    const url =
      searchTerm === ""
        ? `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        : `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
    const answer = await fetch(url).then((res) => res.json());
    setMovies(answer.results);
  };

  // business function
  const handleSearchChange = (searchInput: string) => {
    setSearchTerm(searchInput);
  };

  // effect on change searchTerm : search movies in DB after user stops typing.
  // Without delay the server respond too much requests from the page.
  // ... because too much searchs for posters.
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchMoviesAndStore(searchTerm);
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // effect on mount : get popular movies
  useEffect(() => {
    if (hasFetchedOnStart === false) {
      setHasFetched(true);
      fetchMoviesAndStore("");
    }
  }, []);

  return (
    <div className="App">
      <Header onToggle={() => ({})} theme="light" />
      <Search
        onChange={handleSearchChange}
        placeHolder="Rechercher un film..."
      />
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
