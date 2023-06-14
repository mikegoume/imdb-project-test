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
      <Navbar />
      <div
        style={{
          display: "flex",
          gap: "2em",
          width: "80%",
          marginInline: "auto",
          paddingTop: 40,
        }}
      >
        <FilterBar setGenreFitler={(genre) => setGenreSelected(genre)} />
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </div>
    </GenreContext.Provider>
  );
};

export default App;
