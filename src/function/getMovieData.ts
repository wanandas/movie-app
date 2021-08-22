import axios from "axios";

export interface IGetMovieValue {
  page: number;
  results: IResultMovie[];
  total_pages: number;
  total_results: number;
}

export interface IResultMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export async function getMovieData({
  query,
  page = 1,
}: {
  query: string;
  page: number;
}) {
  try {
    const getValue = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_APP_ID}&query=${query}&page=${page}`
    );

    return [getValue.data as IGetMovieValue, null];
  } catch (err) {
    console.error(err);
    return [null, err];
  }
}
