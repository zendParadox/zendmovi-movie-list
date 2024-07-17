// src/App.js
import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";
import Header from "./component/Header";
import Card from "./component/Card";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    setQuery(q);
    if (q) {
      const results = await searchMovie(q);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const moviesToDisplay = query ? searchResults : popularMovies;

  return (
    <section>
      <div className="container flex justify-center mx-auto">
        <div className="mt-5 w-full">
          <Header onSearch={search} />
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {moviesToDisplay.map((movie, i) => (
                <Card key={i} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
