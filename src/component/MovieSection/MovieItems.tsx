import React, { useState } from "react";
import styled from "styled-components";
import { getMovieData, IResultMovie } from "../../function/getMovieData";
import { MovieItemCard } from "./MovieItemCard";

export function MovieiItems() {
  const [movielist, setMovielist] = useState<IResultMovie[]>([]);

  React.useEffect(() => {
    (async () => {
      const [data, err] = await getMovieData({ query: "a", page: 1 });
      if (err) return;
      setMovielist(data.results);
    })();
  });

  return (
    <MovieContainer>
      {movielist &&
        movielist.map((movie) => {
          return <MovieItemCard key={movie.id} movie={movie} />;
        })}
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  display: grid;
  row-gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    margin: 0 10%;
  }
`;
