import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FilterBar.scss";
import { useContext } from "react";
import { GenreContext } from "../../App";

const FilterBar = (props) => {
  const { setGenreFitler } = props;

  const genreSelected = useContext(GenreContext);
  console.log("FilterBar: ", genreSelected);

  const [genres, setGenres] = useState(undefined);

  useEffect(() => {
    if (!genres) {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=f98b97a9b4da29e89cda43a029c156ec`
        )
        .then((res) => {
          setGenres(res.data.genres);
        });
    }
  }, []);

  return (
    <div className="filterbar-outter-container h-min">
      {genres && (
        <div className="filterbar-inner-container">
          <span className="filterbar-section-title">Genres</span>
          {genres.map((genre) => (
            <label className="checkbox" key={genre.id}>
              <input
                className="checkbox__input"
                type="checkbox"
                onChange={() => setGenreFitler(genre)}
                checked={genreSelected?.id === genre.id}
              />
              <svg
                className="checkbox__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
              >
                <rect
                  width="21"
                  height="21"
                  x=".5"
                  y=".5"
                  fill="#FFF"
                  stroke="#006F94"
                  rx="3"
                />
                <path
                  className="tick"
                  stroke="#6EA340"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M4 10l5 5 9-9"
                />
              </svg>
              <span className="checkbox__label"> {genre.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
