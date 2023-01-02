import axios from "axios";
import React, { useEffect, useState } from "react";
import "./NowPlaying.css";

const NowPlaying = () => {
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f98b97a9b4da29e89cda43a029c156ec`
      )
      .then((res) => setMoviesToRender(res.data.results));
  }, [moviesToRender.length === 0]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f98b97a9b4da29e89cda43a029c156ec`
      )
      .then((res) => setMoviesGenres(res.data.genres));
  }, [moviesToRender]);

  return (
    <div className="now-playing-outter-container">
      {moviesToRender.map((element, index) => {
        return (
          <div key={index} className="card-outter-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
              alt="card-poster-path"
              className="card-poster-path-image"
            />
            <div className="card-info-container">
              <p className="card-title">{element.title}</p>
              <p className="card-release-date">{element.release_date}</p>
              <div className="card-genre-outter-container">
                {moviesGenres.map(
                  (movieGenre, index) =>
                    element.genre_ids.indexOf(movieGenre.id) !== -1 && (
                      <p key={index} className="card-genre-title">
                        {movieGenre.name}
                      </p>
                    )
                )}
              </div>
              <div className="card-vote-container">
                <p className="card-vote-title">{element.vote_average}</p>
              </div>
              <p className="">{element.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NowPlaying;
