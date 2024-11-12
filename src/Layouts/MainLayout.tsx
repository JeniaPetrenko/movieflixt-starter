//The main component of the app that displays the MoviesPage and HomePage components.
import { MoviesPage } from "../Pages/MoviesPage";
import { HomePage } from "../Pages/HomePage";

export const MainLayout = () => {
  return (
    <main>
      <MoviesPage />
      <HomePage />
    </main>
  );
};
