import { createContext, useContext } from "react";

export const GenresListContext = createContext(undefined);

export function useGenresContext() {
  const genresList = useContext(GenresListContext);

  if (!genresList) {
    throw new Error("There is no list");
  }

  return genresList;
}
