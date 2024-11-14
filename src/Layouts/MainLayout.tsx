//The main component of the app that displays the MoviesPage and HomePage components.
import { MoviesPage } from "../Pages/MoviesPage";
import { HomePage } from "../Pages/HomePage";
import { TvshowsPage } from "../Pages/TVshowsPage";

export const MainLayout = () => {
  return (
    <main>
      <HomePage />
      <MoviesPage />
      <TvshowsPage />
    </main>
  );
};
