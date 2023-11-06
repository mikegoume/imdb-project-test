import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AiOutlineUnorderedList, AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import { Tooltip } from "react-tooltip";

import StarRating from "../../../ui-components/StarRating/StarRating";
import { GenresContext } from "../../../../App";

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
    index,
    isSelected,
    onSelectMovie,
  } = props;

  const moviesGenres = useContext(GenresContext);

  const cardOutterContainerClassnames = classNames({
    "card-outter-container": true,
    "is-Selected": isSelected,
  });

  return (
    <div
      className={cardOutterContainerClassnames}
      onClick={() => onSelectMovie(index)}
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
          {moviesGenres?.map(
            (movieGenre, index) =>
              genre_ids.indexOf(movieGenre.id) !== -1 && (
                <p key={index} className="card-genre-title">
                  {movieGenre.name}
                </p>
              )
          )}
        </div>
        <div className="card-vote-container">
          <CircularProgressbar
            value={vote_average.toFixed(1) * 10}
            text={`${vote_average.toFixed(1)}`}
            strokeWidth={10}
            background="white"
            styles={{
              path: {
                // Path color
                stroke: `#008170`,
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transformOrigin: "center center",
              },
              text: {
                // Text color
                fill: "#008170",
                // Text size
                fontSize: 28,
                fontWeight: 800,
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#fff",
              },
            }}
          />
        </div>
        {isSelected && <StarRating rating={vote_average} />}
        <div className="card-overview-container">
          <p className="card-overview">{overview}</p>
        </div>
        {isSelected && (
          <div className="flex flex-row gap-5">
            <button
              data-tooltip-id="create-custom-list-tooltip"
              data-tooltip-content="Add to list"
              className="w-10 h-10 flex items-center justify-center bg-teal rounded-full"
            >
              <AiOutlineUnorderedList size={20} color="white" />
            </button>
            <button
              data-tooltip-id="add-to-favourite-tooltip"
              data-tooltip-content="Add to favourite"
              className="w-10 h-10 flex items-center justify-center bg-teal rounded-full"
            >
              <AiFillHeart size={20} color="white" />
            </button>
            <button
              data-tooltip-id="add-to-your-watchlist-tooltip"
              data-tooltip-content="Add to your watchlist"
              className="w-10 h-10 flex items-center justify-center bg-teal rounded-full"
            >
              <BsFillBookmarkFill color="white" />
            </button>
            <Tooltip id="create-custom-list-tooltip" />
            <Tooltip id="add-to-favourite-tooltip" />
            <Tooltip id="add-to-your-watchlist-tooltip" />
          </div>
        )}
      </div>
    </div>
  );
};

NowPlayingMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
};

export default memo(NowPlayingMovie);
