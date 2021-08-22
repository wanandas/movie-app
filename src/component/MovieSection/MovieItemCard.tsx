import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IResultMovie } from "../../function/getMovieData";
import { addMovieId, MovieContext } from "../../store/MovieProvider";
import { COLORS } from "../../utils/COLOR";
import { ShoppingCart } from "../../utils/icon";

export function MovieItemCard({ movie }: { movie: IResultMovie }) {
  const { state, dispatch } = useContext(MovieContext);

  return (
    <MovieItemCardContainer>
      <Card>
        <ImageCover>
          <Cover>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="cover"
            />
          </Cover>
        </ImageCover>
        <ImageContent>
          <h4>{movie.title}</h4>
          <p>
            <strong>Vote Avg.</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Release</strong> {movie.release_date}
          </p>
        </ImageContent>
        <Cart>
          <ShoppingCart
            color={COLORS.PRIMARY}
            size="sm"
            onClick={() => {
              dispatch(
                addMovieId(
                  (() => {
                    if (state.movieIdList.find((id) => id === movie.id)) {
                      return [];
                    } else {
                      return [movie.id];
                    }
                  })()
                )
              );
            }}
          />
        </Cart>
      </Card>
    </MovieItemCardContainer>
  );
}

const Cart = styled.div`
  opacity: 0;
  position: absolute;
  top: 2%;
  border-radius: 0.25rem;
  right: 5%;
  padding: 0.25rem;
  background-color: ${COLORS.WHITE};
  transition: 0.5s all ease-out;
  cursor: pointer;
`;

const MovieItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const ImageCover = styled.div`
  width: 150px;
`;

const Cover = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  transition: 0.2s opacity ease-in-out;

  & img {
    aspect-ratio: 6/9;
    width: 100%;
  }
`;

const ImageContent = styled.div`
  margin: 0.5rem 0 0;
  & h4 {
    margin: 0;
  }
  & p {
    margin: 0;
  }
`;

const Card = styled.div`
  width: 150px;
  overflow: hidden;
  position: relative;

  &:hover {
    & ${Cart} {
      opacity: 1;
    }
    & ${Cover} {
      opacity: 0.5;
    }
  }
`;
