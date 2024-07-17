import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_URL;

export const getMovieList = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/movie/popular?api_key=${apiKey}`
    );
    console.log({ movieList: response.data.results });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(
      `${baseURL}/search/movie?api_key=${apiKey}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching movie:", error);
    throw error;
  }
};
