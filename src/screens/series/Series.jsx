import React, { useEffect } from "react";

const Series = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=f98b97a9b4da29e89cda43a029c156ec"
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <div></div>;
};

export default Series;
