import React from "react";
import StarIcon from "../assets/icon/icon-stars.svg";

const Card = ({ movie }) => {
  return (
    <div className="w-80 h-auto flex-wrap p-3 rounded-xl border shadow-xl text-center md:w-80">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[26rem] rounded-xl object-cover"
      />
      <div className="">
        <div className="h-20 flex items-center justify-center">
          <div className="movie-title text-2xl font-semibold">
            {movie.title}
          </div>
        </div>
        <div className="movie-date">{movie.release_date}</div>
        <div className="movie-rate text-red-400 underline flex justify-center items-center">
          <img src={StarIcon} alt="stars" className="w-5 h-5 mx-1" />
          {movie.vote_average}{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
