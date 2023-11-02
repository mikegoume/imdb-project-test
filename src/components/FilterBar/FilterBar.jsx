import { useContext } from "react";

import { GenresContext, SelectedGenres } from "../../App";

import "./FilterBar.scss";

const FilterBar = (props) => {
  const { setGenreFitler } = props;

  const movieGenres = useContext(GenresContext);
  const genreSelected = useContext(SelectedGenres);

  const checkIfGenreIsSelected = (id) => {
    return genreSelected.indexOf(id) != -1;
  };

  console.log(genreSelected);

  return (
    <div className="bg-darknavy p-6 rounded-lg shadow-xl">
      {movieGenres && (
        <div className="flex flex-col">
          <span className="font-sans text-xl text-white mb-2">Genres</span>
          {movieGenres.map((genre) => (
            <label className="checkbox" key={genre.id}>
              <input
                className="checkbox__input"
                type="checkbox"
                onChange={() => setGenreFitler(genre.id)}
                checked={checkIfGenreIsSelected(genre.id)}
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
              <span className="font-sans text-lg text-white px-4">
                {genre.name}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
