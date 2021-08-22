import React from "react";
import { MovieiItems } from "../../component/MovieSection/MovieItems";
import { Navbar } from "../../component/Navbar/Navbar";
import { Searchbar } from "../../component/Searchbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <MovieiItems />
    </div>
  );
}
