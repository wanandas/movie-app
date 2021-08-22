import axios from "axios";
import { IResultMovie } from "../getMovieData";

export function useCartMovie() {
  const getMovie = async (id: string) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1d0e0b022289a6699e950679a97ee686`
    );
    return res.data as IResultMovie;
  };

  const getMovieList = async (idsItem: any[]) => {
    return Promise.all(idsItem.map((id: string) => getMovie(id)));
  };

  return { getMovieList };
}
