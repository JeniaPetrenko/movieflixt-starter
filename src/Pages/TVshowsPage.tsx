//compponent for showing the tv-shows page
import { useState, useEffect } from "react";
import { Header } from "../Components/UI/Header";
import { GridList } from "../Components/GridList";

import axios from "axios";
import { ITVshow } from "../Models/ITVshow";
import { LoadTvShows } from "../Utilities/LoadShows";

export const TvshowsPage = () => {
  const [tvShows, setTvShows] = useState<ITVshow[]>([]);

  //useEffect is used to load the tv-shows when the page is loaded

  useEffect(() => {
    loadTvShows();
  }, []);

  const loadTvShows = async () => {
    setTvShows(await LoadTvShows("discover/tv"));
  };

  //async function loadTvShows to get the tv-shows list from the api and
  //these tv-shows are set to the state "tvShows" using setTvShows

  //render the page with the header and the grid list of tv-shows
  //that get the "tvShows" to be loaded
  return (
    <>
      <Header title="Populära TV-Shows" />
      <GridList tvShows={tvShows} />
    </>
  );
};
