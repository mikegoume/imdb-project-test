import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import FilterBar from "./components/FilterBar/FilterBar";
import Navbar from "./components/Navbar/Navbar";
import NowPlaying from "./components/NowPlaying";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import Upcoming from "./components/Upcoming/Upcoming";
import { GenresListContext } from "./context/movieGenresContext";
import { SelectedGenreContext } from "./context/selectedGenresContext";
import "./App.css";
import LoginForm from "./pages/auth/loginForm";

const App = () => {
  const [movieGenres, setMoviesGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(null);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f98b97a9b4da29e89cda43a029c156ec`
      )
      .then((res) => setMoviesGenres(res.data.genres));
  }, []);

  return (
    <GenresListContext.Provider value={movieGenres}>
      <SelectedGenreContext.Provider value={genreSelected}>
        {user ? (
          <LoginForm />
        ) : (
          <div className="screen-layout-container">
            <header className="navbar">
              <Navbar />
            </header>
            <section className="sidebar">
              <FilterBar setGenreFitler={(genre) => setGenreSelected(genre)} />
            </section>
            <main className="main">
              <Routes>
                <Route path="/" element={<NowPlaying />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/upcoming" element={<Upcoming />} />
              </Routes>
            </main>
          </div>
        )}
      </SelectedGenreContext.Provider>
    </GenresListContext.Provider>
  );
};

export default App;
