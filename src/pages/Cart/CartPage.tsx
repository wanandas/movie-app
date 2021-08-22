import React, { useContext, useState } from "react";
import { IResultMovie } from "../../function/getMovieData";
import { useCartMovie } from "../../function/hook/useCartMovie";
import { MovieContext } from "../../store/MovieProvider";

export default function CartPage() {
  const [cart, setCart] = useState<IResultMovie[]>([]);
  const { getMovieList } = useCartMovie();
  const { state } = useContext(MovieContext);

  React.useEffect(() => {
    (async () => {
      const movieList = await getMovieList(state.movieIdList);
      setCart(movieList as IResultMovie[]);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {cart.map((movie) => {
        return <div>{movie.title}</div>;
      })}
    </div>
  );
}
