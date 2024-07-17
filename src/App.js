// src/App.js
import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
          className="w-80 h-auto flex-wrap p-3 rounded-xl border shadow-xl text-center md:w-80 "
          key={i}>
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt=""
            srcset=""
            className="w-full h-[26rem] rounded-xl object-cover "
          />
          <div className="">
            <div className="h-20 flex items-center justify-center">
              <div className="movie-title text-2xl font-semibold">
                {movie.title}
              </div>
            </div>
            <div className="movie-date ">{movie.release_date}</div>
            <div className="movie-rate text-red-400 underline">
              {movie.vote_average}
            </div>
          </div>
        </div>
      );
    });
  };

  const search = (q) => {
    fetch(`https://api.github.com/search/users?q=${q}`);
  };
  return (
    <section>
      <div className="container flex justify-center mx-auto">
        <div className="mt-5 w-full">
          <div className="header flex justify-center">
            <h1 className="text-3xl font-semibold xl:text-6xl">
              zend<span className="text-red-400 font-bold">movi</span>
            </h1>
          </div>
          <div className="search mt-5 w-full flex justify-center xl:mt-10">
            <input
              type="text"
              placeholder="Masukkan Judul..."
              className="w-96 h-8 rounded-lg px-3 ring-2 ring-red-300 xl:h-11"
              onChange={({ target }) => search(target.value)}
            />
          </div>
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-10">
              <PopularMovieList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
