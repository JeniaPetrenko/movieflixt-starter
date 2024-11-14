//Виконує запит до API для завантаження фільмів з переданого endpoint
//та використовує змінні середовища для отримання ключа, базової адреси та опцій мови

//axiox libraries to make http requests, to send get requests
import axios from "axios";
import { ITVshow } from "../Models/ITVshow";

export const LoadTvShows = async (endpoint: string): Promise<ITVshow[]> => {
  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const options = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}/${endpoint}?api_key=${key}&language=${options}`;
  console.log(url);

  console.log(key, baseUrl, options);
  const result = await axios.get(url);
  //   const result = await axios.get(
  //     "https://api.themoviedb.org/3/discover/tv?api_key=7b35db62c2be9745bcb97ad14ebd2f35&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
  //   );

  return result.data.results;
};
