import React, { useEffect, useState } from "react";
import { MovieiItems } from "../../component/MovieSection/MovieItems";
import { Searchbar } from "../../component/Searchbar";

export default function Home() {
  // do it later
  const [page] = useState<number>(1);

  const [query, setQuery] = useState<string>("");
  const [cardIdList, setCardIdList] = useState<any[]>(
    JSON.parse(localStorage.getItem("idMovies") as string) || []
  );

  useEffect(() => {
    cardIdList.length > 0 &&
      window.localStorage.setItem("idMovies", JSON.stringify(cardIdList));
  }, [cardIdList]);

  return (
    <div>
      <Searchbar query={query} setQuery={setQuery} />
      <MovieiItems query={query} page={page} setCardIdList={setCardIdList} />
    </div>
  );
}
