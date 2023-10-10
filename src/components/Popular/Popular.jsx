import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";

import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useSelectedGenresContext } from "../../context/selectedGenresContext";
import NowPlayingMovie from "../NowPlaying/components/NowPlayingMovie/NowPlayingMovie";

const Popular = () => {
  const [moviesPage, setMoviesPage] = useState(1);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [movieSelectedIndex, setMovieSelectedIndex] = useState(-1);

  const genreSelected = useSelectedGenresContext();

  useEffect(() => {
    /**
     * We need to avoid the case of the first render call this useEffect twice
     */
    if (moviesToRender.length !== 0 && moviesPage === 1) {
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f98b97a9b4da29e89cda43a029c156ec&page=${moviesPage}`
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
  });

  useBottomScrollListener(handleOnDocumentBottom);

  return (
    <div className="now-playing-outter-container">
      {moviesToRender.map((element, index) => {
        return (
          (!genreSelected ||
            element.genre_ids.indexOf(genreSelected.id) !== -1) && (
            <NowPlayingMovie
              key={index}
              movie={element}
              isSelected={index === movieSelectedIndex}
              onSelectMovie={() => handleSetSelectedMovie}
            />
          )
        );
      })}
    </div>
  );
};

export default Popular;
