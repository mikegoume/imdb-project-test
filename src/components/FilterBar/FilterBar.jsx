import { useSelectedGenresContext } from "../../context/selectedGenresContext";
import { useGenresContext } from "../../context/movieGenresContext";
import "./FilterBar.scss";

const FilterBar = (props) => {
  const { setGenreFitler } = props;

  const movieGenres = useGenresContext();
  const genreSelected = useSelectedGenresContext();

  return (
    <div className="filterbar-outter-container h-min">
      {movieGenres && (
        <div className="filterbar-inner-container">
          <span className="filterbar-section-title">Genres</span>
          {movieGenres.map((genre) => (
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
