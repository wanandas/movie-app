import React, { useEffect, useState } from "react";
import { MovieiItems } from "../../component/MovieSection/MovieItems";
import { Searchbar } from "../../component/Searchbar";
import { useCartMovie } from "../../function/hook/useCartMovie";
import { MovieProvider } from "../../store/MovieProvider";

export default function Home() {
  // do it later
  const [page] = useState<number>(1);

  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <Searchbar query={query} setQuery={setQuery} />
      <MovieiItems query={query} page={page} />
    </div>
  );
}
