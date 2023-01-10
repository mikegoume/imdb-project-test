import React from "react";
import PropTypes from "prop-types";

import "./NowPlayingMovie.css";

const NowPlayingMovie = (props) => {
  const {
    movie: {
      title,
      release_date,
      vote_average,
      overview,
      genre_ids,
      poster_path,
    },
    moviesGenres,
    isSelected,
    onSelectMovie,
  } = props;

  return (
    <div
      className={
        isSelected ? "card-outter-selected-container" : "card-outter-container"
      }
      onClick={onSelectMovie}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="card-poster-path"
        className="card-poster-path-image"
      />
      <div className="card-info-container">
        <p className="card-title">{title}</p>
        <p className="card-release-date">{release_date}</p>
        <div className="card-genre-outter-container">
          {moviesGenres.map(
            (movieGenre, index) =>
              genre_ids.indexOf(movieGenre.id) !== -1 && (
                <p key={index} className="card-genre-title">
                  {movieGenre.name}
                </p>
              )
          )}
        </div>
        <div className="card-vote-container">
          <p className="card-vote-title">{vote_average}</p>
        </div>
        <div className="card-overview-container">
          <p className="card-overview">{overview}</p>
        </div>
        {isSelected && <p className="">I am selected</p>}
      </div>
    </div>
  );
};

NowPlayingMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  moviesGenres: PropTypes.array.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
};

export default NowPlayingMovie;
