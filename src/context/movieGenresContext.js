import { createContext, useContext } from "react";

export const GenresListContext = createContext(undefined);

export function useGenresContext() {
  const genresList = useContext(GenresListContext);

  return genresList;
}
