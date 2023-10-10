import { createContext, useContext } from "react";

export const SelectedGenreContext = createContext(undefined);

export function useSelectedGenresContext() {
  const selectedGenres = useContext(SelectedGenreContext);

  return selectedGenres;
}
