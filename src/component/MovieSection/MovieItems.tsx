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
          return <MovieItemCard key={movie.id} cover={movie.poster_path} />;
        })}
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
