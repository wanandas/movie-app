import React, { useState } from "react";
import { IResultMovie } from "../../function/getMovieData";
import { useCartMovie } from "../../function/hook/useCartMovie";

export default function CartPage() {
  const [cart, setCart] = useState<IResultMovie[]>([]);
  const { getMovieList } = useCartMovie();

  React.useEffect(() => {
    (async () => {
      const movieList = await getMovieList();
      setCart(movieList as IResultMovie[]);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {cart.map((movie) => {
        return <div>{movie.id}</div>;
      })}
    </div>
  );
}
