import React from "react";

const Header = ({ onSearch }) => {
  return (
    <>
      <div className="header flex justify-center">
        <h1 className="text-3xl font-semibold xl:text-6xl">
          zend<span className="text-red-400 font-bold">movi</span>
        </h1>
      </div>
      <div className="search mt-5 w-80 mx-auto flex justify-center md:w-full xl:mt-10">
        <input
          type="text"
          placeholder="Masukkan Judul..."
          className="w-96 h-8 rounded-lg px-3 ring-2 ring-red-300 xl:h-11"
          onChange={({ target }) => onSearch(target.value)}
        />
      </div>
    </>
  );
};

export default Header;
