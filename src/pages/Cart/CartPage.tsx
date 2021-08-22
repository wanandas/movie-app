import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IResultMovie } from "../../function/getMovieData";
import { useCartMovie } from "../../function/hook/useCartMovie";
import {
  deleteAllMovieId,
  deleteMovieId,
  MovieContext,
} from "../../store/MovieProvider";
import { COLORS } from "../../utils/COLOR";
import { TimesIcon } from "../../utils/icon";

export default function CartPage() {
  const [cart, setCart] = useState<IResultMovie[]>([]);
  const { getMovieList } = useCartMovie();
  const { state, dispatch } = useContext(MovieContext);

  const handlePrice = (cart: any[]) => {
    const countMovie = cart.length;
    const price = countMovie * 100;

    if (countMovie > 5) {
      const discount = countMovie * 100 * (20 / 100);
      return price - discount;
    }

    if (countMovie > 3) {
      const discount = countMovie * 100 * (10 / 100);
      return price - discount;
    }

    return price;
  };

  React.useEffect(() => {
    (async () => {
      const movieList = await getMovieList(state.movieIdList);
      setCart(movieList as IResultMovie[]);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.movieIdList]);

  return (
    <Contain>
      <h1 style={{ textAlign: "center" }}>ALL USERS</h1>

      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid #111111",
          padding: "2rem 0",
        }}
      >
        <table width="100%">
          <thead>
            <tr style={{ alignContent: "center" }}>
              <th>
                <h3>id</h3>
              </th>
              <th>
                <h3>Title movie</h3>
              </th>
              <th>
                <h3>picture</h3>
              </th>
              <th>
                <h3>price</h3>
              </th>
              <th>
                <h3>delete</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((movie, index) => {
              return (
                <tr key={index} style={{ alignContent: "center" }}>
                  <td>
                    <p>{movie.id}</p>
                  </td>
                  <td>
                    <p>{movie.title}</p>
                  </td>
                  <td>
                    <Anchor href={`#${movie.poster_path}-${movie.id}`}>
                      View Image
                    </Anchor>
                    <LightBox href="#" id={`${movie.poster_path}-${movie.id}`}>
                      <span
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                        }}
                      />
                    </LightBox>
                  </td>
                  <td>$100</td>
                  <td>
                    <Anchor
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteMovieId(movie.id));
                      }}
                    >
                      <TimesIcon />
                    </Anchor>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Totle</td>
              <td>${handlePrice(cart)}</td>
            </tr>
            {cart.length > 0 && (
              <tr style={{ marginTop: "2rem" }}>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Anchor
                    onClick={() => {
                      dispatch(deleteAllMovieId());
                    }}
                  >
                    delete all
                  </Anchor>
                </td>
                <td></td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </Contain>
  );
}

const Contain = styled.div`
  text-transform: uppercase;
  box-sizing: border-box;
  min-width: 100%;
  padding: 2rem 0;

  & td {
    &:nth-child(1) {
      display: none;
    }
  }
  & th {
    &:nth-child(1) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 10%;
    & td {
      &:nth-child(1) {
        display: unset;
      }
    }
    & th {
      &:nth-child(1) {
        display: unset;
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 2rem 15%;
  }
`;

const LightBox = styled.a`
  display: none;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3em;
  background: rgba(0, 0, 0, 0.8);

  &&:target {
    display: block;
  }

  && span {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Anchor = styled.a`
  cursor: pointer;
  color: ${COLORS.PRIMARY};
  text-decoration: none;
  transition: 0.3 color ease-in;
  &&:hover {
    color: red;
  }
`;
