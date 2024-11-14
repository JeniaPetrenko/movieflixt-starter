//component for showing the movies page
import { useState, useEffect } from "react";
import { Header } from "../Components/UI/Header";

//import the IMovie interface for the type of movie data
import { IMovie } from "../Models/IMovie";
import { GridList } from "../Components/GridList";
import { LoadMovies } from "../Utilities/LoadMovies";

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  //useEffect is used to load the movies when the page is loaded

  useEffect(() => {
    loadMovies();
  }, []);

  //async function loadMovies to get the movieslist from the api and
  //these movies are set to the state "movies" using setMovies
  const loadMovies = async () => {
    const moviesData = await LoadMovies("discover/movie");
    setMovies(moviesData || []);
  };

  //render the page with the header and the grid list of movies
  //that get the "movies" to be loaded
  return (
    <>
      <Header title="Populära Filmer" />
      <GridList movies={movies} />
    </>
  );
};
