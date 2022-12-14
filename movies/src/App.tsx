import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import { MovieMiniatureType } from "./Containers/MovieMiniature";
import DetailedView from "./Containers/DetailedView";
import Mosaic from "./Containers/Mosaic";
import Main from "./Components/Main";

function App() {
  // internal states
  const [movies, setMovies] = useState([]);
  const [isThemeLight, setIsThemeLight] = useState(true);
  const [hasFetchedOnStart, setHasFetched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDetailedView, setIsDetailedView] = useState(false);
  const [movieToDetail, setMovieToDetail] = useState({
    original_title: "",
    poster_path: "",
    id: 0,
  });

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
  const handleClickBack = () => setIsDetailedView(false);
  const handleClickMiniature = (movie: MovieMiniatureType) => {
    setIsDetailedView(true);
    setMovieToDetail(movie);
  };
  const handleToggle = () => {
    setIsThemeLight(!isThemeLight);
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
      <Header
        onToggle={handleToggle}
        isThemeLight={isThemeLight}
        isBack={isDetailedView}
        onClickBack={handleClickBack}
      />
      <Main isThemeLight={isThemeLight}>
        {isDetailedView ? (
          <DetailedView movie={movieToDetail} />
        ) : (
          <Mosaic
            handleClickMiniature={handleClickMiniature}
            handleSearchChange={handleSearchChange}
            movies={movies}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
