import { createContext, useState } from "react";

import { Routes, Route } from "react-router-dom";
import FilterBar from "./components/FilterBar/FilterBar";
import Navbar from "./components/Navbar/Navbar";
import NowPlaying from "./components/NowPlaying";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import Upcoming from "./components/Upcoming/Upcoming";
import "./App.css";

export const GenreContext = createContext(null);

const App = () => {
  const [genreSelected, setGenreSelected] = useState(null);

  return (
    <GenreContext.Provider value={genreSelected}>
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
    </GenreContext.Provider>
  );
};

export default App;
