// src/App.js
import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";
import Header from "./component/Header";
import Card from "./component/Card";
import NotFound from "./component/NotFound";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    setQuery(q);
    setPage(1);
    if (q) {
      const results = await searchMovie(q);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const moviesToDisplay = query ? searchResults : popularMovies;
  const displayedMovies = moviesToDisplay.slice(0, page * 10);

  return (
    <section>
      <div className="container flex justify-center mx-auto">
        <div className="mt-5 w-full">
          <Header onSearch={search} />
          <div className="mt-12 flex justify-center">
            {displayedMovies.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                  {displayedMovies.map((movie, i) => (
                    <Card key={i} movie={movie} />
                  ))}
                </div>
                {displayedMovies.length < moviesToDisplay.length && (
                  <div className="flex justify-center mt-10">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                      onClick={loadMore}>
                      Selanjutnya
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NotFound query={query} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
