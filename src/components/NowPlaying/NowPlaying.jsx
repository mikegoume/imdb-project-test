import React, { useEffect, useState, useCallback, useContext } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import axios from "axios";

import NowPlayingMovie from "./components/NowPlayingMovie/NowPlayingMovie";
import { SelectedGenres } from "../../App";

import "./NowPlaying.css";

const NowPlaying = () => {
  const [moviesPage, setMoviesPage] = useState(1);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [movieSelectedIndex, setMovieSelectedIndex] = useState(-1);

  const genresSelected = useContext(SelectedGenres);

  useEffect(() => {
    /**
     * We need to avoid the case of the first render call this useEffect twice
     */
    if (moviesToRender.length !== 0 && moviesPage === 1) {
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f98b97a9b4da29e89cda43a029c156ec&page=${moviesPage}`
      )
      .then((res) => {
        setMoviesToRender([...moviesToRender, ...res.data.results]);
      });
  }, [moviesToRender.length === 0, moviesPage]);

  const handleOnDocumentBottom = useCallback(() => {
    setMoviesPage(moviesPage + 1);
  });

  const handleSetSelectedMovie = useCallback((id) => {
    setMovieSelectedIndex(id);
  }, []);

  useBottomScrollListener(handleOnDocumentBottom);

  return (
    <div className="now-playing-outter-container">
      {moviesToRender.map((element, index) => {
        return (
          (genresSelected.length === 0 ||
            element.genre_ids.indexOf(genresSelected.id) !== -1) && (
            <NowPlayingMovie
              key={index}
              index={index}
              movie={element}
              isSelected={index === movieSelectedIndex}
              onSelectMovie={handleSetSelectedMovie}
            />
          )
        );
      })}
    </div>
  );
};

export default NowPlaying;
