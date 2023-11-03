import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import FilterBar from "./components/FilterBar/FilterBar";
import Navbar from "./components/Navbar/Navbar";
import NowPlaying from "./components/NowPlaying";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import Upcoming from "./components/Upcoming/Upcoming";
import LoginPage from "./screens/auth/loginPage";
import "./App.css";

export const UserContext = createContext(null);
export const GenresContext = createContext(null);
export const SelectedGenres = createContext([]);

const App = () => {
  const [movieGenres, setMoviesGenres] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [genresSelected, setGenresSelected] = useState([]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f98b97a9b4da29e89cda43a029c156ec`
      )
      .then((res) => setMoviesGenres(res.data.genres));
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLoggedIn"));

    if (user) {
      setUserLoggedIn(user);
    }
  }, []);

  const handleUserLogin = (data) => {
    localStorage.setItem("userLoggedIn", JSON.stringify(data));

    setUserLoggedIn(data);
  };

  const handleUserLogout = () => {
    localStorage.removeItem("userLoggedIn");

    setUserLoggedIn(null);
  };

  const handleFilterSelect = (filter) => {
    let newGenresSelected = [];

    if (genresSelected.indexOf(filter) != -1) {
      genresSelected.forEach(
        (genre) => genre !== filter && newGenresSelected.push(genre)
      );
    } else {
      newGenresSelected = [...genresSelected, filter];
    }

    setGenresSelected(newGenresSelected);
  };

  return (
    <UserContext.Provider value={userLoggedIn}>
      {!userLoggedIn ? (
        <LoginPage onFormSubmit={handleUserLogin} />
      ) : (
        <GenresContext.Provider value={movieGenres}>
          <SelectedGenres.Provider value={genresSelected}>
            <div className="screen-layout-container">
              <header className="navbar">
                <Navbar onLogout={handleUserLogout} />
              </header>
              <section className="sidebar">
                <FilterBar
                  setGenreFitler={(genre) => handleFilterSelect(genre)}
                />
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
          </SelectedGenres.Provider>
        </GenresContext.Provider>
      )}
    </UserContext.Provider>
  );
};

export default App;
