import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  // interface Responce {}
  const [responce1, setResponce1] = useState<any>("");
  const [responce2, setResponce2] = useState<any>("");
  const [responce3, setResponce3] = useState<any>("");
  const [responce4, setResponce4] = useState<any>("");
  const [responce5, setResponce5] = useState<any>("");

  useEffect(() => {
    async function fetchMoviesJSON(url: string) {
      const response = await fetch(url);
      const movies = await response.json();
      return movies;
    }

    fetchMoviesJSON(
      "http://www.omdbapi.com/?s=thor&apikey=73b9e7f&type=movie"
    ).then((movies) => {
      setResponce1(movies.Search);
      console.log(movies.Search);
    });

    fetchMoviesJSON(
      "http://www.omdbapi.com/?s=star wars&apikey=73b9e7f&type=movie"
    ).then((movies) => {
      setResponce2(movies.Search);
      console.log(movies.Search);
    });

    fetchMoviesJSON(
      "http://www.omdbapi.com/?s=iron man&apikey=73b9e7f&type=movie"
    ).then((movies) => {
      setResponce3(movies.Search);
      console.log(movies.Search);
    });

    fetchMoviesJSON(
      "http://www.omdbapi.com/?s=the lord of the rings&apikey=73b9e7f"
    ).then((movies) => {
      setResponce4(movies.Search);
      console.log(movies.Search);
    });

    fetchMoviesJSON(
      "http://www.omdbapi.com/?s=harry potter&apikey=73b9e7f&type=movie"
    ).then((movies) => {
      setResponce5(movies.Search);
      console.log(movies.Search);
    });
  }, []);

  const [search, setSearch] = useState<string>("");
  return (
    <div className="md:px-6">
      <Navbar setSearch={setSearch} search={search} />
      <Slider heading={"Thor Movies"} Search={responce1} />
      <Slider heading={"Star Wars Movies"} Search={responce2} />
      <Slider heading={"Iron Man Movies"} Search={responce3} />
      <Slider heading={"Lord of the Rings Movies"} Search={responce4} />
      <Slider heading={"Harry Potter Movies"} Search={responce5} />
    </div>
  );
}

export default App;
