import axios from "axios";

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

    return [getValue.data, null];
  } catch (err) {
    console.error(err);
    return [null, err];
  }
}
